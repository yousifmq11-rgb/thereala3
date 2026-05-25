import { NextRequest, NextResponse } from "next/server";
import { sendCustomerConfirmation, sendShopNotification } from "@/lib/email";

const SHEET_URL = process.env.GOOGLE_SCRIPT_URL || "";

async function postToScript(body: unknown) {
  // Step 1: POST to trigger script execution (Google returns 302)
  const first = await fetch(SHEET_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
    redirect: "manual",
  });

  // Step 2: GET the redirect URL to retrieve the script's output
  const location = first.headers.get("location");
  if (!location) {
    // No redirect — try to parse response directly
    const text = await first.text();
    return JSON.parse(text);
  }

  const second = await fetch(location, { method: "GET", redirect: "follow" });
  const text = await second.text();

  try {
    return JSON.parse(text);
  } catch {
    throw new Error("Script returned non-JSON: " + text.slice(0, 300));
  }
}

/* ── GET: return booked slots for a date ── */
export async function GET(req: NextRequest) {
  const date = req.nextUrl.searchParams.get("date");
  if (!date) return NextResponse.json({ booked: [] });

  try {
    const res = await fetch(`${SHEET_URL}?date=${date}`, {
      cache: "no-store",
      redirect: "follow",
    });
    const data = await res.json();
    return NextResponse.json({ booked: data.booked || [] });
  } catch {
    return NextResponse.json({ booked: [] });
  }
}

/* ── POST: save booking + create Google Calendar event ── */
export async function POST(req: NextRequest) {
  const body = await req.json();

  if (!SHEET_URL) {
    // dev mode — still send emails if configured
    if (body.email) {
      try {
        await Promise.all([
          sendCustomerConfirmation(body),
          sendShopNotification(body),
        ]);
      } catch (e) {
        console.error("Email error (dev):", e);
      }
    }
    return NextResponse.json({ status: "ok" });
  }

  try {
    const data = await postToScript(body);

    if (data?.error === "conflict") {
      return NextResponse.json({ error: "TIME_TAKEN" }, { status: 409 });
    }

    // Send confirmation emails (non-blocking — don't fail booking if email fails)
    if (body.email) {
      Promise.all([
        sendCustomerConfirmation(body),
        sendShopNotification(body),
      ]).catch((e) => console.error("Email error:", e));
    }

    return NextResponse.json({ status: "ok" });
  } catch (err) {
    console.error("Script error:", err);
    return NextResponse.json({ error: "FAILED" }, { status: 500 });
  }
}

import { NextRequest, NextResponse } from "next/server";

const SHEET_URL = process.env.GOOGLE_SCRIPT_URL || "";

/* ── GET: return booked slots for a date ── */
export async function GET(req: NextRequest) {
  const date = req.nextUrl.searchParams.get("date");
  if (!date) return NextResponse.json({ booked: [] });

  try {
    const res = await fetch(`${SHEET_URL}?date=${date}`, { cache: "no-store" });
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
    return NextResponse.json({ status: "ok" }); // dev mode
  }

  try {
    const res = await fetch(SHEET_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const data = await res.json();

    if (data.error === "conflict") {
      return NextResponse.json({ error: "TIME_TAKEN" }, { status: 409 });
    }

    return NextResponse.json({ status: "ok" });
  } catch {
    return NextResponse.json({ error: "FAILED" }, { status: 500 });
  }
}

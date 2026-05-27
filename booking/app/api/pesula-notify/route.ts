import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email } = body;

  if (!name || !email) {
    return NextResponse.json({ error: "Missing name or email" }, { status: 400 });
  }

  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_KEY;

  // If Supabase is not configured, accept silently (email captured client-side fallback)
  if (!supabaseUrl || !supabaseKey) {
    console.log("Pesula waitlist signup (no Supabase configured):", { name, email });
    return NextResponse.json({ status: "ok" });
  }

  try {
    const res = await fetch(`${supabaseUrl}/rest/v1/pesula_waitlist`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "apikey": supabaseKey,
        "Authorization": `Bearer ${supabaseKey}`,
        "Prefer": "return=minimal",
      },
      body: JSON.stringify({ name, email, created_at: new Date().toISOString() }),
    });

    if (!res.ok) {
      const text = await res.text();
      console.error("Supabase error:", text);
      return NextResponse.json({ error: "Failed to save" }, { status: 500 });
    }

    return NextResponse.json({ status: "ok" });
  } catch (err) {
    console.error("Pesula notify error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

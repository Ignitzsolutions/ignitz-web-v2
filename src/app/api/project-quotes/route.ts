import { NextResponse } from "next/server";

import { validateQuoteLeadInput } from "@/lib/projectQuote";
import { saveQuoteLead } from "@/lib/quoteLeadStore";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { errors: { form: "Send valid quotation details." }, ok: false },
      { status: 400 },
    );
  }

  const validation = validateQuoteLeadInput(body);
  if (!validation.ok) {
    return NextResponse.json({ errors: validation.errors, ok: false }, { status: 400 });
  }

  try {
    const saved = saveQuoteLead(validation.value);
    return NextResponse.json({ ok: true, requestId: saved.id });
  } catch (error) {
    console.error("Unable to save project quote lead", error);
    return NextResponse.json(
      { errors: { form: "We could not save the request. Please try again." }, ok: false },
      { status: 500 },
    );
  }
}

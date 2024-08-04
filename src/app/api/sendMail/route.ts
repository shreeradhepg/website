"use server";
import { NextRequest, NextResponse } from "next/server";
import { sendMail } from "@/lib/mail";

export async function POST(req: NextRequest) {
  const { subject, body } = await req.json();

  try {
    const result = await sendMail({ subject, body });
    return NextResponse.json({ success: true, result });
  } catch (error: any) {
    console.error("Failed to send email:", error.message);
    return NextResponse.json(
      { success: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}

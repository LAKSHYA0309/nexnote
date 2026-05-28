import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  // Completely mocked endpoint because all premium features are unlocked by default
  return NextResponse.json({ url: "/dashboard" });
}

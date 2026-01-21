// app/api/auth/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  // placeholder: real auth logic later
  return NextResponse.json({ message: "Auth endpoint placeholder" });
}

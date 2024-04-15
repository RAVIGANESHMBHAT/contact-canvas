import { NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs";

export async function GET() {
  const user = await currentUser();

  if (!user) {
    return NextResponse.json(
      { message: "Failed to fetch user details" },
      { status: 500 }
    );
  }

  return NextResponse.json({ data: user }, { status: 200 });
}

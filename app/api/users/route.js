import dbConnect from "@/utils/dbConnect";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function GET() {
  await dbConnect();
  // Set CORS headers
  res.setHeader("Access-Control-Allow-Origin", "https://www.nouhtours.com"); // Allow your domain
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS"); // Allowed methods
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization"); // Allowed headers

  // Handle preflight requests
  if (req.method === "OPTIONS") {
    return res.status(200).end(); // Stop processing for preflight requests
  }

  try {
    const users = await User.find().populate("universitiesAppliedTo");
    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch users" },
      { status: 500 }
    );
  }
}

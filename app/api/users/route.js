import dbConnect from "@/utils/dbConnect";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function GET() {
  await dbConnect();

  try {
    const users = await User.find().populate("universitiesAppliedTo");

    const response = NextResponse.json(users, { status: 200 });
    response.headers.set(
      "Access-Control-Allow-Origin",
      "https://nouhtours.com"
    );
    response.headers.set("Access-Control-Allow-Credentials", "true");
    response.headers.set(
      "Access-Control-Allow-Methods",
      "GET, DELETE, PATCH, POST, PUT"
    );
    response.headers.set(
      "Access-Control-Allow-Headers",
      "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
    );

    return response;
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch users" },
      { status: 500 }
    );
  }
}

export async function OPTIONS() {
  const response = NextResponse.json({}, { status: 204 });
  response.headers.set("Access-Control-Allow-Origin", "https://nouhtours.com");
  response.headers.set("Access-Control-Allow-Credentials", "true");
  response.headers.set(
    "Access-Control-Allow-Methods",
    "GET, DELETE, PATCH, POST, PUT"
  );
  response.headers.set(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );

  return response;
}

import dbConnect from "@/utils/dbConnect";
import User from "@/models/user";
import { NextResponse } from "next/server";

// Helper function to add CORS headers
function addCorsHeaders(response) {
  response.headers.set("Access-Control-Allow-Origin", "*"); // Replace * with specific domain if needed, e.g., http://localhost:3000
  response.headers.set("Access-Control-Allow-Credentials", "true");
  response.headers.set(
    "Access-Control-Allow-Methods",
    "GET, DELETE, PATCH, POST, PUT, OPTIONS"
  );
  response.headers.set(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );
  return response;
}

// Handle GET requests
export async function GET() {
  await dbConnect();

  try {
    const users = await User.find().populate("universitiesAppliedTo");
    const response = NextResponse.json(users, { status: 200 });

    // Add CORS headers
    return addCorsHeaders(response);
  } catch (error) {
    const response = NextResponse.json(
      { error: "Failed to fetch users" },
      { status: 500 }
    );
    return addCorsHeaders(response);
  }
}

// Handle OPTIONS requests (preflight)
export async function OPTIONS() {
  const response = NextResponse.json({}, { status: 204 }); // No content
  return addCorsHeaders(response);
}

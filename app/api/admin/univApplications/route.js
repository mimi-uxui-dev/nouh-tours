import dbConnect from "@/utils/dbConnect";
import UnivApplication from "@/models/univApplication";
import { NextResponse } from "next/server";

// GET: Fetch all university applications
export async function GET() {
  await dbConnect();

  try {
    const applications = await UnivApplication.find().populate("studentId");
    return NextResponse.json(applications, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch applications" },
      { status: 500 }
    );
  }
}

// POST: Create a new university application
export async function POST(request) {
  await dbConnect();

  try {
    const data = await request.json();
    const newApplication = await UnivApplication.create(data);
    return NextResponse.json(newApplication, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create application" },
      { status: 500 }
    );
  }
}

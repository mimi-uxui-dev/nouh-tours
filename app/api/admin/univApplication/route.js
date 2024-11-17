import dbConnect from "@/utils/dbConnect";
import UnivApplication from "@/models/univApplication";
import { NextResponse } from "next/server";
import User from "@/models/user";

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
    const { studentId, name, specialty, preEnrollment, status, note } = data;

    // Create a new university application
    const newApplication = await UnivApplication.create({
      name,
      specialty,
      preEnrollment,
      status,
      note,
      studentId, // Reference the student (User)
    });

    // Find the user (student) and update the universitiesAppliedTo array
    await User.findByIdAndUpdate(
      studentId,
      { $push: { universitiesAppliedTo: newApplication._id } }, // Add the new application ID
      { new: true } // Return the updated user document
    );

    // Return the new application as a response
    return NextResponse.json(newApplication, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to create application" },
      { status: 500 }
    );
  }
}

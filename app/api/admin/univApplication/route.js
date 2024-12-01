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

// POSTT: Create a new university application
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

// Edit: new universiity application
export async function PUT(request) {
  await dbConnect();

  try {
    const { applicationId, name, specialty, preEnrollment, status, note } =
      await request.json(); // Expect application data in the body

    // Update the application
    const updatedApplication = await UnivApplication.findByIdAndUpdate(
      applicationId,
      { name, specialty, preEnrollment, status, note }, // Fields to update
      { new: true } // Return the updated document
    );

    if (!updatedApplication) {
      return NextResponse.json(
        { error: "Application not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(updatedApplication, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to update application" },
      { status: 500 }
    );
  }
}

// Delete: new universiity application
export async function DELETE(request) {
  await dbConnect();

  try {
    const { applicationId } = await request.json(); // Expect `applicationId` in the request body

    // Find the application to get the associated user ID
    const application = await UnivApplication.findById(applicationId);
    if (!application) {
      return NextResponse.json(
        { error: "Application not found" },
        { status: 404 }
      );
    }

    // Remove the application from the collection
    await UnivApplication.findByIdAndDelete(applicationId);

    // Remove the application reference from the user's universitiesAppliedTo array
    await User.findByIdAndUpdate(
      application.studentId,
      { $pull: { universitiesAppliedTo: applicationId } }, // Remove the application ID
      { new: true }
    );

    return NextResponse.json(
      { message: "Application deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to delete application" },
      { status: 500 }
    );
  }
}

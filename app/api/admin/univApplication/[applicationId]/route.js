import { NextResponse } from "next/server";
import dbConnect from "@/utils/dbConnect";
import UnivApplication from "@/models/univApplication";
import User from "@/models/user";

// Delete: new universiity application
export async function DELETE(request, context) {
  await dbConnect();

  const { applicationId } = await context.params; // Await paramsss

  try {
    const deletedApplication = await UnivApplication.findByIdAndDelete(
      applicationId
    );

    if (!deletedApplication) {
      return NextResponse.json(
        { error: "Application not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Application deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting application:", error.message);
    return NextResponse.json(
      { error: "Failed to delete application" },
      { status: 500 }
    );
  }
}

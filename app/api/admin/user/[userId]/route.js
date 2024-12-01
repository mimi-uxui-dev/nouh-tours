import dbConnect from "@/utils/dbConnect";
import User from "@/models/user";
import { NextResponse } from "next/server";

// DELETE: Remove a user by ID
export async function DELETE(request, context) {
  await dbConnect();

  try {
    const { params } = context; // Access params via context
    const { userId } = params; // Extract userId

    const deletedUser = await User.findByIdAndDelete(userId);

    if (!deletedUser) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "User deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting user:", error);
    return NextResponse.json(
      { error: "Failed to delete user" },
      { status: 500 }
    );
  }
}

export async function GET(request, { params }) {
  try {
    const userId = params.userId; // Get the userId from params
    const user = await User.findById(userId).populate("universitiesAppliedTo");

    // If no user found, return 404
    if (!user) {
      return new NextResponse("User not found", { status: 404 });
    }

    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    console.error("Error fetching user:", error);
    return new NextResponse("Error fetching user", { status: 500 });
  }
}

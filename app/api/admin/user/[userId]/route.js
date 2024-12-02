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

// export async function GET(request, { params }) {
//   try {
//     const userId = params.userId; // Get the userId from params
//     const user = await User.findById(userId).populate("universitiesAppliedTo");

//     if (!user) {
//       return new NextResponse("User not found", { status: 404 });
//     }

//     return NextResponse.json(user, { status: 200 });
//   } catch (error) {
//     console.error("Error fetching user:", error);
//     return new NextResponse("Error fetching user", { status: 500 });
//   }
// }

export async function GET(request, { params }) {
  try {
    // Connect to the database
    await dbConnect();

    // Extract user ID from the request query
    const { id } = req.query;

    if (req.method !== "GET") {
      return res.status(405).json({ message: "Method Not Allowed" });
    }

    // Fetch user and populate related universities
    const user = await User.findById(id).populate({
      path: "universitiesAppliedTo",
      select: "name specialty preEnrollment status note", // Select only required fields
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Send response
    return res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
      role: user.role,
      universitiesAppliedTo: user.universitiesAppliedTo,
    });
  } catch (error) {
    console.error("Error fetching user data:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

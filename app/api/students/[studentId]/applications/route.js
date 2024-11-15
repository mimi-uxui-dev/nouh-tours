// app/api/students/[studentId]/applications/route.js
import dbConnect from "../../../../lib/mongoose";
import Student from "../../../../models/Student";
import UniversityApplication from "../../../../models/UniversityApplication";

export default async function handler(req, res) {
  const { studentId } = req.query;

  if (req.method === "POST") {
    await dbConnect();

    const { applications } = req.body;

    try {
      // Create the university applications in MongoDB
      const createdApplications = await UniversityApplication.insertMany(
        applications.map((app) => ({ ...app, studentId }))
      );

      // Update the student to include the application IDs
      const applicationIds = createdApplications.map((app) => app._id);
      await Student.findByIdAndUpdate(studentId, {
        $push: { universitiesAppliedTo: { $each: applicationIds } },
      });

      res.status(201).json({ success: true, data: createdApplications });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}

// app/api/students/route.js
import dbConnect from "../../../lib/mongoose";
import Student from "../../../models/Student";

export default async function handler(req, res) {
  if (req.method === "GET") {
    await dbConnect();

    try {
      const students = await Student.find({}).populate("universitiesAppliedTo");
      res.status(200).json({ success: true, data: students });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}

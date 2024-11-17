import mongoose from "mongoose";

const univApplicationSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    specialty: { type: String },
    preEnrollment: { type: Boolean, default: false },
    status: {
      type: String,
      enum: ["pending", "accepted", "rejected"],
      default: "pending",
    },
    note: { type: String },
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.univApplication ||
  mongoose.model("univApplication", univApplicationSchema);

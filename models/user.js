import mongoose from "mongoose";
import UnivApplication from "./univApplication"; // Ensure this path is correct

const userSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: {
      type: String,
      required: true,
      index: true,
      lowercase: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "user",
    },
    contactInfo: { type: String },
    universitiesAppliedTo: [
      { type: mongoose.Schema.Types.ObjectId, ref: "univApplication" },
    ],
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", userSchema);

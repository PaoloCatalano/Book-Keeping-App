import mongoose from "mongoose";

const JobSchema = new mongoose.Schema(
  {
    company: {
      type: Number,
      required: true,
      default: 0,
    },
    position: {
      type: String,
      required: [true, "Please provide position"],
      maxlength: 100,
    },
    status: {
      type: String,
      enum: ["food", "restaurant", "fun", "bills", "others"],
      default: "food",
    },
    jobType: {
      type: String,
      enum: ["card", "cash"],
      default: "card",
    },
    jobLocation: {
      type: String,
      default: "Madrid",
      required: true,
      maxlength: 100,
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide user"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Job", JobSchema);

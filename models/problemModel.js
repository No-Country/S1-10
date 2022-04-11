import mongoose from "mongoose";

const problemSchema = new mongoose.Schema(
  {
    problem: { type: String, required: true },
    user: { type: mongoose.Types.ObjectId, ref: "users" },
  },
  { timestamps: true }
);

let Dataset =
  mongoose.models.problem || mongoose.model("problem", problemSchema);

export default Dataset;

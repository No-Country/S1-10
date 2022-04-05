import mongoose from "mongoose";

const tecuidoSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    user: { type: mongoose.Types.ObjectId, ref: "users" },
  },
  { timestamps: true }
);

let Dataset =
  mongoose.models.tecuido || mongoose.model("tecuido", tecuidoSchema);

export default Dataset;

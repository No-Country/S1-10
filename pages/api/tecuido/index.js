import connectDB from "../../../config/connectDB";
import Tecuido from "../../../models/tecuidoModel";
import { getSession } from "next-auth/react";

connectDB();

export default async function handler(req, res) {
  switch (req.method) {
    case "POST":
      await createProblem(req, res);
      break;
  }
}

const createProblem = async (req, res) => {
  try {
    const session = await getSession({ req });

    if (!session) {
      return res.status(400).json({ msg: "Invalid Authentication!" });
    }
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

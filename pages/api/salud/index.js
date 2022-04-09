import connectDB from "../../../config/connectDB";
import Problems from "../../../models/problemModel";
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
    console.log({ session, problem: req.body.problem });

    /* if (!session) {
      return res.status(400).json({ msg: "Invalid Authentication!" });
    } */
    // const {userId}=session
    const { problem } = req.body;

    if (!problem)
      return res.status(400).json({ msg: "Please add problem request." });

    const newProblem = new Problems({
      problem: { name: "salud", problema: "tos" }, //problem,
      user: "testUser", //userId
    });
    await newProblem.save();
    res.json({ msg: "problem created" });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

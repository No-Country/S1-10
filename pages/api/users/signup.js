import { connectToDatabase } from "../../../util/mongodb";
import { v4 as uuidv4 } from "uuid";
const jwt = require("jsonwebtoken");

export default async function handler(req, res) {
  const { db } = await connectToDatabase();
  console.log(req.body);
  const { email, password, postal } = req.body;

  const generatedUserId = uuidv4();
  const hashedPassword = await bcrypt.hash(password, 10);
  const sanitizedEmail = email.toLowerCase();

  const data = {
    user_id: generatedUserId,
    email: sanitizedEmail,
    hashed_password: hashedPassword,
    postal_code: postal,
  };

  //const data = await db.collection("users").find({}).toArray();
  try {
    const users = await db.collection("users");
    const existingUser = await users.findOne({ email });

    if (existingUser) {
      return res.status(409).send("User already exist. Please login");
    }

    const insertedUser = await users.insertOne(data);
    const token = jwt.sign(insertedUser, sanitizedEmail, {
      expiresIn: 60 * 24,
    });

    res
      .status(201)
      .json({ token, userId: generatedUserId, email: sanitizedEmail });
  } catch (err) {
    console.log(err);
  }
}

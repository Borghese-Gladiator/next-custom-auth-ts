import { NextApiRequest, NextApiResponse } from "next";

import jwt from "jsonwebtoken";
import { setCookies } from "cookies-next";

import { dbConnect, TOKEN_SECRET } from "@/utils";
import User from "@/models/User.model";


export default async function handler(req: NextApiRequest, res: NextApiResponse<Data | IUser>) {
  await dbConnect();

  const { name, email, password } = req.body;

  if (req.method === "POST") {
    const userExist = await User.findOne({ email });

    if (userExist)
      return res.status(422).json({ message: "Email already in use!" });

    const user = new User({ name, email, password });
    await user.save();

    const token = jwt.sign({ userId: user._id }, TOKEN_SECRET, {
      expiresIn: "1d",
    });

    setCookies("token", token, {
      req,
      res,
      maxAge: 60 * 60 * 24, // 1 day
      path: "/",
    });

    res.status(201).json(user);
  } else {
    res.status(424).json({ message: "Invalid method!" });
  }
}

// Mongoose with TypeScript - https://mongoosejs.com/docs/typescript.html

import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import { CookieValueTypes, getCookie } from "cookies-next";
import { NextApiRequest, NextApiResponse } from "next";

export async function dbConnect() {
  return await mongoose.connect(process.env.MONGODB_URI);
}

export async function getUser(req: NextApiRequest, res: NextApiResponse) {
  const token = getCookie("token", { req, res });

  try {
    const data = jwt.verify(token, process.env.TOKEN_SECRET);
    let user = await User.findById(data.userId);
    user = JSON.parse(JSON.stringify(user));
    return user;
  } catch (error) {
    return null;
  }
}
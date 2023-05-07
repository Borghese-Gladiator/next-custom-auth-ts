// Mongoose with TypeScript - https://mongoosejs.com/docs/typescript.html

import { NextApiRequest, NextApiResponse } from "next";

import { CookieValueTypes, getCookie } from "cookies-next";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

import User from "./User";


export async function dbConnect() {
  return await mongoose.connect(process.env.MONGODB_URI);
}

export function getCurrentUser({ id }: any): any {
  return fetch(`/api/users/${id}`, {
    method: 'GET'
  })
}

export async function getUser(req: NextApiRequest, res: NextApiResponse) {
  const token: any = getCookie("token", { req, res });

  try {
    const data: any = jwt.verify(token, process.env.TOKEN_SECRET);
    let user = await User.findById(data.userId);
    user = JSON.parse(JSON.stringify(user));
    return user;
  } catch (error) {
    return null;
  }
}
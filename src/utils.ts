import { NextApiRequest, NextApiResponse } from "next";
import { QueryKey } from "@tanstack/react-query";
import { getCookie } from "cookies-next";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

/**
 * CONSTANTS
 */
export const currentUserKey: QueryKey = ['currentUser'];
export const baseURL = process.env.NODE_ENV === 'production' ? 'https://vercel' : 'http://localhost:3000';
export const TOKEN_SECRET = process.env.TOKEN_SECRET ?? '';

/**
 * MODELS
 * Mongoose with TypeScript - https://mongoosejs.com/docs/typescript.html
 */
const UserSchema = new mongoose.Schema<IUser>({
  name: String,
  email: String,
  password: String,
});
export const User = mongoose.models.User || mongoose.model<IUser>('User', UserSchema);

/**
 * UTILS
 */
export async function dbConnect() {
  return await mongoose.connect(process.env.MONGODB_URI);
}

export async function getCurrentUser({ id }: any): Promise<any> {
  return await fetch(`${baseURL}/api/users/${id}`, {
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

export async function getAllUsers() {
  return await fetch(`${baseURL}/api/allUsers`, {
    method: 'GET'
  });
}

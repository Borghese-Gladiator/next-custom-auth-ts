// Mongoose with TypeScript - https://mongoosejs.com/docs/typescript.html

import mongoose from "mongoose";

async function dbConnect() {
  return await mongoose.connect(process.env.MONGODB_URI);
}

interface IUser {
  name: string;
  email: string;
  password: string;
}

const UserSchema = new mongoose.Schema<IUser>({
  name: String,
  email: String,
  password: String,
});
const User = mongoose.model<IUser>('User', UserSchema);

export const utils = {
	dbConnect,
	models: { User }
};
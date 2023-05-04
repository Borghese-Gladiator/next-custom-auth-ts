// Mongoose with TypeScript - https://mongoosejs.com/docs/typescript.html

import mongoose from "mongoose";

async function dbConnect() {
  return await mongoose.connect(process.env.MONGODB_URI);
}

const UserSchema = new mongoose.Schema<User>({
  name: String,
  email: String,
  password: String,
});
const User = mongoose.model<User>('User', UserSchema);

export const utils = {
	dbConnect,
	models: { User }
};
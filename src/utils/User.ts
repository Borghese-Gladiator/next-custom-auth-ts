import mongoose from "mongoose";

const UserSchema = new mongoose.Schema<IUser>({
  name: String,
  email: String,
  password: String,
});
export default mongoose.model<IUser>('User', UserSchema);
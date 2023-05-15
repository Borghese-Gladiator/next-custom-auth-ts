/**
 * MODELS
 * Mongoose with TypeScript - https://mongoosejs.com/docs/typescript.html
 * https://tomanagle.medium.com/strongly-typed-models-with-mongoose-and-typescript-7bc2f7197722
 */
import mongoose, { model, Document, Schema} from "mongoose";

interface IUser extends Document {
  name: string,
  email: string;
  password: string;
}
const UserSchema: Schema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
})

export default mongoose.models?.User || mongoose.model('User', UserSchema);
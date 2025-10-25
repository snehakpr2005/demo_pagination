// models/userModel.js
import mongoose from "mongoose";

const userModelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number, required: true },
});

const UserModel = mongoose.model("User", userModelSchema);

export default UserModel;

import mongoose from "mongoose";

const signupSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  password: { type: String },
  confirmpassword: { type: String },
});

export const users = mongoose.model("users", signupSchema);

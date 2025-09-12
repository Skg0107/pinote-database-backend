import { users } from "../models/userModel.js";
import { comparePassword } from "../utils/comparePassword.js";

export const loginService = async (email, password) => {
  const user = await users.findOne({ email: email });
  if (!user) throw new Error("user doesn't exist");

  const isMatch = await comparePassword(password, user.password);
  if (!isMatch) throw new Error("Invalid credintials");

  return user;
};

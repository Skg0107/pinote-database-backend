import { users } from "../models/userModel.js";
import { comparePassword } from "../utils/comparePassword.js";

export const loginService = async (email, password) => {
  const user = await users.findOne({ email: email });
  if (!user) {
    return {
      msg: "you are not sing in, visit signup page!",
      inValid: true,
    };
  }

  const comparePasswordRes = comparePassword(password, user.password);
  if (!comparePasswordRes.isPasswordMatch) {
    return {
      msg: comparePasswordRes.msg,
      inValid: true,
    };
  }

  return {
    msg: "login successfully",
    inValid: false,
    userData: user,
  };
};

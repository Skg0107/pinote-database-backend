import { users } from "../models/signupModel.js";

export const signUpService = async (
  userName,
  userEmail,
  userPassword,
  userConfirmPassword
) => {
  try {
    const signupLog = new users({
      name: userName,
      email: userEmail,
      password: userPassword,
      confirmpassword: userConfirmPassword,
    });
    await signupLog.save();
    console.log("signup successfully!");
  } catch (error) {
    console.log("signup unsuccessfull!");
  }
};

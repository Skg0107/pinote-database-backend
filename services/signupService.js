import { users } from "../models/userModel.js";

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

export const isEmailRegistered = async (userEmail) => {
  const storedEmail = await users.findOne({ email: userEmail });
  if (storedEmail) {
  }
  throw new Error("this email is already registered, login with your password");
};

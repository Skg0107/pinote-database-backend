import { signUpService } from "../services/signupService.js";
import { comparePassword } from "../utils/comparePassword.js";

export const signUpController = async (req, res) => {
  try {
    const { name, email, password, confirmPassword } = req.body;
    await comparePassword(email);
    await signUpService(name, email, password, confirmPassword);
    res.status(201).send({ msg: "signup successfull" });
  } catch (error) {
    res.status(500).send({ msg: "signup fail" });
  }
};

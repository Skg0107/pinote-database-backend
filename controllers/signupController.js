import { isEmailRegistered, signUpService } from "../services/signupService.js";

export const signUpController = async (req, res) => {
  try {
    const { name, email, password, confirmPassword } = req.body;

    const emailCheck = await isEmailRegistered(email);
    if (emailCheck.exists) {
      return res
        .status(409)
        .json({ msg: emailCheck.message, exists: emailCheck.exists });
    }

    await signUpService(name, email, password, confirmPassword);
    res.status(201).send({ msg: "signup successfull" });
  } catch (error) {
    res.status(500).send({ msg: "signup fail" });
  }
};

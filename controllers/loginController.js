import { loginService } from "../services/loginService.js";

export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userData = await loginService(email, password);
    res.status(200).json({ msg: "login success", name: userData.name });
  } catch (error) {
    res.status(401).json({ msg: "login fail" });
  }
};

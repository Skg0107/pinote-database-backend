import { loginService } from "../services/loginService.js";

export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    const loginServiceRes = await loginService(email, password);
    if (loginServiceRes.inValid) {
      return res.status(401).json({ msg: loginServiceRes.msg });
    }
    res
      .status(200)
      .json({ msg: "login success", name: loginServiceRes.userData.name });
  } catch (error) {
    res.status(401).json({ msg: "login fail" });
    console.log(error);
  }
};

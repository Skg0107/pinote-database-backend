import { Router } from "express";
const router = Router();

import { signUpController } from "../controllers/signupController.js";
import { loginController } from "../controllers/loginController.js";

router.post("/test", (req, res) => {
  res.send("test succesfull");
});

router.post("/signup", signUpController);
router.post("/login", loginController);
export default router;

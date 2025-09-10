import { Router } from "express";
const router = Router();

import { signUpService } from "../services/signupService.js";

router.post("/test", (req, res) => {
  res.send("test succesfull");
});

router.post("/signup", async (req, res) => {
  try {
    const { name, email, password, confirmPassword } = req.body;
    await signUpService(name, email, password, confirmPassword);
    console.log("Data Saved Successfully");
  } catch (error) {
    console.log("Data Not Saved" + error);
  }
});

export default router;

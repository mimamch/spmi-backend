import { Me, signIn, signUp } from "../controller/users.js";
import { Router } from "express";

var router = Router();

router.post("/sign-up", signUp);
router.post("/sign-in", signIn);
router.use("/me", Me);

export default router;

import { signIn, signUp } from "../controller/users.js";
import { Router } from "express";

var router = Router();

router.post("/sign-up", signUp);
router.post("/sign-in", signIn);

export default router;

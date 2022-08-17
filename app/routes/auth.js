import {
  editProfile,
  getProfile,
  logOut,
  Me,
  signIn,
  signUp,
} from "../controller/users.js";
import { Router } from "express";

var router = Router();

router.post("/sign-up", signUp);
router.post("/sign-in", signIn);
router.use("/log-out", logOut);
router.use("/me", Me);
router.post("/edit-profile", editProfile);
router.get("/get-profile", getProfile);

export default router;

import {
  deleteUser,
  editProfile,
  getAllUser,
  getProfile,
  logOut,
  Me,
  signIn,
  signUp,
} from "../controller/users.js";
import { Router } from "express";
import isLogin from "../middleware/isLogin.js";

var router = Router();

router.post("/sign-up", signUp);
router.post("/sign-in", signIn);
router.use("/log-out", logOut);
router.use("/me", Me);
router.post("/edit-profile", editProfile);
router.get("/get-profile", getProfile);
router.get("/get-all-users", isLogin, getAllUser);
router.delete("/user/:id", isLogin, deleteUser);

export default router;

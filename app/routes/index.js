import { Router } from "express";
import { successWithMessage } from "../../lib/response.js";
import isLogin from "../middleware/isLogin.js";
import authRouter from "./auth.js";
import sub1Router from "./sub1.js";
import sub2Router from "./sub2.js";
import sub3Router from "./sub3.js";

var router = Router();
/* GET home page. */
router.get("/", function (req, res, next) {
  res.json(successWithMessage("Api Berjalan"));
});

router.use("/auth", authRouter);

router.use("/sub1", isLogin, sub1Router);
router.use("/sub2", isLogin, sub2Router);
router.use("/sub3", isLogin, sub3Router);

export default router;

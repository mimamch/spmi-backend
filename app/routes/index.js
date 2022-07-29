import { Router } from "express";
import { successWithMessage } from "../../lib/response.js";
import authRouter from "./auth.js";
import sub1Routter from "./sub1.js";
var router = Router();
/* GET home page. */
router.get("/", function (req, res, next) {
  res.json(successWithMessage("Api Berjalan"));
});

router.use("/auth", authRouter);

router.use("/sub1", sub1Routter);

export default router;

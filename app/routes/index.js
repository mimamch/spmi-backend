import { Router } from "express";
import { successWithMessage } from "../../lib/response.js";

var router = Router();
/* GET home page. */
router.get("/", function (req, res, next) {
  res.json(successWithMessage("Api Berjalan"));
});

import authRouter from "./auth.js";

router.use("/auth", authRouter);

export default router;

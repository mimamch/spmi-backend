import { Router } from "express";
import { publicPath } from "../../lib/path.js";
import { errorWithMessage, successWithMessage } from "../../lib/response.js";
import isLogin from "../middleware/isLogin.js";
import authRouter from "./auth.js";
import sub1Router from "./sub1.js";
import sub2Router from "./sub2.js";
import sub3Router from "./sub3.js";
import sub4Router from "./sub4.js";
import sub5Router from "./sub5.js";
import sub6Router from "./sub6.js";
import sub7Router from "./sub7.js";
import sub8Router from "./sub8.js";

var router = Router();
/* GET home page. */
router.get("/", function (req, res, next) {
  res.json(successWithMessage("Api Berjalan"));
});

router.use("/auth", authRouter);

router.use((req, res, next) => {
  console.log(req.files);
  if (req.files?.file) {
    const fileName = new Date().getTime() + req.files.file.name;
    req.body.file = fileName;
    // console.log(publicPath + fileName);
    req.files.file.mv(publicPath + fileName, (error) => {
      if (error) {
        return res
          .status(500)
          .json(errorWithMessage("Error when uploading file"));
      }
    });
  }
  next();
});

router.use("/sub1", isLogin, sub1Router);
router.use("/sub2", isLogin, sub2Router);
router.use("/sub3", isLogin, sub3Router);
router.use("/sub4", isLogin, sub4Router);
router.use("/sub5", isLogin, sub5Router);
router.use("/sub6", isLogin, sub6Router);
router.use("/sub7", isLogin, sub7Router);
router.use("/sub8", isLogin, sub8Router);

export default router;

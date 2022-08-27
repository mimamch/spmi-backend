import { Router } from "express";
import sub1 from "./sub1GrafikRouter.js";
import sub2 from "./sub2GrafikRouter.js";
import sub3 from "./sub3GrafikRouter.js";
import sub4 from "./sub4GrafikRouter.js";
import sub5 from "./sub5GrafikRouter.js";
import sub6 from "./sub6GrafikRouter.js";
import sub7 from "./sub7GrafikRouter.js";
import sub8 from "./sub8GrafikRouter.js";
const router = Router();

router.use("/sub1", sub1);
router.use("/sub2", sub2);
router.use("/sub3", sub3);
router.use("/sub4", sub4);
router.use("/sub5", sub5);
router.use("/sub6", sub6);
router.use("/sub7", sub7);
router.use("/sub8", sub8);

export default router;

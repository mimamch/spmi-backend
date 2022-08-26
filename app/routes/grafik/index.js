import { Router } from "express";
import sub1 from "./sub1GrafikRouter.js";
import sub2 from "./sub2GrafikRouter.js";
const router = Router();

router.use("/sub1", sub1);
router.use("/sub2", sub2);

export default router;

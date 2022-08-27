import { Router } from "express";
import { bagianA } from "../../controller/grafik/sub7GrafikController.js";

const router = Router();

router.get("/bagA", bagianA);

export default router;

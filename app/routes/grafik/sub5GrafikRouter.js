import { Router } from "express";
import {
  bagianA,
  bagianB,
  bagianC,
} from "../../controller/grafik/sub5GrafikController.js";

const router = Router();

router.get("/bagA", bagianA);
router.get("/bagB", bagianB);
router.get("/bagC", bagianC);

export default router;

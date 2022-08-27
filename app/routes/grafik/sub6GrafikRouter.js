import { Router } from "express";
import {
  bagianA,
  bagianB,
} from "../../controller/grafik/sub6GrafikController.js";

const router = Router();

router.get("/bagA", bagianA);
router.get("/bagB", bagianB);

export default router;

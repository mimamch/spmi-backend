import { Router } from "express";
import {
  bagianA1,
  bagianA2,
  bagianA3,
  bagianA4,
  bagianA5,
  bagianB1,
  bagianB2,
  bagianB3,
  bagianB41,
  bagianB42,
  bagianB5,
  bagianB6,
  bagianB71,
  bagianB72,
  bagianB73,
  bagianB74,
} from "../../controller/grafik/sub3GrafikController.js";

const router = Router();

router.get("/bagA1", bagianA1);
router.get("/bagA2", bagianA2);
router.get("/bagA3", bagianA3);
router.get("/bagA4", bagianA4);
router.get("/bagA5", bagianA5);
router.get("/bagB1", bagianB1);
router.get("/bagB2", bagianB2);
router.get("/bagB3", bagianB3);
router.get("/bagB41", bagianB41);
router.get("/bagB42", bagianB42);
router.get("/bagB5", bagianB5);
router.get("/bagB6", bagianB6);
router.get("/bagB71", bagianB71);
router.get("/bagB72", bagianB72);
router.get("/bagB73", bagianB73);
router.get("/bagB74", bagianB74);

export default router;

import { Router } from "express";
import {
  bagian1,
  bagian2,
  bagian3,
} from "../../controller/grafik/sub1GrafikController.js";

const router = Router();

router.get("/bag1", bagian1);
router.get("/bag2", bagian2);
router.get("/bag3", bagian3);

export default router;

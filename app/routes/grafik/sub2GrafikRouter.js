import { Router } from "express";
import {
  bagian1,
  bagian2,
} from "../../controller/grafik/sub2GrafikController.js";

const router = Router();

router.get("/bag1", bagian1);
router.get("/bag2", bagian2);

export default router;

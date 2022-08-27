import { Router } from "express";
import {
  bagian8A,
  bagian8B1,
  bagian8B2,
  bagian8C,
  bagian8D1,
  bagian8D2,
  bagian8E1,
  bagian8E2,
  bagian8E2Ref,
  bagian8F11,
  bagian8F12,
  bagian8F2,
  bagian8F3,
  bagian8F41,
  bagian8F42,
  bagian8F43,
  bagian8F44,
} from "../../controller/grafik/sub8GrafikController.js";

const router = Router();

router.get("/bag8A", bagian8A);
router.get("/bag8B1", bagian8B1);
router.get("/bag8B2", bagian8B2);
router.get("/bag8C", bagian8C);
router.get("/bag8D1", bagian8D1);
router.get("/bag8D2", bagian8D2);
router.get("/bag8E1", bagian8E1);
router.get("/bag8E2", bagian8E2);
router.get("/bag8E2Ref", bagian8E2Ref);
router.get("/bag8F11", bagian8F11);
router.get("/bag8F12", bagian8F12);
router.get("/bag8F2", bagian8F2);
router.get("/bag8F3", bagian8F3);
router.get("/bag8F41", bagian8F41);
router.get("/bag8F42", bagian8F42);
router.get("/bag8F43", bagian8F43);
router.get("/bag8F44", bagian8F44);

export default router;

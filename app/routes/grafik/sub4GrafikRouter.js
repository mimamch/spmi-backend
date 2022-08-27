import { Router } from "express";
import { bagian } from "../../controller/grafik/sub4GrafikController.js";

const router = Router();

router.get("/bag1", bagian);

export default router;

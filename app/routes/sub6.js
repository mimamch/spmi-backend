import { Router } from "express";
import { sub6A, sub6B } from "../controller/sub6.js";
var router = Router();

router.get("/bag6A", sub6A.show);
router.get("/bag6A/:id", sub6A.show);
router.post("/bag6A", sub6A.create);
router.put("/bag6A/:id", sub6A.update);
router.delete("/bag6A/:id", sub6A.delete);

router.get("/bag6B", sub6B.show);
router.get("/bag6B/:id", sub6B.show);
router.post("/bag6B", sub6B.create);
router.put("/bag6B/:id", sub6B.update);
router.delete("/bag6B/:id", sub6B.delete);

export default router;

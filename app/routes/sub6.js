import { Router } from "express";
import { sub6A, sub6B } from "../controller/sub6.js";
var router = Router();

router.get("/sub6A", sub6A.show);
router.get("/sub6A/:id", sub6A.show);
router.post("/sub6A", sub6A.create);
router.put("/sub6A/:id", sub6A.update);
router.delete("/sub6A/:id", sub6A.delete);

router.get("/sub6B", sub6B.show);
router.get("/sub6B/:id", sub6B.show);
router.post("/sub6B", sub6B.create);
router.put("/sub6B/:id", sub6B.update);
router.delete("/sub6B/:id", sub6B.delete);

export default router;

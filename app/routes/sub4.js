import { Router } from "express";
import { sub4 } from "../controller/sub4.js";
var router = Router();

router.get("/", sub4.show);
router.get("/:id", sub4.show);
router.post("/", sub4.create);
router.put("/:id", sub4.update);
router.delete("/:id", sub4.delete);

export default router;

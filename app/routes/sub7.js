import { Router } from "express";
import { sub7 } from "../controller/sub7.js";
var router = Router();

router.get("/", sub7.show);
router.get("/:id", sub7.show);
router.post("/", sub7.create);
router.put("/:id", sub7.update);
router.delete("/:id", sub7.delete);

export default router;

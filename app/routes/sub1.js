import { Router } from "express";
import { bag1 } from "../controller/sub1.js";
var router = Router();

router.get("/bag1", bag1.show);
router.get("/bag1/:id", bag1.show);
router.post("/bag1", bag1.create);
router.put("/bag1/:id", bag1.update);
router.delete("/bag1/:id", bag1.delete);

export default router;

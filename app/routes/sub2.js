import { Router } from "express";
import { bag1, bag2 } from "../controller/sub2.js";
var router = Router();

router.get("/bag1", bag1.show);
router.get("/bag1/:id", bag1.show);
router.post("/bag1", bag1.create);
router.put("/bag1/:id", bag1.update);
router.delete("/bag1/:id", bag1.delete);

router.get("/bag2", bag2.show);
router.get("/bag2/:id", bag2.show);
router.post("/bag2", bag2.create);
router.put("/bag2/:id", bag2.update);
router.delete("/bag2/:id", bag2.delete);

export default router;

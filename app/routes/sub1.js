import { Router } from "express";
import { bag1, bag2, bag3 } from "../controller/sub1.js";
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

router.get("/bag3", bag3.show);
router.get("/bag3/:id", bag3.show);
router.post("/bag3", bag3.create);
router.put("/bag3/:id", bag3.update);
router.delete("/bag3/:id", bag3.delete);

export default router;

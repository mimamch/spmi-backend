import { Router } from "express";
import { bag5A, bag5B, bag5C } from "../controller/sub5.js";
var router = Router();

router.get("/bag5A", bag5A.show);
router.get("/bag5A/:id", bag5A.show);
router.post("/bag5A", bag5A.create);
router.put("/bag5A/:id", bag5A.update);
router.delete("/bag5A/:id", bag5A.delete);

router.get("/bag5B", bag5B.show);
router.get("/bag5B/:id", bag5B.show);
router.post("/bag5B", bag5B.create);
router.put("/bag5B/:id", bag5B.update);
router.delete("/bag5B/:id", bag5B.delete);

router.get("/bag5C", bag5C.show);
router.get("/bag5C/:id", bag5C.show);
router.post("/bag5C", bag5C.create);
router.put("/bag5C/:id", bag5C.update);
router.delete("/bag5C/:id", bag5C.delete);

export default router;

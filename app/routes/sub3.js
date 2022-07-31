import { Router } from "express";
import {
  bagA1,
  bagA2,
  bagA3,
  bagA4,
  bagA5,
  bagB1,
  bagB2,
} from "../controller/sub3.js";
var router = Router();

router.get("/bagA1", bagA1.show);
router.get("/bagA1/:id", bagA1.show);
router.post("/bagA1", bagA1.create);
router.put("/bagA1/:id", bagA1.update);
router.delete("/bagA1/:id", bagA1.delete);

router.get("/bagA2", bagA2.show);
router.get("/bagA2/:id", bagA2.show);
router.post("/bagA2", bagA2.create);
router.put("/bagA2/:id", bagA2.update);
router.delete("/bagA2/:id", bagA2.delete);

router.get("/bagA3", bagA3.show);
router.get("/bagA3/:id", bagA3.show);
router.post("/bagA3", bagA3.create);
router.put("/bagA3/:id", bagA3.update);
router.delete("/bagA3/:id", bagA3.delete);

router.get("/bagA4", bagA4.show);
router.get("/bagA4/:id", bagA4.show);
router.post("/bagA4", bagA4.create);
router.put("/bagA4/:id", bagA4.update);
router.delete("/bagA4/:id", bagA4.delete);

router.get("/bagA5", bagA5.show);
router.get("/bagA5/:id", bagA5.show);
router.post("/bagA5", bagA5.create);
router.put("/bagA5/:id", bagA5.update);
router.delete("/bagA5/:id", bagA5.delete);

router.get("/bagB1", bagB1.show);
router.get("/bagB1/:id", bagB1.show);
router.post("/bagB1", bagB1.create);
router.put("/bagB1/:id", bagB1.update);
router.delete("/bagB1/:id", bagB1.delete);

router.get("/bagB2", bagB2.show);
router.get("/bagB2/:id", bagB2.show);
router.post("/bagB2", bagB2.create);
router.put("/bagB2/:id", bagB2.update);
router.delete("/bagB2/:id", bagB2.delete);

export default router;

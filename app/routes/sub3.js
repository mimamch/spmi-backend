import { Router } from "express";
import {
  bagA1,
  bagA2,
  bagA3,
  bagA4,
  bagA5,
  bagB1,
  bagB2,
  bagB3,
  bagB41,
  bagB42,
  bagB5,
  bagB6,
  bagB71,
  bagB72,
  bagB73,
  bagB74,
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

router.get("/bagB3", bagB3.show);
router.get("/bagB3/:id", bagB3.show);
router.post("/bagB3", bagB3.create);
router.put("/bagB3/:id", bagB3.update);
router.delete("/bagB3/:id", bagB3.delete);

router.get("/bagB41", bagB41.show);
router.get("/bagB41/:id", bagB41.show);
router.post("/bagB41", bagB41.create);
router.put("/bagB41/:id", bagB41.update);
router.delete("/bagB41/:id", bagB41.delete);

router.get("/bagB42", bagB42.show);
router.get("/bagB42/:id", bagB42.show);
router.post("/bagB42", bagB42.create);
router.put("/bagB42/:id", bagB42.update);
router.delete("/bagB42/:id", bagB42.delete);

router.get("/bagB5", bagB5.show);
router.get("/bagB5/:id", bagB5.show);
router.post("/bagB5", bagB5.create);
router.put("/bagB5/:id", bagB5.update);
router.delete("/bagB5/:id", bagB5.delete);

router.get("/bagB6", bagB6.show);
router.get("/bagB6/:id", bagB6.show);
router.post("/bagB6", bagB6.create);
router.put("/bagB6/:id", bagB6.update);
router.delete("/bagB6/:id", bagB6.delete);

router.get("/bagB71", bagB71.show);
router.get("/bagB71/:id", bagB71.show);
router.post("/bagB71", bagB71.create);
router.put("/bagB71/:id", bagB71.update);
router.delete("/bagB71/:id", bagB71.delete);

router.get("/bagB72", bagB72.show);
router.get("/bagB72/:id", bagB72.show);
router.post("/bagB72", bagB72.create);
router.put("/bagB72/:id", bagB72.update);
router.delete("/bagB72/:id", bagB72.delete);

router.get("/bagB73", bagB73.show);
router.get("/bagB73/:id", bagB73.show);
router.post("/bagB73", bagB73.create);
router.put("/bagB73/:id", bagB73.update);
router.delete("/bagB73/:id", bagB73.delete);

router.get("/bagB74", bagB74.show);
router.get("/bagB74/:id", bagB74.show);
router.post("/bagB74", bagB74.create);
router.put("/bagB74/:id", bagB74.update);
router.delete("/bagB74/:id", bagB74.delete);

export default router;

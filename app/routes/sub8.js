import { Router } from "express";
import {
  bag8A,
  bag8B1,
  bag8B2,
  bag8C,
  bag8D1,
  bag8D2,
  bag8E1,
  bag8E2,
  bag8E2Ref,
  bag8F11,
  bag8F12,
  bag8F2,
  bag8F3,
  bag8F41,
  bag8F42,
  bag8F43,
  bag8F44,
} from "../controller/sub8.js";
var router = Router();

router.get("/bag8A", bag8A.show);
router.get("/bag8A/:id", bag8A.show);
router.post("/bag8A/", bag8A.create);
router.put("/bag8A/:id", bag8A.update);
router.delete("/bag8A/:id", bag8A.delete);

router.get("/bag8B1", bag8B1.show);
router.get("/bag8B1/:id", bag8B1.show);
router.post("/bag8B1/", bag8B1.create);
router.put("/bag8B1/:id", bag8B1.update);
router.delete("/bag8B1/:id", bag8B1.delete);

router.get("/bag8B2", bag8B2.show);
router.get("/bag8B2/:id", bag8B2.show);
router.post("/bag8B2/", bag8B2.create);
router.put("/bag8B2/:id", bag8B2.update);
router.delete("/bag8B2/:id", bag8B2.delete);

router.get("/bag8C", bag8C.show);
router.get("/bag8C/:id", bag8C.show);
router.post("/bag8C/", bag8C.create);
router.put("/bag8C/:id", bag8C.update);
router.delete("/bag8C/:id", bag8C.delete);

router.get("/bag8D1", bag8D1.show);
router.get("/bag8D1/:id", bag8D1.show);
router.post("/bag8D1/", bag8D1.create);
router.put("/bag8D1/:id", bag8D1.update);
router.delete("/bag8D1/:id", bag8D1.delete);

router.get("/bag8D2", bag8D2.show);
router.get("/bag8D2/:id", bag8D2.show);
router.post("/bag8D2/", bag8D2.create);
router.put("/bag8D2/:id", bag8D2.update);
router.delete("/bag8D2/:id", bag8D2.delete);

router.get("/bag8E1", bag8E1.show);
router.get("/bag8E1/:id", bag8E1.show);
router.post("/bag8E1/", bag8E1.create);
router.put("/bag8E1/:id", bag8E1.update);
router.delete("/bag8E1/:id", bag8E1.delete);

router.get("/bag8E2", bag8E2.show);
router.get("/bag8E2/:id", bag8E2.show);
router.post("/bag8E2/", bag8E2.create);
router.put("/bag8E2/:id", bag8E2.update);
router.delete("/bag8E2/:id", bag8E2.delete);

router.get("/bag8E2Ref", bag8E2Ref.show);
router.get("/bag8E2Ref/:id", bag8E2Ref.show);
router.post("/bag8E2Ref/", bag8E2Ref.create);
router.put("/bag8E2Ref/:id", bag8E2Ref.update);
router.delete("/bag8E2Ref/:id", bag8E2Ref.delete);

router.get("/bag8F11", bag8F11.show);
router.get("/bag8F11/:id", bag8F11.show);
router.post("/bag8F11/", bag8F11.create);
router.put("/bag8F11/:id", bag8F11.update);
router.delete("/bag8F11/:id", bag8F11.delete);

router.get("/bag8F12", bag8F12.show);
router.get("/bag8F12/:id", bag8F12.show);
router.post("/bag8F12/", bag8F12.create);
router.put("/bag8F12/:id", bag8F12.update);
router.delete("/bag8F12/:id", bag8F12.delete);

router.get("/bag8F2", bag8F2.show);
router.get("/bag8F2/:id", bag8F2.show);
router.post("/bag8F2/", bag8F2.create);
router.put("/bag8F2/:id", bag8F2.update);
router.delete("/bag8F2/:id", bag8F2.delete);

router.get("/bag8F3", bag8F3.show);
router.get("/bag8F3/:id", bag8F3.show);
router.post("/bag8F3/", bag8F3.create);
router.put("/bag8F3/:id", bag8F3.update);
router.delete("/bag8F3/:id", bag8F3.delete);

router.get("/bag8F41", bag8F41.show);
router.get("/bag8F41/:id", bag8F41.show);
router.post("/bag8F41/", bag8F41.create);
router.put("/bag8F41/:id", bag8F41.update);
router.delete("/bag8F41/:id", bag8F41.delete);

router.get("/bag8F42", bag8F42.show);
router.get("/bag8F42/:id", bag8F42.show);
router.post("/bag8F42/", bag8F42.create);
router.put("/bag8F42/:id", bag8F42.update);
router.delete("/bag8F42/:id", bag8F42.delete);

router.get("/bag8F43", bag8F43.show);
router.get("/bag8F43/:id", bag8F43.show);
router.post("/bag8F43/", bag8F43.create);
router.put("/bag8F43/:id", bag8F43.update);
router.delete("/bag8F43/:id", bag8F43.delete);

router.get("/bag8F44", bag8F44.show);
router.get("/bag8F44/:id", bag8F44.show);
router.post("/bag8F44/", bag8F44.create);
router.put("/bag8F44/:id", bag8F44.update);
router.delete("/bag8F44/:id", bag8F44.delete);

export default router;

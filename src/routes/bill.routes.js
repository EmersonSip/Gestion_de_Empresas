import { Router } from "express";

const router = Router();

import * as billCtrl from "../controllers/bill.controller";
import { authJwt } from "../middlewares";

router.post("/", [authJwt.verifyToken, authJwt.isAdmin], billCtrl.createBill);
router.get("/", billCtrl.getBill);
router.get("/:billId", billCtrl.getBillById);
router.put(
  "/:billId",
  [authJwt.verifyToken, authJwt.isAdmin],
  billCtrl.updateBillById
);
router.delete(
  "/:billId",
  [authJwt.verifyToken, authJwt.isAdmin],
  billCtrl.deleteBillById
);

export default router;

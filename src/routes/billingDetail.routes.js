import { Router } from "express";
const router = Router();

import * as billingDetailCtrl from "../controllers/billingDetail.controller";
import { authJwt } from "../middlewares";

router.post(
  "/",
  [authJwt.verifyToken, authJwt.isAdmin],
  billingDetailCtrl.createBillingDetail
);
router.get("/", billingDetailCtrl.createBillingDetail);
router.get("/:billingDetailId", billingDetailCtrl.deleteBillingDetailsById);
router.put(
  "/:billingDetailId",
  [authJwt.verifyToken, authJwt.isAdmin],
  billingDetailCtrl.updateBillingDetailsById
);
router.delete(
  "/:billingDetailId",
  [authJwt.verifyToken, authJwt.isAdmin],
  billingDetailCtrl.deleteBillingDetailsById
);

export default router;

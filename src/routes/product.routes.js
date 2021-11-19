import { Router } from "express";
const router = Router();

import * as productCtrl from "../controllers/product.controller";
import { authJwt } from "../middlewares";

router.post(
  "/",
  [authJwt.verifyToken, authJwt.isAdmin],
  productCtrl.createProduct
);
router.get("/", productCtrl.getProduct);
router.get(":/productId", productCtrl.getProductById);
router.put(
  ":/productId",
  [authJwt.verifyToken, authJwt.isAdmin],
  productCtrl.updateProductById
);
router.delete(
  ":/productId",
  [authJwt.verifyToken, authJwt.isAdmin],
  productCtrl.deleteProductById
);

export default router;

import { Router } from "express";
const router = Router();

import * as branchOfficeCtrl from "../controllers/branchOffices.controller";
import { authJwt } from "../middlewares";

router.post(
  "/", 
  [authJwt.verifyToken, authJwt.isAdmin], 
  branchOfficeCtrl.createBranchOffice
);
router.get("/", branchOfficeCtrl.getBranchOffice);
router.get("/:branchOfficeId", branchOfficeCtrl.getBranchOfficeById);
router.put(
  "/:branchOfficeId",
  [authJwt.verifyToken, authJwt.isAdmin],
  branchOfficeCtrl.updateBranchOfficeById
);
router.delete(
  "/:branchOfficeId",
  [authJwt.verifyToken, authJwt.isAdmin],
  branchOfficeCtrl.deleteBranchOfficeById
);

export default router;

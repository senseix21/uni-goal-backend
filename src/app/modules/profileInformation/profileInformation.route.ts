import express from "express";
import { ProfileInformationController } from "./profileInformation.controller";

const router = express.Router();

router.post('/',
    ProfileInformationController.create);
router.get('/', ProfileInformationController.getSingle);
router.patch('/', ProfileInformationController.updateSingle);
router.delete('/', ProfileInformationController.deleteSingle);

export const ProfileInformationRoutes = router;

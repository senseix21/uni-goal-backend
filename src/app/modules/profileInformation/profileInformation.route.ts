import express from "express";
import { ProfileInformationController } from "./profileInformation.controller";

const router = express.Router();

router.post('/',
    ProfileInformationController.create);
router.get('/', ProfileInformationController.getSingle);
router.patch('/:id', ProfileInformationController.updateSingle);
router.delete('/:id', ProfileInformationController.deleteSingle);

export const ProfileInformationRoutes = router;

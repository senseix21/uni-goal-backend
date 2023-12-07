import express from "express";
import { ProfileInformationController } from "./profileInformation.controller";

const router = express.Router();

router.post('/',
    ProfileInformationController.create)

export const ProfileInformationRoutes = router;

import express from "express";
import { ProfileController } from "./profile.controller";

const router = express.Router();

router.get('/', ProfileController.getAll);

router.get('/counselor', ProfileController.getAllCounselor);

router.get('/:id', ProfileController.getSingle);




export const ProfileRoutes = router;

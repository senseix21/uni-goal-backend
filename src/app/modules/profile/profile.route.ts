import express from "express";
import { userRole } from "../../../enums/user";
import authenticate from "../../middlewares/authenticate";
import { ProfileController } from "./profile.controller";

const router = express.Router();

router.get('/', ProfileController.getAll);

router.get('/single/:id?',
    authenticate(userRole.student, userRole.admin),
    ProfileController.getSingle);

router.get('/counselor', ProfileController.getAllCounselor);







export const ProfileRoutes = router;

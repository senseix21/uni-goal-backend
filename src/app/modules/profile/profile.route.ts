import express from "express";
import { userRole } from "../../../enums/user";
import authenticate from "../../middlewares/authenticate";
import { ProfileController } from "./profile.controller";

const router = express.Router();

router.get('/',
    authenticate(userRole.student, userRole.admin, userRole.counselor, userRole.superAdmin),
    ProfileController.getSingle);


export const ProfileRoutes = router;

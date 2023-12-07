import express from "express";
import { userRole } from "../../../enums/user";
import authenticate from "../../middlewares/authenticate";
import { ProfileInformationController } from "./profileInformation.controller";

const router = express.Router();

router.post('/',
    authenticate(userRole.student, userRole.admin),
    ProfileInformationController.create);

router.get('/',
    authenticate(userRole.student, userRole.admin),
    ProfileInformationController.getSingle);

router.patch('/:id',
    authenticate(userRole.student, userRole.admin),
    ProfileInformationController.updateSingle);

router.delete('/:id',
    authenticate(userRole.student, userRole.admin),
    ProfileInformationController.deleteSingle);

export const ProfileInformationRoutes = router;

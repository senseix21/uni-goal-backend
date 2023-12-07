import express from "express";
import { userRole } from "../../../enums/user";
import authenticate from "../../middlewares/authenticate";
import { LanguageAndOtherQualificationsController } from "./languageAndOtherQualifications.controller";

const router = express.Router();

router.post('/',
    authenticate(userRole.student),
    LanguageAndOtherQualificationsController.create);

router.get('/:id',
    authenticate(userRole.student,),
    LanguageAndOtherQualificationsController.getSingle);

router.patch('/:id',
    authenticate(userRole.student,),
    LanguageAndOtherQualificationsController.updateSingle);

router.delete('/:id',
    authenticate(userRole.student,),
    LanguageAndOtherQualificationsController.deleteSingle);

export const LanguageAndOtherQualificationsRoutes = router;

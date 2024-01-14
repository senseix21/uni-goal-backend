import express from "express";
import { userRole } from "../../../enums/user";
import authenticate from "../../middlewares/authenticate";
import { EducationHistoryController } from "./educationHistory.controller";

const router = express.Router();

router.post('/',
    authenticate(userRole.student),
    EducationHistoryController.create);

router.post('/create',
    authenticate(userRole.student),
    EducationHistoryController.createSingle);

router.get('/:id',
    authenticate(userRole.student,),
    EducationHistoryController.getSingle);

router.get('/',
    authenticate(userRole.student,),
    EducationHistoryController.getAll);

router.patch('/:id',
    authenticate(userRole.student,),
    EducationHistoryController.updateSingle);

router.delete('/:id',
    authenticate(userRole.student,),
    EducationHistoryController.deleteSingle);

export const EducationHistoryRoutes = router;

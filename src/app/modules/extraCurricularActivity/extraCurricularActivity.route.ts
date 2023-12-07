import express from "express";
import { userRole } from "../../../enums/user";
import authenticate from "../../middlewares/authenticate";
import { ExtraCurricularActivityController } from "./extraCurricularActivity.controller";

const router = express.Router();

router.post('/',
    authenticate(userRole.student),
    ExtraCurricularActivityController.create);

router.get('/:id',
    authenticate(userRole.student,),
    ExtraCurricularActivityController.getSingle);

router.get('/',
    authenticate(userRole.student,),
    ExtraCurricularActivityController.getAll);

router.patch('/:id',
    authenticate(userRole.student,),
    ExtraCurricularActivityController.updateSingle);

router.delete('/:id',
    authenticate(userRole.student,),
    ExtraCurricularActivityController.deleteSingle);

export const ExtraCurricularActivityRoutes = router;

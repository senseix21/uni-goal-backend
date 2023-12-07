import express from "express";
import { userRole } from "../../../enums/user";
import authenticate from "../../middlewares/authenticate";
import { WorkHistoryController } from "./workHistory.controller";

const router = express.Router();

router.post('/',
    authenticate(userRole.student),
    WorkHistoryController.create);

router.get('/:id',
    authenticate(userRole.student,),
    WorkHistoryController.getSingle);

router.get('/',
    authenticate(userRole.student,),
    WorkHistoryController.getAll);

router.patch('/:id',
    authenticate(userRole.student,),
    WorkHistoryController.updateSingle);

router.delete('/:id',
    authenticate(userRole.student,),
    WorkHistoryController.deleteSingle);

export const WorkHistoryRoutes = router;

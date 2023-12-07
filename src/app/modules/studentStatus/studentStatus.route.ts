import express from "express";
import { userRole } from "../../../enums/user";
import authenticate from "../../middlewares/authenticate";
import { StudentStatusController } from "./studentStatus.controller";

const router = express.Router();

router.post('/',
    authenticate(userRole.admin),
    StudentStatusController.create);

router.get('/:id',
    authenticate(userRole.admin,),
    StudentStatusController.getSingle);

router.patch('/:id',
    authenticate(userRole.admin,),
    StudentStatusController.updateSingle);

router.delete('/:id',
    authenticate(userRole.admin,),
    StudentStatusController.deleteSingle);

export const StudentStatusRoutes = router;

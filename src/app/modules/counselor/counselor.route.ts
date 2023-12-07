import express from "express";
import { userRole } from "../../../enums/user";
import authenticate from "../../middlewares/authenticate";
import { CounselorController } from "./counselor.controller";

const router = express.Router();

router.post('/',
    authenticate(userRole.counselor),
    CounselorController.create);

router.get('/',
    authenticate(userRole.counselor,),
    CounselorController.getSingle);

router.patch('/:id',
    authenticate(userRole.counselor,),
    CounselorController.updateSingle);

router.delete('/:id',
    authenticate(userRole.counselor,),
    CounselorController.deleteSingle);

export const CounselorRoutes = router;

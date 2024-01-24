import express from "express";
import { userRole } from "../../../enums/user";
import authenticate from "../../middlewares/authenticate";
import { CounselorController } from "./counselor.controller";

const router = express.Router();

router.post('/:id?', authenticate(userRole.counselor, userRole.admin),
    CounselorController.create);

router.get('/', authenticate(userRole.counselor, userRole.admin),
    CounselorController.getSingle);

router.patch('/:id', authenticate(userRole.counselor, userRole.admin),
    CounselorController.updateSingle);

router.delete('/:id', authenticate(userRole.counselor, userRole.admin),
    CounselorController.deleteSingle);


export const CounselorRoutes = router;

import express from "express";
import { userRole } from "../../../enums/user";
import authenticate from "../../middlewares/authenticate";
import { SkillsController } from "./skills.controller";

const router = express.Router();

router.post('/',
    authenticate(userRole.student),
    SkillsController.create);

router.get('/:id',
    authenticate(userRole.student,),
    SkillsController.getSingle);

router.patch('/:id',
    authenticate(userRole.student,),
    SkillsController.updateSingle);

router.delete('/:id',
    authenticate(userRole.student,),
    SkillsController.deleteSingle);

export const SkillsRoutes = router;

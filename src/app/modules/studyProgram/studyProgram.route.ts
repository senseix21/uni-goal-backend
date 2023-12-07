import express from 'express';
import { userRole } from '../../../enums/user';
import authenticate from '../../middlewares/authenticate';
import { StudyProgramController } from './studyProgram.controller';

const router = express.Router();

router.post('/',
    authenticate(userRole.admin),
    StudyProgramController.create
);

router.get('/',
    StudyProgramController.getAll);


router.get('/:id',
    StudyProgramController.getSingle);



router.patch('/:id',
    authenticate(userRole.admin),
    StudyProgramController.update);

router.delete('/:id',
    authenticate(userRole.admin),
    StudyProgramController.deleteOne);

export const StudyProgramRoutes = router;
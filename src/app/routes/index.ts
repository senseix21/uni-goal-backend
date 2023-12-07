import express from 'express';
import { AuthRoutes } from '../modules/auth/auth.route';
import { CounselorRoutes } from '../modules/counselor/counselor.route';
import { EducationHistoryRoutes } from '../modules/educationHistory/educationHistory.route';
import { ExtraCurricularActivityRoutes } from '../modules/extraCurricularActivity/extraCurricularActivity.route';
import { LanguageAndOtherQualificationsRoutes } from '../modules/languageAndOtherQualifications/languageAndOtherQualifications.route';
import { ProfileRoutes } from '../modules/profile/profile.route';
import { ProfileInformationRoutes } from '../modules/profileInformation/profileInformation.route';
import { SkillsRoutes } from '../modules/skills/skills.route';
import { StudentStatusRoutes } from '../modules/studentStatus/studentStatus.route';
import { StudyProgramRoutes } from '../modules/studyProgram/studyProgram.route';
import { WorkHistoryRoutes } from '../modules/workHistory/workHistory.route';


const router = express.Router();

const moduleRoutes = [
    { path: '/auth', route: AuthRoutes },
    { path: '/profileInformation', route: ProfileInformationRoutes },
    { path: '/counselor', route: CounselorRoutes },
    { path: '/educationHistory', route: EducationHistoryRoutes },
    { path: '/workHistory', route: WorkHistoryRoutes },
    { path: '/extraCurricularActivity', route: ExtraCurricularActivityRoutes },
    { path: '/skills', route: SkillsRoutes },
    { path: '/qualifications', route: LanguageAndOtherQualificationsRoutes },
    { path: '/studentStatus', route: StudentStatusRoutes },
    { path: '/profile', route: ProfileRoutes },
    { path: '/studyProgram', route: StudyProgramRoutes },

];

//configure the routes
moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
import express from 'express';
import { AuthRoutes } from '../modules/auth/auth.route';
import { CounselorRoutes } from '../modules/counselor/counselor.route';
import { EducationHistoryRoutes } from '../modules/educationHistory/educationHistory.route';
import { ProfileInformationRoutes } from '../modules/profileInformation/profileInformation.route';


const router = express.Router();

const moduleRoutes = [
    { path: '/auth', route: AuthRoutes },
    { path: '/profileInformation', route: ProfileInformationRoutes },
    { path: '/counselor', route: CounselorRoutes },
    { path: '/educationHistory', route: EducationHistoryRoutes },

];

//configure the routes
moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
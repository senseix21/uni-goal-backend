import express from 'express';
import { AuthRoutes } from '../modules/auth/auth.route';
import { ProfileInformationRoutes } from '../modules/profileInformation/profileInformation.route';


const router = express.Router();

const moduleRoutes = [
    { path: '/auth', route: AuthRoutes },
    { path: '/profileInformation', route: ProfileInformationRoutes }
];

//configure the routes
moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
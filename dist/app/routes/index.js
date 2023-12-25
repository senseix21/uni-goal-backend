"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_route_1 = require("../modules/auth/auth.route");
const counselor_route_1 = require("../modules/counselor/counselor.route");
const educationHistory_route_1 = require("../modules/educationHistory/educationHistory.route");
const extraCurricularActivity_route_1 = require("../modules/extraCurricularActivity/extraCurricularActivity.route");
const languageAndOtherQualifications_route_1 = require("../modules/languageAndOtherQualifications/languageAndOtherQualifications.route");
const profile_route_1 = require("../modules/profile/profile.route");
const profileInformation_route_1 = require("../modules/profileInformation/profileInformation.route");
const skills_route_1 = require("../modules/skills/skills.route");
const studentStatus_route_1 = require("../modules/studentStatus/studentStatus.route");
const studyProgram_route_1 = require("../modules/studyProgram/studyProgram.route");
const workHistory_route_1 = require("../modules/workHistory/workHistory.route");
const router = express_1.default.Router();
const moduleRoutes = [
    { path: '/auth', route: auth_route_1.AuthRoutes },
    { path: '/profileInformation', route: profileInformation_route_1.ProfileInformationRoutes },
    { path: '/counselor', route: counselor_route_1.CounselorRoutes },
    { path: '/educationHistory', route: educationHistory_route_1.EducationHistoryRoutes },
    { path: '/workHistory', route: workHistory_route_1.WorkHistoryRoutes },
    { path: '/extraCurricularActivity', route: extraCurricularActivity_route_1.ExtraCurricularActivityRoutes },
    { path: '/skills', route: skills_route_1.SkillsRoutes },
    { path: '/qualifications', route: languageAndOtherQualifications_route_1.LanguageAndOtherQualificationsRoutes },
    { path: '/studentStatus', route: studentStatus_route_1.StudentStatusRoutes },
    { path: '/profile', route: profile_route_1.ProfileRoutes },
    { path: '/studyProgram', route: studyProgram_route_1.StudyProgramRoutes },
];
//configure the routes
moduleRoutes.forEach(route => router.use(route.path, route.route));
exports.default = router;

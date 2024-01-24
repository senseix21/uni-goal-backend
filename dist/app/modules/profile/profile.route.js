"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../../../enums/user");
const authenticate_1 = __importDefault(require("../../middlewares/authenticate"));
const profile_controller_1 = require("./profile.controller");
const router = express_1.default.Router();
router.get('/', profile_controller_1.ProfileController.getAll);
router.get('/single/:id?', (0, authenticate_1.default)(user_1.userRole.student, user_1.userRole.admin), profile_controller_1.ProfileController.getSingle);
router.get('/counselor', profile_controller_1.ProfileController.getAllCounselor);
exports.ProfileRoutes = router;

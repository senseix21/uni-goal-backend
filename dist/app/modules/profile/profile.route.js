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
router.get('/', (0, authenticate_1.default)(user_1.userRole.student, user_1.userRole.admin, user_1.userRole.counselor, user_1.userRole.superAdmin), profile_controller_1.ProfileController.getSingle);
exports.ProfileRoutes = router;

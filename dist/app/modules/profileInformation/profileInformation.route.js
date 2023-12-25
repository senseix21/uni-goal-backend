"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileInformationRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../../../enums/user");
const authenticate_1 = __importDefault(require("../../middlewares/authenticate"));
const profileInformation_controller_1 = require("./profileInformation.controller");
const router = express_1.default.Router();
router.post('/', (0, authenticate_1.default)(user_1.userRole.student, user_1.userRole.admin), profileInformation_controller_1.ProfileInformationController.create);
router.get('/', (0, authenticate_1.default)(user_1.userRole.student, user_1.userRole.admin), profileInformation_controller_1.ProfileInformationController.getSingle);
router.patch('/:id', (0, authenticate_1.default)(user_1.userRole.student, user_1.userRole.admin), profileInformation_controller_1.ProfileInformationController.updateSingle);
router.delete('/:id', (0, authenticate_1.default)(user_1.userRole.student, user_1.userRole.admin), profileInformation_controller_1.ProfileInformationController.deleteSingle);
exports.ProfileInformationRoutes = router;

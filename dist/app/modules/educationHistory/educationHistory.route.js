"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EducationHistoryRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../../../enums/user");
const authenticate_1 = __importDefault(require("../../middlewares/authenticate"));
const educationHistory_controller_1 = require("./educationHistory.controller");
const router = express_1.default.Router();
router.post('/', (0, authenticate_1.default)(user_1.userRole.student), educationHistory_controller_1.EducationHistoryController.create);
router.get('/:id', (0, authenticate_1.default)(user_1.userRole.student), educationHistory_controller_1.EducationHistoryController.getSingle);
router.get('/', (0, authenticate_1.default)(user_1.userRole.student), educationHistory_controller_1.EducationHistoryController.getAll);
router.patch('/:id', (0, authenticate_1.default)(user_1.userRole.student), educationHistory_controller_1.EducationHistoryController.updateSingle);
router.delete('/:id', (0, authenticate_1.default)(user_1.userRole.student), educationHistory_controller_1.EducationHistoryController.deleteSingle);
exports.EducationHistoryRoutes = router;

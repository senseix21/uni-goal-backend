"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudyProgramRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../../../enums/user");
const authenticate_1 = __importDefault(require("../../middlewares/authenticate"));
const studyProgram_controller_1 = require("./studyProgram.controller");
const router = express_1.default.Router();
router.post('/', (0, authenticate_1.default)(user_1.userRole.admin), studyProgram_controller_1.StudyProgramController.create);
router.get('/', studyProgram_controller_1.StudyProgramController.getAll);
router.get('/:id', studyProgram_controller_1.StudyProgramController.getSingle);
router.patch('/:id', (0, authenticate_1.default)(user_1.userRole.admin), studyProgram_controller_1.StudyProgramController.update);
router.delete('/:id', (0, authenticate_1.default)(user_1.userRole.admin), studyProgram_controller_1.StudyProgramController.deleteOne);
exports.StudyProgramRoutes = router;

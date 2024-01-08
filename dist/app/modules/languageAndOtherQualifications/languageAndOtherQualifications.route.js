"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageAndOtherQualificationsRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../../../enums/user");
const authenticate_1 = __importDefault(require("../../middlewares/authenticate"));
const languageAndOtherQualifications_controller_1 = require("./languageAndOtherQualifications.controller");
const router = express_1.default.Router();
router.post('/', (0, authenticate_1.default)(user_1.userRole.student), languageAndOtherQualifications_controller_1.LanguageAndOtherQualificationsController.create);
router.get('/', (0, authenticate_1.default)(user_1.userRole.student), languageAndOtherQualifications_controller_1.LanguageAndOtherQualificationsController.getSingle);
router.patch('/:id', (0, authenticate_1.default)(user_1.userRole.student), languageAndOtherQualifications_controller_1.LanguageAndOtherQualificationsController.updateSingle);
router.delete('/:id', (0, authenticate_1.default)(user_1.userRole.student), languageAndOtherQualifications_controller_1.LanguageAndOtherQualificationsController.deleteSingle);
exports.LanguageAndOtherQualificationsRoutes = router;

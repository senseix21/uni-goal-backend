"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtraCurricularActivityRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../../../enums/user");
const authenticate_1 = __importDefault(require("../../middlewares/authenticate"));
const extraCurricularActivity_controller_1 = require("./extraCurricularActivity.controller");
const router = express_1.default.Router();
router.post('/', (0, authenticate_1.default)(user_1.userRole.student), extraCurricularActivity_controller_1.ExtraCurricularActivityController.create);
router.get('/:id', (0, authenticate_1.default)(user_1.userRole.student), extraCurricularActivity_controller_1.ExtraCurricularActivityController.getSingle);
router.get('/', (0, authenticate_1.default)(user_1.userRole.student), extraCurricularActivity_controller_1.ExtraCurricularActivityController.getAll);
router.patch('/:id', (0, authenticate_1.default)(user_1.userRole.student), extraCurricularActivity_controller_1.ExtraCurricularActivityController.updateSingle);
router.delete('/:id', (0, authenticate_1.default)(user_1.userRole.student), extraCurricularActivity_controller_1.ExtraCurricularActivityController.deleteSingle);
exports.ExtraCurricularActivityRoutes = router;

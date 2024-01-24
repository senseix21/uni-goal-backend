"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CounselorRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../../../enums/user");
const authenticate_1 = __importDefault(require("../../middlewares/authenticate"));
const counselor_controller_1 = require("./counselor.controller");
const router = express_1.default.Router();
router.post('/:id?', (0, authenticate_1.default)(user_1.userRole.counselor, user_1.userRole.admin), counselor_controller_1.CounselorController.create);
router.get('/', (0, authenticate_1.default)(user_1.userRole.counselor, user_1.userRole.admin), counselor_controller_1.CounselorController.getSingle);
router.patch('/:id', (0, authenticate_1.default)(user_1.userRole.counselor, user_1.userRole.admin), counselor_controller_1.CounselorController.updateSingle);
router.delete('/:id', (0, authenticate_1.default)(user_1.userRole.counselor, user_1.userRole.admin), counselor_controller_1.CounselorController.deleteSingle);
exports.CounselorRoutes = router;

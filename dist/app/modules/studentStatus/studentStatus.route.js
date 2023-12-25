"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentStatusRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../../../enums/user");
const authenticate_1 = __importDefault(require("../../middlewares/authenticate"));
const studentStatus_controller_1 = require("./studentStatus.controller");
const router = express_1.default.Router();
router.post('/', (0, authenticate_1.default)(user_1.userRole.admin), studentStatus_controller_1.StudentStatusController.create);
router.get('/:id', (0, authenticate_1.default)(user_1.userRole.admin), studentStatus_controller_1.StudentStatusController.getSingle);
router.patch('/:id', (0, authenticate_1.default)(user_1.userRole.admin), studentStatus_controller_1.StudentStatusController.updateSingle);
router.delete('/:id', (0, authenticate_1.default)(user_1.userRole.admin), studentStatus_controller_1.StudentStatusController.deleteSingle);
exports.StudentStatusRoutes = router;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkHistoryRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../../../enums/user");
const authenticate_1 = __importDefault(require("../../middlewares/authenticate"));
const workHistory_controller_1 = require("./workHistory.controller");
const router = express_1.default.Router();
router.post('/', (0, authenticate_1.default)(user_1.userRole.student), workHistory_controller_1.WorkHistoryController.create);
router.get('/:id', (0, authenticate_1.default)(user_1.userRole.student), workHistory_controller_1.WorkHistoryController.getSingle);
router.get('/', (0, authenticate_1.default)(user_1.userRole.student), workHistory_controller_1.WorkHistoryController.getAll);
router.patch('/:id', (0, authenticate_1.default)(user_1.userRole.student), workHistory_controller_1.WorkHistoryController.updateSingle);
router.delete('/:id', (0, authenticate_1.default)(user_1.userRole.student), workHistory_controller_1.WorkHistoryController.deleteSingle);
exports.WorkHistoryRoutes = router;

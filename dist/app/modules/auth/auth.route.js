"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoutes = void 0;
const express_1 = __importDefault(require("express"));
const passHash_1 = require("../../middlewares/passHash");
const auth_controller_1 = require("./auth.controller");
const router = express_1.default.Router();
router.post('/signup', passHash_1.hashPassword, auth_controller_1.AuthController.signUp);
router.post('/login', auth_controller_1.AuthController.login);
exports.AuthRoutes = router; // 

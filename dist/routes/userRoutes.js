"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = require("../controllers/userController");
const authMiddleware_1 = require("../middleware/authMiddleware");
const router = express_1.default.Router();
// POST /api/users/register - Register new user
router.post('/register', userController_1.register);
// POST /api/users/login - Login user
router.post('/login', userController_1.login);
// GET /api/users/me - Get current user (for auth persistence)
router.get('/me', authMiddleware_1.protect, userController_1.getUserProfile);
// GET /api/users/profile - Get user profile
router.get('/profile', authMiddleware_1.protect, userController_1.getUserProfile);
// PUT /api/users/profile - Update user profile
router.put('/profile', authMiddleware_1.protect, userController_1.updateUserProfile);
exports.default = router;
//# sourceMappingURL=userRoutes.js.map
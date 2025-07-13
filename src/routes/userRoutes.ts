import express from 'express';
import { register, login, getUserProfile, updateUserProfile } from '../controllers/userController';
import { protect } from '../middleware/authMiddleware';

const router = express.Router();

// POST /api/users/register - Register new user
router.post('/register', register);

// POST /api/users/login - Login user
router.post('/login', login);

// GET /api/users/me - Get current user (for auth persistence)
router.get('/me', protect, getUserProfile);

// GET /api/users/profile - Get user profile
router.get('/profile', protect, getUserProfile);

// PUT /api/users/profile - Update user profile
router.put('/profile', protect, updateUserProfile);

export default router; 
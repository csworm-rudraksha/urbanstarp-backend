import express from 'express';
import { createOrder, getOrderById, getUserOrders, updateOrderToPaid, updateOrderToDelivered } from '../controllers/orderController';
import { protect } from '../middleware/authMiddleware';

const router = express.Router();

// All order routes require authentication
router.use(protect);

// POST /api/orders - Create new order
router.post('/', createOrder);

// GET /api/orders/myorders - Get user orders
router.get('/myorders', getUserOrders);

// GET /api/orders/:id - Get order by ID
router.get('/:id', getOrderById);

// PUT /api/orders/:id/pay - Update order to paid
router.put('/:id/pay', updateOrderToPaid);

// PUT /api/orders/:id/deliver - Update order to delivered (Admin only)
router.put('/:id/deliver', updateOrderToDelivered);

export default router; 
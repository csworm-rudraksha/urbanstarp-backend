"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const orderController_1 = require("../controllers/orderController");
const authMiddleware_1 = require("../middleware/authMiddleware");
const router = express_1.default.Router();
// All order routes require authentication
router.use(authMiddleware_1.protect);
// POST /api/orders - Create new order
router.post('/', orderController_1.createOrder);
// GET /api/orders/myorders - Get user orders
router.get('/myorders', orderController_1.getUserOrders);
// GET /api/orders/:id - Get order by ID
router.get('/:id', orderController_1.getOrderById);
// PUT /api/orders/:id/pay - Update order to paid
router.put('/:id/pay', orderController_1.updateOrderToPaid);
// PUT /api/orders/:id/deliver - Update order to delivered (Admin only)
router.put('/:id/deliver', orderController_1.updateOrderToDelivered);
exports.default = router;
//# sourceMappingURL=orderRoutes.js.map
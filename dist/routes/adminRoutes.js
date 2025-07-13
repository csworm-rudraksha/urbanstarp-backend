"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const productController_1 = require("../controllers/productController");
const orderController_1 = require("../controllers/orderController");
const auth_1 = require("../middleware/auth");
const adminAuth_1 = require("../middleware/adminAuth");
const router = express_1.default.Router();
// All admin routes require authentication and admin privileges
router.use(auth_1.auth);
router.use(adminAuth_1.adminAuth);
// Product management routes
// GET /api/admin/products - Get all products (admin view)
router.get('/products', productController_1.getProducts);
// GET /api/admin/products/:id - Get single product (admin view)
router.get('/products/:id', productController_1.getProductById);
// POST /api/admin/products - Create new product
router.post('/products', productController_1.createProduct);
// PUT /api/admin/products/:id - Update product
router.put('/products/:id', productController_1.updateProduct);
// DELETE /api/admin/products/:id - Delete product
router.delete('/products/:id', productController_1.deleteProduct);
// Order management routes
// GET /api/admin/orders - Get all orders
router.get('/orders', orderController_1.getAllOrders);
// PUT /api/admin/orders/:id/status - Update order status
router.put('/orders/:id/status', orderController_1.updateOrderStatus);
exports.default = router;
//# sourceMappingURL=adminRoutes.js.map
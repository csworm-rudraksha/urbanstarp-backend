import express from 'express';
import { getProducts, getProductById, createProduct, updateProduct, deleteProduct } from '../controllers/productController';
import { getAllOrders, updateOrderStatus } from '../controllers/orderController';
import { auth } from '../middleware/auth';
import { adminAuth } from '../middleware/adminAuth';

const router = express.Router();

// All admin routes require authentication and admin privileges
router.use(auth);
router.use(adminAuth);

// Product management routes
// GET /api/admin/products - Get all products (admin view)
router.get('/products', getProducts);

// GET /api/admin/products/:id - Get single product (admin view)
router.get('/products/:id', getProductById);

// POST /api/admin/products - Create new product
router.post('/products', createProduct);

// PUT /api/admin/products/:id - Update product
router.put('/products/:id', updateProduct);

// DELETE /api/admin/products/:id - Delete product
router.delete('/products/:id', deleteProduct);

// Order management routes
// GET /api/admin/orders - Get all orders
router.get('/orders', getAllOrders);

// PUT /api/admin/orders/:id/status - Update order status
router.put('/orders/:id/status', updateOrderStatus);

export default router; 
import express from 'express';
import { getProducts, getProductById, createProduct, updateProduct, deleteProduct } from '../controllers/productController';

const router = express.Router();

// GET /api/products - Get all products
router.get('/', getProducts);

// GET /api/products/:id - Get single product
router.get('/:id', getProductById);

// POST /api/products - Create new product (Admin only)
router.post('/', createProduct);

// PUT /api/products/:id - Update product (Admin only)
router.put('/:id', updateProduct);

// DELETE /api/products/:id - Delete product (Admin only)
router.delete('/:id', deleteProduct);

export default router; 
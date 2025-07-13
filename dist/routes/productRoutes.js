"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const productController_1 = require("../controllers/productController");
const router = express_1.default.Router();
// GET /api/products - Get all products
router.get('/', productController_1.getProducts);
// GET /api/products/:id - Get single product
router.get('/:id', productController_1.getProductById);
// POST /api/products - Create new product (Admin only)
router.post('/', productController_1.createProduct);
// PUT /api/products/:id - Update product (Admin only)
router.put('/:id', productController_1.updateProduct);
// DELETE /api/products/:id - Delete product (Admin only)
router.delete('/:id', productController_1.deleteProduct);
exports.default = router;
//# sourceMappingURL=productRoutes.js.map
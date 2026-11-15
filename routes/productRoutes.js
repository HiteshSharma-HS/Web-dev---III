const express = require('express');
const router = express.Router();
const {
  createProduct,
  getProducts,
  getLowStockProducts,
  getCategorySummary,
  getProductById,
  updateProduct,
  updateStock,
  deleteProduct
} = require('../controllers/productController');

router.post('/', createProduct);
router.get('/', getProducts);
router.get('/low-stock', getLowStockProducts);
router.get('/summary', getCategorySummary);
router.get('/:id', getProductById);
router.put('/:id', updateProduct);
router.patch('/:id/stock', updateStock);
router.delete('/:id', deleteProduct);

module.exports = router;
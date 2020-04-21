const express = require('express');
const router = express.Router();
const productController = require('../controllers/products');
const adminController = require('../controllers/adminController');

router.get('/add-product', adminController.getProduct);
router.post('/add-product', adminController.postProduct);
router.post('/delete-product',adminController.deleteProduct);

router.get("/products", productController.fetchAllData);
router.get("/product/:productId", adminController.getSinglProduct);

module.exports = router;
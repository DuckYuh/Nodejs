const express = require('express');
const router = express.Router();
const CartController = require('../controllers/cartController');


router.post('/post', CartController.createCart);
router.get('/get', CartController.getCarts);
router.get('/get/:id', CartController.getCartById);
router.put('/put/:id', CartController.updateCart);
router.delete('/delete/:id', CartController.deleteCart);

module.exports = router;
const express = require('express');
const router = express.Router();
const CartItemController = require('../controllers/cart_itemController');


router.post('/post', CartItemController.createCartItem);
router.get('/get', CartItemController.getCartItems);
router.get('/get/:id', CartItemController.getCartItemById);
router.put('/put/:id', CartItemController.updateCartItem);
router.delete('/delete/:id', CartItemController.deleteCartItem);

module.exports = router;

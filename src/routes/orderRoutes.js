const express = require('express');
const router = express.Router();
const OrderController = require('../controllers/orderController');


router.post('/post', OrderController.createOrder);
router.get('/get', OrderController.getOrders);
router.get('/get/:id', OrderController.getOrderById);
router.put('/put/:id', OrderController.updateOrder);
router.delete('/delete/:id', OrderController.deleteOrder);

module.exports = router;

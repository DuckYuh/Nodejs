const express = require('express');
const router = express.Router();
const OrderItemController = require('../controllers/order_itemController');


router.post('/post', OrderItemController.createOrderItem);
router.get('/get', OrderItemController.getOrderItems);
router.get('/get/:id', OrderItemController.getOrderItemById);
router.put('/put/:id', OrderItemController.updateOrderItem);
router.delete('/delete/:id', OrderItemController.deleteOrderItem);

module.exports = router;

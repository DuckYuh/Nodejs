// routes/itemRoutes.js
const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

// Định nghĩa các route
router.get('/get', itemController.getItems);
router.get('/get/:itemID', itemController.getItemByID);
router.post('/post', itemController.createItem);
router.put('/put/:itemID', itemController.updateItem); // Route cập nhật sản phẩm
router.delete('/delete/:itemID', itemController.deleteItem); // Route xóa sản phẩm


module.exports = router;

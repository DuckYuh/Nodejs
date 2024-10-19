// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');

// Định nghĩa các route
router.get('/get', customerController.getCustomers);
router.get('/get/:customerID', customerController.getCustomerById);
router.post('/post', customerController.createCustomer);
router.put('/put/:customerID', customerController.updateCustomer); // Route cập nhật người dùng
router.delete('/delete/:customerID', customerController.deleteCustomer); // Route xóa người dùng


module.exports = router;

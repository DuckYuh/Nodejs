// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

// Định nghĩa các route
router.get('/get', adminController.getAdmins);
router.get('/get/:adminID', adminController.getAdminById);
router.post('/post', adminController.createAdmin);
router.put('/put/:adminID', adminController.updateAdmin); // Route cập nhật người dùng
router.delete('/delete/:adminID', adminController.deleteAdmin); // Route xóa người dùng


module.exports = router;

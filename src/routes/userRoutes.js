// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Định nghĩa các route
router.get('/get', userController.getUsers);
router.get('/get/:userID', userController.getUserById);
router.post('/post', userController.createUser);
router.put('/put/:userID', userController.updateUser); // Route cập nhật người dùng
router.delete('/delete/:userID', userController.deleteUser); // Route xóa người dùng


module.exports = router;

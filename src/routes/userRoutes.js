// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Định nghĩa các route
router.get('/users/get', userController.getUsers);
router.get('/users/get/:userID', userController.getUserById);
router.post('/users/post', userController.createUser);
router.put('/users/put/:userID', userController.updateUser); // Route cập nhật người dùng
router.delete('/users/delete/:userID', userController.deleteUser); // Route xóa người dùng


module.exports = router;

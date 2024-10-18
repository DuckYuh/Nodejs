// controllers/userController.js
const userModel = require('../models/userModel');

// Lấy danh sách tất cả người dùng
exports.getUsers = async (req, res) => {
    try {
        const users = await userModel.getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Lấy người dùng theo id
exports.getUserById = async (req, res) => {
    try {
        const user = await userModel.getUserById(req.params.userID);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Tạo người dùng mới
exports.createUser = async (req, res) => {
    try {
        const { userID, username, password } = req.body;
        await userModel.createUser(userID, username, password);
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        if (error.message === 'username already exists') {
            return res.status(400).json({ message: 'username already exists' });
        }
        
        res.status(500).json({ message: error.message });
    }
};

// Cập nhật người dùng
exports.updateUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await userModel.getUserById(req.params.userID);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        await userModel.updateUser(req.params.userID, username, password);
        res.status(200).json({ message: 'User updated successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Xóa người dùng
exports.deleteUser = async (req, res) => {
    try {
        const user = await userModel.getUserById(req.params.userID);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        await userModel.deleteUser(req.params.userID);
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
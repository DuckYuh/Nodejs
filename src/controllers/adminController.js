// controllers/userController.js
const adminModel = require('../models/adminModel');

// Lấy danh sách tất cả người dùng
exports.getAdmins = async (req, res) => {
    try {
        const admin = await adminModel.getAllAdmins();
        res.status(200).json(admin);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Lấy người dùng theo id
exports.getAdminById = async (req, res) => {
    try {
        const admin = await adminModel.getAdminById(req.params.adminID);
        if (!admin) {
            return res.status(404).json({ message: 'Admin not found' });
        }
        res.status(200).json(admin);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Tạo người dùng mới
exports.createAdmin = async (req, res) => {
    try {
        const { adminID, userID} = req.body;
        await adminModel.createAdmin(adminID, userID);
        res.status(201).json({ message: 'Admin created successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Cập nhật người dùng
exports.updateAdmin = async (req, res) => {
    try {
        const { userID } = req.body;
        const admin = await adminModel.getAdminById(req.params.adminID);
        if (!admin) {
            return res.status(404).json({ message: 'Admin not found' });
        }

        await adminModel.updateAdmin(req.params.adminID, userID);
        res.status(200).json({ message: 'Admin updated successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Xóa người dùng
exports.deleteAdmin = async (req, res) => {
    try {
        const admin = await adminModel.getAdminById(req.params.adminID);
        if (!admin) {
            return res.status(404).json({ message: 'Admin not found' });
        }

        await adminModel.deleteAdmin(req.params.adminID);
        res.status(200).json({ message: 'Admin deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
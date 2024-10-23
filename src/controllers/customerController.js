// controllers/userController.js
const customerModel = require('../models/customerModel');

// Lấy danh sách tất cả người dùng
exports.getCustomers = async (req, res) => {
    try {
        const customer = await customerModel.getAllCustomers();
        res.status(200).json(customer);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Lấy người dùng theo id
exports.getCustomerById = async (req, res) => {
    try {
        const customer = await customerModel.getCustomerById(req.params.customerID);
        if (!customer) {
            return res.status(404).json({ message: 'Customer not found' });
        }
        res.status(200).json(customer);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Tạo người dùng mới
exports.createCustomer = async (req, res) => {
    try {
        const { customerID, userID, phone, address, email } = req.body;
        await customerModel.createCustomer(customerID, userID, phone, address, email);
        res.status(201).json({ message: 'Customer created successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Cập nhật người dùng
exports.updateCustomer = async (req, res) => {
    try {
        const { phone, address, email } = req.body;
        const customer = await customerModel.getCustomerById(req.params.customerID);
        if (!customer) {
            return res.status(404).json({ message: 'Customer not found' });
        }

        await customerModel.updateCustomer(req.params.customerID, phone, address, email);
        res.status(200).json({ message: 'Customer updated successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Xóa người dùng
exports.deleteCustomer = async (req, res) => {
    try {
        const customer = await customerModel.getCustomerById(req.params.customerID);
        if (!customer) {
            return res.status(404).json({ message: 'Customer not found' });
        }

        await customerModel.deleteCustomer(req.params.customerID);
        res.status(200).json({ message: 'Customer deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
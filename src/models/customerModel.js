// models/userModel.js
const { sql } = require('../config/dbconfig');

// Hàm lấy danh sách tất cả người dùng
const getAllCustomers = async () => {
    try {
        const result = await sql.query`SELECT * FROM [dbo].[Customer]`;
        return result.recordset;
    } catch (error) {
        throw error;
    }
};

// Hàm lấy thông tin người dùng theo id
const getCustomerById = async (customerID) => {
    try {
        const result = await sql.query`SELECT * FROM [dbo].[Customer] WHERE customerID = ${customerID}`;
        return result.recordset[0]; // Trả về người dùng đầu tiên (nếu có)
    } catch (error) {
        throw error;
    }
};

// Hàm tạo người dùng mới
const createCustomer = async (customerID, userID, phone, address, email) => {
    try {
        await sql.query`INSERT INTO [dbo].[Customer] (customerID, userID, phone, address, email) VALUES (${customerID}, ${userID}, ${phone}, ${address}, ${email})`;
    } catch (error) {
        throw error;
    }
};

// Hàm cập nhật người dùng
const updateCustomer = async (customerID, phone, address, email) => {
    try {
        await sql.query`UPDATE [dbo].[Customer] SET phone = ${phone}, address = ${address}, email = ${email} WHERE customerID = ${customerID}`;
    } catch (error) {
        throw error;
    }
};

// Hàm xóa người dùng
const deleteCustomer = async (customerID) => {
    try {
        await sql.query`DELETE FROM [dbo].[Customer] WHERE customerID = ${customerID}`;
    } catch (error) {
        throw error;
    }
};


module.exports = {
    getAllCustomers,
    getCustomerById,
    createCustomer,
    updateCustomer,
    deleteCustomer
};

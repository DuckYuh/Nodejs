// models/userModel.js
const { sql } = require('../config/dbconfig');

// Hàm lấy danh sách tất cả người dùng
const getAllAdmins = async () => {
    try {
        const result = await sql.query`SELECT * FROM [dbo].[Admin]`;
        return result.recordset;
    } catch (error) {
        throw error;
    }
};

// Hàm lấy thông tin người dùng theo id
const getAdminById = async (adminID) => {
    try {
        const result = await sql.query`SELECT * FROM [dbo].[Admin] WHERE adminID = ${adminID}`;
        return result.recordset[0]; // Trả về người dùng đầu tiên (nếu có)
    } catch (error) {
        throw error;
    }
};

// Hàm tạo người dùng mới
const createAdmin = async (adminID, userID) => {
    try {
        await sql.query`INSERT INTO [dbo].[Admin] (adminID, userID) VALUES (${adminID}, ${userID})`;
    } catch (error) {
        throw error;
    }
};

// Hàm cập nhật người dùng
const updateAdmin = async (adminID,userID) => {
    try {
        await sql.query`UPDATE [dbo].[Admin] SET userID = ${userID} WHERE adminID = ${adminID}`;
    } catch (error) {
        throw error;
    }
};

// Hàm xóa người dùng
const deleteAdmin = async (adminID) => {
    try {
        await sql.query`DELETE FROM [dbo].[Admin] WHERE adminID = ${adminID}`;
    } catch (error) {
        throw error;
    }
};


module.exports = {
    getAllAdmins,
    getAdminById,
    createAdmin,
    updateAdmin,
    deleteAdmin
};

// models/userModel.js
const { sql } = require('../config/dbconfig');

// Hàm lấy danh sách tất cả người dùng
const getAllUsers = async () => {
    try {
        const result = await sql.query`SELECT * FROM [dbo].[User]`;
        return result.recordset;
    } catch (error) {
        throw error;
    }
};

// Hàm lấy thông tin người dùng theo id
const getUserById = async (userID) => {
    try {
        const result = await sql.query`SELECT * FROM [dbo].[User] WHERE userID = ${userID}`;
        return result.recordset[0]; // Trả về người dùng đầu tiên (nếu có)
    } catch (error) {
        throw error;
    }
};

// Hàm tạo người dùng mới
const createUser = async (userID, username, password) => {
    try {
        await sql.query`INSERT INTO [dbo].[User] (userID, username, password) VALUES (${userID}, ${username}, ${password})`;
    } catch (error) {
        throw error;
    }
};

// Hàm cập nhật người dùng
const updateUser = async (userID, username, password) => {
    try {
        await sql.query`UPDATE [dbo].[User] SET username = ${username}, password = ${password} WHERE userID = ${userID}`;
    } catch (error) {
        throw error;
    }
};

// Hàm xóa người dùng
const deleteUser = async (userID) => {
    try {
        await sql.query`DELETE FROM [dbo].[User] WHERE userID = ${userID}`;
    } catch (error) {
        throw error;
    }
};


module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};

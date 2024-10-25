const sql = require('mssql');

const config = {
    user: 'sa', // Tên người dùng
    password: 'huy1202', // Mật khẩu
    server: 'localhost', // Địa chỉ máy chủ
    database: 'cnpm', // Tên cơ sở dữ liệu
    options: {
        encrypt: true, // Azure
        trustServerCertificate: true 
    }
};

const connectDB = async () => {
    try {
        await sql.connect(config);
        console.log('Connected to MSSQL database');
    } catch (err) {
        console.error('Database connection failed:', err.message);
    }
};

module.exports = { connectDB, sql };
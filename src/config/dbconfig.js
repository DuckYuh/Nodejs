const sql = require('mssql');

const config = {
    user: 'sa', // Tên người dùng
    password: 'huy12345678', // Mật khẩu
    server: 'localhost\\SQLEXPRESS', // Địa chỉ máy chủ
    database: 'cnpm', // Tên cơ sở dữ liệu
    options: {
        encrypt: true, // Azure
        trustServerCertificate: true, 
        enableArithAbort: true,
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
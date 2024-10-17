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

module.exports = config;
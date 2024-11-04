const jwt = require('jsonwebtoken');
const { sql } = require('../config/dbconfig');
const JWT_SECRET = 'secretkey';

const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const result = await sql.query`SELECT * FROM [dbo].[User] WHERE username = ${username}`;
        const user = result.recordset[0];

        if (user) {
            const passCheck = password==user.password;
            if(passCheck){
                const token = jwt.sign({ userId: user.UserId },JWT_SECRET);
                
                res.json({ message: 'Đăng nhập thành công', token });
            } else {
                res.json({ message: 'Tên đăng nhập hoặc mật khẩu không đúng' });
            }
        }
        else {
            res.json({ message: 'Tên đăng nhập hoặc mật khẩu không đúng' });
        }
    } catch (error) {
        console.error('Lỗi khi đăng nhập:', error);
        res.status(500).send('Lỗi server. Vui lòng thử lại sau.');
    }

};

module.exports = {
    login
}
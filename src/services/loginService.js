const jwt = require('jsonwebtoken');
const { sql } = require('../config/dbconfig');
const JWT_SECRET = 'secretkey';

const checkusernameExists = async (username) => {
    try {
        const result = await sql.query`SELECT * FROM [dbo].[User] WHERE username = ${username}`;
        return result.recordset.length > 0; // Trả về true nếu username đã tồn tại
    } catch (error) {
        throw error;
    }
};

const login = async (req, res) => {
    try {
        const { username, password } = req.body;

        const usernameExists = await checkusernameExists(username);

        if (usernameExists) {
            const passwordCheck = await sql.query`SELECT password FROM [dbo].[User] WHERE username = ${username}`;
            if(password==passwordCheck){
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
const jwt = require('jsonwebtoken');
const { sql } = require('../config/dbconfig');
const { v4: uuidv4 } = require('uuid');

const JWT_SECRET = 'secretkey';

const checkusernameExists = async (username) => {
    try {
        const result = await sql.query`SELECT * FROM [dbo].[User] WHERE username = ${username}`;
        return result.recordset.length > 0; // Trả về true nếu username đã tồn tại
    } catch (error) {
        throw error;
    }
};

const signup = async (req, res) => {
    try {
        const { username, password, phone, email  } = req.body;
        const randomUUID = uuidv4();
        
        const usernameExists = await checkusernameExists(username);
        if (usernameExists) {
            throw new Error('username already exists'); // Ném lỗi nếu username đã tồn tại
        }

        await sql.query`INSERT INTO [dbo].[User] (userID, username, password) VALUES (${randomUUID}, ${username}, ${password})`;
        await sql.query`INSERT INTO [dbo].[Customer] (customerID, userID, phone, email) VALUES (${randomUUID}, ${randomUUID}, ${phone}, ${email})`;
        await sql.query`INSERT INTO Cart(cartID, customerID, price) VALUES (${randomUUID}, ${randomUUID}, 0)`;

        const token = jwt.sign({ userId: randomUUID },JWT_SECRET);
        res.status(201).json({ message: 'Đăng ký thành công', token });
    } catch(error) {
        console.error('Lỗi khi đăng ký:', error);
        res.status(500).send('Lỗi server. Vui lòng thử lại sau.');
    }
}

module.exports = {
    signup
}
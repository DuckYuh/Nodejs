const { sql } = require('../config/dbconfig');

const newCollection = async (req, res) => {
    try {
        const result = await sql.query`SELECT TOP 8 * FROM [dbo].[Item]`;
        console.log("New Collection fetch");
        return result.recordset;
    } catch(error) {
        console.error('Lỗi:', error);
        res.status(500).send('Lỗi server. Vui lòng thử lại sau.');
    }
}

module.exports = {
    newCollection
}
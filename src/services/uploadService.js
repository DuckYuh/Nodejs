const { sql } = require('../config/dbconfig');

const uploadFile = async (req, res) => {
    try {
        res.json({
            success:1,
            file: req.file
        })
    } catch(error) {
        console.error('Lỗi:', error);
        res.status(500).send('Lỗi server. Vui lòng thử lại sau.');
    }
}

module.exports = {
    uploadFile
}
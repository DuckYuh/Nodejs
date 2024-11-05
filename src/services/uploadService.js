const { sql } = require('../config/dbconfig');

const uploadFile = async (req, res) => {
    try {
        res.json({
            success:1,
            image_url:'http://localhost:${port}/images/${req.file.filename}'
        })
    } catch(error) {
        console.error('Lỗi:', error);
        res.status(500).send('Lỗi server. Vui lòng thử lại sau.');
    }
}

module.exports = {
    uploadFile
}
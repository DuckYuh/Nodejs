// controllers/itemController.js
const itemModel = require('../models/itemModel');

//Lấy danh sách tất cả sản phẩm
exports.getitems = async (req, res) => {
    try {
        const items = await itemModel.getAllItem();
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

//Lấy sản phẩm theo id
exports.getItemByID = async (req, res) => {
    try {
        const item = await itemModel.getItemByID(req.params.itemID);
        if (!item) {
            return res.status(404).json({ message: 'Item not found'});
        }
        res.status(200).json(item);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Tạo sản phẩm mới
exports.createItem = async (req, res) => {
    try{
        const {itemID, imageID, itemname, itemDescription, itemType, price, size, quantity } = req.body;
        await itemModel.createItem(itemID, imageID, itemname, itemDescription, itemType, price, size, quantity  );
        res.status(201).json({message: 'Item created successfully'});
    } catch (error) {
        if(error.message == 'itemname already exists') {
            return res.status(400).json({message: 'itemname already exists'});
        }

        res.status(500).json({message: error.message});
    }
};

// Cập nhật sản phẩm
exports.updateItem = async (req, res) => {
    try {
        const { itemID, imageID, itemname, itemDescription, itemType, price, size, quantity } = req.body;
        const item = await itemModel.getUserById(req.params.itemID);
        if (!item) {
            return res.status(404).json({message: 'Item not found'});
        }

        await itemModel.updateItem(req.params.itemID, imageID, itemname, itemDescription, itemType, price, size, quantity );
        res.status(200).json({message: 'Item update successfully'});
    } catch (error) {
        res.status(500).json({message: error.message });
    }
};

//Xóa sản phẩm
exports.deleteItem = async (req,res) => {
    try {
        const item = await itemModel.getItemByID(req.params.itemID);
        if(!item) {
            return res.status(404).json({message: 'Item not found'});
        }

        await itemModel.deleteItem(req.params.itemID);
        res.status(200).json({message: 'Item deleted successfully'});
    } catch (error) {
        res.status(500).json({ message: error.message});
    }
};
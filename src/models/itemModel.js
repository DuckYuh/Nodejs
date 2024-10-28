// models/itemModel.js 
const{sql} = require('../congif/dbconfig');

//Hàm lấy danh sách tất cả sản phẩm
const getAllItem = async () =>{
    try{
        const result = await sqll.query`SELECT * FROM [dbo].[Item]`;
        return result.recordset;
    } catch (error) {
        throw error;;
    }
};

// Hàm lấy thông tin sản phẩm theo id
const getItemById = async (itemID) =>{
    try {
        const result = await sql.query`SELECT * FROM [dbo].[Item] WHERE itemID = ${itemID}`;
        return result.recordset[0]; 
    } catch (error) {
        throw error;
    }
}

//Hàm kiểm tra xem sản phẩm đã tồn tại chưa
const checkItemExist = async (itemname) => {
    try {
        const result = await sql.query`SELECT * FROM [dbo].[Item] WHERE itemname = ${itemname}`;
        return result.recordset.length>0; //Trả về true nếu item đã tồn tại
    } catch (error) {
        throw error;
    }
}

//Hàm tạo sản phẩm mới
const createItem = async (itemID, itemname, itemAmount, itemSize, itemCategory, itemPrice ) => {
    try {
        // Kiểm tra sản phẩm đã tồn tại chưa
        const itemnameExists = await checkitemnameExists(itemname);
        if(itemnameExists) {
            throw new Error('itemname already exists'); // Ném lỗi nếu itemname đã tồn tại
        }
        await sql.query`INSERT INTO [dbo].[Item] (itemID, itemname, itemAmount, itemCategory, itemSize, itemPrice) VALUES (${itemID}, ${itemname}, ${itemAmount}, ${itemCategory}, ${itemSize}, ${itemPrice})`;

    } catch (error) {
        throw error;
    }
};

// Hàm cập nhật sản phẩm
const updateItem = async (itemID, itemname, itemAmount, itemCategory, itemSize, itemPrice) => {
    try{
        await sql.query`UPDATE [dbo].[Item] SET itemname = ${itemname}, itemAmount = ${itemAmount}, itemCategory = ${itemCategory}, itemSize = ${itemSize}, itemPrice=${itemPrice} WHERE itemID = ${itemID}`;
    } catch (error) {
        throw error;
    }
};

// Hàm xóa sản phẩm
const deleteItem = async (itemID) => {
    try {
        await sql.query`DELETE FROM [dbo].[Item] WHERE itemID = ${itemID}`;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    getAllItem,
    checkItemExist,
    getItemById,
    createItem,
    updateItem,
    deleteItem
};
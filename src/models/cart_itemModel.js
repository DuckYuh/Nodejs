const {sql} = require('../config/dbconfig');

const CartItemModel = {
    createCartItem: async (cartItemID, cartID, itemID, quantity, price) =>{
        const request =  new sql.Request();
        await request
        .input('cartItemID', sql.Char(10), cartItemID)
        .input('cartID', sql.Char(10), cartID)
        .input('itemID', sql.Char(10), itemID)
        .input('quantity', sql.Int, quantity)
        .input('price', sql.Decimal(18,0), price)
        .query('INSERT INTO Cart_item (cartItemID, cartID, itemID, quantity, price) VALUES (@cartItemID, @cartID, @itemID, @quantity, @price)');
    },

    getCartItems: async () => {
        const result = await new sql.Request().query('SELECT * FROM Cart_item');
        return result.recordset;
    },

    getCartItemById: async (cartItemID) => {
        const request = new sql.Request();
        const result = await request 
        .input('cartItemID', sql.Char(10), cartItemID)
        .query('SELECT * FROM Cart_item WHERE cartItemID=@cartItemID');
        return result.recordset[0];
    },

    updateCartItem: async (cartItemID, cartID, itemID, quantity, price) => {
        const request = new sql.Request();
        await request
            .input('cartItemID', sql.Char(10), cartItemID)
            .input('cartID', sql.Char(10), cartID)
            .input('itemID', sql.Char(10), itemID)
            .input('quantity', sql.Int, quantity)
            .input('price', sql.Decimal(18,0), price)
            .query('UPDATE Cart_item SET cartID = @cartID, itemID = @itemID, quanity = @quantity, price=@price WHERE cartItemID = @cartItemID'); 
    },

    deleteCartItem: async (cartItemID) => {
        const request = new sql.Request();
        await request
        .input('cartItemID', sql.Char(10), cartItemID)
        .query('DELETE FROM Cart_item WHERE cartItemID = @cartItemID');
    }
};

module.exports = CartItemModel;
const { sql } = require('../config/dbconfig');
const { updateCartItem, deleteCartItem } = require('./cart_itemModel');

const CartModel = {
    createCart: async (cartID, customerID, price) => {
        const request = new sql.Request();
        await request
            .input('cartID', sql.Char(10), cartID)            
            .input('customerID', sql.Char(10), customerID)
            .input('price', sql.Int, price)            
            .query('INSERT INTO Cart(cartID, customerID, price) VALUES(@cartID, @customerID, @price)');
    },

    getCarts: async () => {
        const result = await new sql.Request().query('SELECT * FROM Cart');
        return result.recordset;
    },

    getCartById: async (cartID) => {
            const request = new sql.Request();
            const result = await request
            .input('cartID', sql.Char(10), cartID)
            .query('SELECT * FROM Cart WHERE cartID = @cartID');
            return result.recordset[0];
    },

    updateCart: async (cartID, customerID, price) => {
        const request = new sql.Request();
        await request
            .input('cartID', sql.Char(10), cartID)
            .input('customerID', sql.Char(10), customerID)
            .input('price', sql.Int, price)            
            .query('UPDATE Cart SET customerID=@customerID, price=@price WHERE cartID=@cartID');
    },

    deleteCart: async (cartID) => {
        const request = new sql.Request();
        await request
            .input('cartID', sql.Char(10), cartID)
            .query('DELETE FROM Cart WHERE cartID=@cartID');
    }
};

module.exports = CartModel;

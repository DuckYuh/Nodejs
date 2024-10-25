const { sql } = require('../config/dbconfig');

const OrderItemModel = {
    createOrderItem: async (orderItemID, orderID, itemID, quanity, price) => {
        const request = new sql.Request();
        await request
            .input('orderItemID', sql.Char(10), orderItemID)
            .input('orderID', sql.Char(10), orderID)
            .input('itemID', sql.Char(10), itemID)
            .input('quanity', sql.Int, quanity)
            .input('price', sql.Int, price)
            .query('INSERT INTO Order_item (orderItemID, orderID, itemID, quanity, price) VALUES (@orderItemID, @orderID, @itemID, @quanity, @price)');
    },

    getOrderItems: async () => {
        const result = await new sql.Request().query('SELECT * FROM Order_item');
        return result.recordset;
    },

    getOrderItemById: async (orderItemID) => {
        const request = new sql.Request();
        const result = await request
            .input('orderItemID', sql.Char(10), orderItemID)
            .query('SELECT * FROM Order_item WHERE orderItemID = @orderItemID');
        return result.recordset[0];
    },

    updateOrderItem: async (orderItemID, orderID, itemID, quanity, price) => {
        const request = new sql.Request();
        await request
            .input('orderItemID', sql.Char(10), orderItemID)
            .input('orderID', sql.Char(10), orderID)
            .input('itemID', sql.Char(10), itemID)
            .input('quanity', sql.Int, quanity)
            .input('price', sql.Int, price)
            .query('UPDATE Order_item SET orderID = @orderID, itemID = @itemID, quanity = @quanity, price = @price WHERE orderItemID = @orderItemID');
    },

    deleteOrderItem: async (orderItemID) => {
        const request = new sql.Request();
        await request
            .input('orderItemID', sql.Char(10), orderItemID)
            .query('DELETE FROM Order_item WHERE orderItemID = @orderItemID');
    }
};

module.exports = OrderItemModel;

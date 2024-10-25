const { sql } = require('../config/dbconfig');

const OrderModel = {
    createOrder: async (orderID, paymentID, customerID, price, orderDay, address, status) => {
        const request = new sql.Request();
        await request
            .input('orderID', sql.Char(10), orderID)
            .input('paymentID', sql.Char(10), paymentID)
            .input('customerID', sql.Char(10), customerID)
            .input('price', sql.Int, price)
            .input('orderDay', sql.DateTime, orderDay)
            .input('address', sql.VarChar(50), address)
            .input('status', sql.Bit, status)
            .query('INSERT INTO Order (orderID, paymentID, customerID, price, orderDay, address, status) VALUES (@orderID, @paymentID, @customerID, @price, @orderDay, @address, @status)');
    },

    getOrders: async () => {
        const result = await new sql.Request().query('SELECT * FROM Order');
        return result.recordset;
    },

    getOrderById: async (orderID) => {
        const request = new sql.Request();
        const result = await request
            .input('orderID', sql.Char(10), orderID)
            .query('SELECT * FROM Order WHERE orderID = @orderID');
        return result.recordset[0];
    },

    updateOrder: async (orderID, paymentID, customerID, price, orderDay, address, status) => {
        const request = new sql.Request();
        await request
            .input('orderID', sql.Char(10), orderID)
            .input('paymentID', sql.Char(10), paymentID)
            .input('customerID', sql.Char(10), customerID)
            .input('price', sql.Int, price)
            .input('orderDay', sql.DateTime, orderDay)
            .input('address', sql.VarChar(50), address)
            .input('status', sql.Bit, status)
            .query('UPDATE Order SET paymentID = @paymentID, customerID = @customerID, price = @price, orderDay = @orderDay, address = @address, status = @status WHERE orderID = @orderID');
    },

    deleteOrder: async (orderID) => {
        const request = new sql.Request();
        await request
            .input('orderID', sql.Char(10), orderID)
            .query('DELETE FROM Order WHERE orderID = @orderID');
    }
};

module.exports = OrderModel;

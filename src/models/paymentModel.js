const { sql } = require('../config/dbconfig');

// Hàm lấy danh sách tất cả payments
const PaymentModel = {
    createPayment: async (paymentID, payDay, payMethod, price, status) => {
        const request = new sql.Request();
        await request
            .input('paymentID', sql.Char(10), paymentID)
            .input('payDay', sql.DateTime, payDay)
            .input('payMethod', sql.Char(10), payMethod)
            .input('price', sql.NChar(10), price)
            .input('status', sql.Bit, status)
            .query('INSERT INTO Payment (paymentID, payDay, payMethod, price, status) VALUES (@paymentID, @payDay, @payMethod, @price, @status)');
    },

    getPayments: async () => {
        const result = await new sql.Request().query('SELECT * FROM Payment');
        return result.recordset;
    },

    getPaymentById: async (paymentID) => {
        const request = new sql.Request();
        const result = await request
            .input('paymentID', sql.Char(10), paymentID)
            .query('SELECT * FROM Payment WHERE paymentID = @paymentID');
        return result.recordset[0];
    },

    updatePayment: async (paymentID, payDay, payMethod, price, status) => {
        const request = new sql.Request();
        await request
            .input('paymentID', sql.Char(10), paymentID)
            .input('payDay', sql.DateTime, payDay)
            .input('payMethod', sql.Char(10), payMethod)
            .input('price', sql.NChar(10), price)
            .input('status', sql.Bit, status)
            .query('UPDATE Payment SET payDay = @payDay, payMethod = @payMethod, price = @price, status = @status WHERE paymentID = @paymentID');
    },

    deletePayment: async (paymentID) => {
        const request = new sql.Request();
        await request
            .input('paymentID', sql.Char(10), paymentID)
            .query('DELETE FROM Payment WHERE paymentID = @paymentID');
    }
};

module.exports = PaymentModel;

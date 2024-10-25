const PaymentModel = require('../models/paymentModel');

const PaymentController = {
    createPayment: async (req, res) => {
        const { paymentID, payDay, payMethod, price, status } = req.body;

        try {
            await PaymentModel.createPayment(paymentID, payDay, payMethod, price, status);
            res.status(201).json({ message: 'Payment created successfully!' });
        } catch (err) {
            res.status(500).json({ error: 'Error creating payment: ' + err });
        }
    },

    getPayments: async (req, res) => {
        try {
            const payments = await PaymentModel.getPayments();
            res.json(payments);
        } catch (err) {
            res.status(500).json({ error: 'Error retrieving payments: ' + err });
        }
    },

    getPaymentById: async (req, res) => {
        const paymentID = req.params.id;

        try {
            const payment = await PaymentModel.getPaymentById(paymentID);

            if (!payment) {
                return res.status(404).json({ message: 'Payment not found' });
            }

            res.json(payment);
        } catch (err) {
            res.status(500).json({ error: 'Error retrieving payment: ' + err });
        }
    },

    updatePayment: async (req, res) => {
        const paymentID = req.params.id;
        const { payDay, payMethod, price, status } = req.body;

        try {
            await PaymentModel.updatePayment(paymentID, payDay, payMethod, price, status);
            res.json({ message: 'Payment updated successfully!' });
        } catch (err) {
            res.status(500).json({ error: 'Error updating payment: ' + err });
        }
    },

    deletePayment: async (req, res) => {
        const paymentID = req.params.id;

        try {
            await PaymentModel.deletePayment(paymentID);
            res.json({ message: 'Payment deleted successfully!' });
        } catch (err) {
            res.status(500).json({ error: 'Error deleting payment: ' + err });
        }
    }
};

module.exports = PaymentController;

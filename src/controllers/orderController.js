const OrderModel = require('../models/orderModel');

const OrderController = {
    createOrder: async (req, res) => {
        const { orderID, paymentID, customerID, price, orderDay, address, status } = req.body;

        try {
            await OrderModel.createOrder(orderID, paymentID, customerID, price, orderDay, address, status);
            res.status(201).json({ message: 'Order created successfully!' });
        } catch (err) {
            res.status(500).json({ error: 'Error creating order: ' + err });
        }
    },

    getOrders: async (req, res) => {
        try {
            const orders = await OrderModel.getOrders();
            res.json(orders);
        } catch (err) {
            res.status(500).json({ error: 'Error retrieving orders: ' + err });
        }
    },

    getOrderById: async (req, res) => {
        const orderID = req.params.id;

        try {
            const order = await OrderModel.getOrderById(orderID);

            if (!order) {
                return res.status(404).json({ message: 'Order not found' });
            }

            res.json(order);
        } catch (err) {
            res.status(500).json({ error: 'Error retrieving order: ' + err });
        }
    },

    updateOrder: async (req, res) => {
        const orderID = req.params.id;
        const { paymentID, customerID, price, orderDay, address, status } = req.body;

        try {
            await OrderModel.updateOrder(orderID, paymentID, customerID, price, orderDay, address, status);
            res.json({ message: 'Order updated successfully!' });
        } catch (err) {
            res.status(500).json({ error: 'Error updating order: ' + err });
        }
    },

    deleteOrder: async (req, res) => {
        const orderID = req.params.id;

        try {
            await OrderModel.deleteOrder(orderID);
            res.json({ message: 'Order deleted successfully!' });
        } catch (err) {
            res.status(500).json({ error: 'Error deleting order: ' + err });
        }
    }
};

module.exports = OrderController;

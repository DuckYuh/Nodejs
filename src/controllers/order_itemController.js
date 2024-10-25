const OrderItemModel = require('../models/order_itemModel');

const OrderItemController = {
    createOrderItem: async (req, res) => {
        const { orderItemID, orderID, itemID, quanity, price } = req.body;

        try {
            await OrderItemModel.createOrderItem(orderItemID, orderID, itemID, quanity, price);
            res.status(201).json({ message: 'Order item created successfully!' });
        } catch (err) {
            res.status(500).json({ error: 'Error creating order item: ' + err });
        }
    },

    getOrderItems: async (req, res) => {
        try {
            const orderItems = await OrderItemModel.getOrderItems();
            res.json(orderItems);
        } catch (err) {
            res.status(500).json({ error: 'Error retrieving order items: ' + err });
        }
    },

    getOrderItemById: async (req, res) => {
        const orderItemID = req.params.id;

        try {
            const orderItem = await OrderItemModel.getOrderItemById(orderItemID);

            if (!orderItem) {
                return res.status(404).json({ message: 'Order item not found' });
            }

            res.json(orderItem);
        } catch (err) {
            res.status(500).json({ error: 'Error retrieving order item: ' + err });
        }
    },

    updateOrderItem: async (req, res) => {
        const orderItemID = req.params.id;
        const { orderID, itemID, quanity, price } = req.body;

        try {
            await OrderItemModel.updateOrderItem(orderItemID, orderID, itemID, quanity, price);
            res.json({ message: 'Order item updated successfully!' });
        } catch (err) {
            res.status(500).json({ error: 'Error updating order item: ' + err });
        }
    },

    deleteOrderItem: async (req, res) => {
        const orderItemID = req.params.id;

        try {
            await OrderItemModel.deleteOrderItem(orderItemID);
            res.json({ message: 'Order item deleted successfully!' });
        } catch (err) {
            res.status(500).json({ error: 'Error deleting order item: ' + err });
        }
    }
};

module.exports = OrderItemController;

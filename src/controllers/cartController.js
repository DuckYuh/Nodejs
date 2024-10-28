const CartModel = require('../models/cartModel');

const CartController = {
    createCart: async (req, res) => {
        const {cartID, customerID, itemID, price, quantity, cartDay} = req.body;

        try {
            await CartModel.createCart(cartID, customerID, itemID, price, quantity, cartDay);
            res.status(201).json({message: 'Cart created successfully'});
        } catch (err) {
            res.status(500).json({error: 'Error creating cart: ' + err});
        }
    },

    getCarts: async(req, res) => {
        try {
            const carts = await CartModel.getCarts();
            res.json(orders);
        } catch (err) {
            res.status(500).json({ error: 'Error retrieving carts: ' + err});
        }
    },

    getCartById: async (req, res) => {
        const cartID = req.params.id;

        try {
            const cart = await CartModel.getCartById(cartID);

            if(!cart) {
                return res.status(404).json({message: 'Cart not found'});
            }

            res.json(cart);
        } catch (err) {
            res.status(500).json({ error: 'Error retrieving cart: ' + err});
        }
    },

    updateCart: async (req, res) => {
        const cartID = req.params.id;
        const{ customerID, itemID, price, quantity, cartDay} = red.body;

        try {
            await CartModel.updateCart(cartID, customerID, itemID, price, quantity, cartDay);
            res.json({message: 'Cart updated successfully!'});
        } catch (err) {
            res.status(500).json({error: 'Error updating cart: ' +err});
        }
    },
    
    deleteCart: async (req, res) => {
        const cartID = req.params.id;

        try {
            await CartModel.deleteCart(cartID);
            res.json({message: 'Cart deleted successfully!'});
        } catch (err) {
            res.status(500).json({error: 'Error deleting cart:' + err});
        }
    }
};

module.exports = CartController;
const CartItemModel = require('../models/cart_itemModel');

const CartItemController = {
    createCartItem: async (req,res) => {
        const { cartItemID, cartID, itemID, quantity, price} = req.body;

        try{
            await CartItemModel.createCartItem(cartItemID, cartID, itemID, quantity, price);
            res.status(201).json({message: 'Cart item created successfully'});
        } catch (err) {
            res.status(500).json({error: 'Error creating cart item: ' +err});
        }
    },

    getCartItems: async (req, res) => {
        try {
            const cartItems = await CartItemModel.getCartItems();
            res.json(cartItems);
        } catch (err) {
            res.status(500).json({error: 'Error retrieving cart items: ' +err});
        }
    },

    getCartItemsById: async (req, res) => {
        const cartItemID = res.params.id;

        try {
            const cartItem = await CartItemModel.getCartItemsById();

            if(!cartItem){
                return res.status(404).json({ message: 'Cart item not found'});
            }

            res.json(cartItem);
        } catch (err) {
            res.status(500).json({error: 'Error retrieving cart item' + err});
        }
    },

    updateCartItem: async (req,res) => {
        const cartItemID = req.params.id;
        const { cartID, itemID, quanity, price } = req.body;

        try {
            await cartItemModel.updateCartItem(cartItemID, cartID, itemID, quanity, price);
            res.json({ message: 'Cart item updated successfully!' });
        } catch (err) {
            res.status(500).json({ error: 'Error updating cart item: ' + err });
        }
    },

    deleteCartItem: async (req, res) => {
        const cartItemID = req.params.id;

        try {
            await CartItemModel.deleteCartItem(cartItemID);
            res.json({ message: 'Cart item deleted successfully!' });
        } catch (err) {
            res.status(500).json({ error: 'Error deleting cart item: ' + err });
        }
    }
};

module.exports = CartItemController;
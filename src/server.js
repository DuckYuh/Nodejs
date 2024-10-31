import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoute from "./routes/web";
const { connectDB } = require('./config/dbconfig');
const userRoutes = require('./routes/userRoutes');
const customerRoutes = require('./routes/customerRoutes');
const admins = require('./routes/adminRoutes');

const orderRoutes = require('./routes/orderRoutes');
const orderItemRoutes = require('./routes/order_itemRoutes');
const paymentRoute = require('./routes/paymentRoutes');

// const cartItems = require('./routes/cart_itemRoutes');
// const carts = require('./routes/cartRoutes');
const item = require('./routes/itemRoutes');
require('dotenv').config();

let app = express();
let port = process.env.PORT || 8080;
require('dotenv').config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

viewEngine(app);
initWebRoute(app);

app.use('/api/users', userRoutes);
app.use('/api/customers', customerRoutes);
app.use('/api/admins', admins);
app.use('/api/orders', orderRoutes);
app.use('/api/orderItems', orderItemRoutes);
app.use('/api/payments', paymentRoute);
// app.use('/api/cartItems', cartItems);
// app.use('/api/carts', carts);
app.use('/api/items', item);


connectDB()
    .then(() => {
        app.listen(port, () => {
            console.log('Server is running on port', port);
        });
    })
    .catch(err => {
        console.error('Unable to start the server:', err);
    });
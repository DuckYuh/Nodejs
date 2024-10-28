import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoute from "./routes/web";
const { connectDB } = require('./config/dbconfig');
const userRoutes = require('./routes/userRoutes');
const customerRoutes = require('./routes/customerRoutes');
<<<<<<< HEAD
const orderRoutes = require('./routes/orderRoutes');
const orderItemRoutes = require('./routes/order_itemRoutes');
const paymentRoute = require('./routes/paymentRoutes');
require('dotenv').config();

let app = express();
let port = process.env.PORT || 8080;
=======
require('dotenv').config();

let app = express();
let port = process.env.PORT || 8081;
>>>>>>> 1f45844f98cde4ba7fe027b291208beffb278491

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

viewEngine(app);
initWebRoute(app);

app.use('/api/users', userRoutes);
app.use('/api/customers', customerRoutes);
<<<<<<< HEAD
app.use('/api/orders', orderRoutes);
app.use('/api/orderItems', orderItemRoutes);
app.use('/api/payments', paymentRoute);
=======

>>>>>>> 1f45844f98cde4ba7fe027b291208beffb278491
connectDB()
    .then(() => {
        app.listen(port, () => {
            console.log('Server is running on port', port);
        });
    })
    .catch(err => {
        console.error('Unable to start the server:', err);
    });
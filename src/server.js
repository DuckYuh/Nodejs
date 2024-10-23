import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoute from "./routes/web";
const { connectDB } = require('./config/dbconfig');
const userRoutes = require('./routes/userRoutes');
const customerRoutes = require('./routes/customerRoutes');
require('dotenv').config();

let app = express();
let port = process.env.PORT || 8081;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

viewEngine(app);
initWebRoute(app);

app.use('/api/users', userRoutes);
app.use('/api/customers', customerRoutes);

connectDB()
    .then(() => {
        app.listen(port, () => {
            console.log('Server is running on port', port);
        });
    })
    .catch(err => {
        console.error('Unable to start the server:', err);
    });
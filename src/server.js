import express, { request } from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoute from "./routes/web";

const multer = require('multer');
const path = require('path');

const { connectDB } = require('./config/dbconfig');

const userRoutes = require('./routes/userRoutes');
const customerRoutes = require('./routes/customerRoutes');
const adminRoutes = require('./routes/adminRoutes');
const orderRoutes = require('./routes/orderRoutes');
const orderItemRoutes = require('./routes/order_itemRoutes');
const paymentRoute = require('./routes/paymentRoutes');
const cartItemRoutes = require('./routes/cart_itemRoutes');
const cartRoutes = require('./routes/cartRoutes');
const itemRoutes = require('./routes/itemRoutes');

const loginApi = require('./services/loginService');
const signupApi = require('./services/signupService');
const newCollection = require('./services/newCollectionService');
const uploadFile = require('./services/uploadService');

require('dotenv').config();

let app = express();
let port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

viewEngine(app);
initWebRoute(app);

app.use('/api/users', userRoutes);
app.use('/api/customers', customerRoutes);
app.use('/api/admins', adminRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/orderItems', orderItemRoutes);
app.use('/api/payments', paymentRoute);
app.use('/api/cartItems', cartItemRoutes);
app.use('/api/carts', cartRoutes);
app.use('/api/items', itemRoutes);

const storage = multer.diskStorage({
    destination: './upload/images',
    filename:(req,file,cb)=>{
        return cb(null,'${file.name}_${data.now()}${path.extname(file.originalname)}')
    }
})

const upload = multer({storage:storage})

app.use('/image',express.static('/upload/images'))

app.post('/upload',upload.single('product'),uploadFile.uploadFile);
app.post('/newcollection',newCollection.newCollection);
app.post('/login',loginApi.login);
app.post('/signup',signupApi.signup);


connectDB()
    .then(() => {
        app.listen(port, () => {
            console.log('Server is running on port', port);
        });
    })
    .catch(err => {
        console.error('Unable to start the server:', err);
    });
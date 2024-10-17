import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoute from "./route/web";
import config from "./config/dbconfig";
import sql from "mssql";
require('dotenv').config();

let app = express();
let port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

async function connectDB() {
    try {
        const pool = await sql.connect(config);
        console.log("Kết nối thành công đến SQL Server");

        const result = await sql.query`SELECT * FROM [dbo].[User]`;
        console.log(result);
    } catch (err) {
        console.error("Lỗi kết nối đến SQL Server:", err);
    } finally {
        // Đóng kết nối
        sql.close();
    }
}

connectDB();

viewEngine(app);
initWebRoute(app);

app.listen(port,() => {
    console.log('Running on port: ',port);
})
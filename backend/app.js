import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import upload from './middlewares/upload.js';
import cors from 'cors';
import https from 'https';

import Product from './models/Product.js';

dotenv.config()

const PORT = process.env.PORT || 8080;

const optionSSL = {
    key: fs.readFileSync("/etc/letsencrypt/live/xn-----6kccjk3blftwu2p.xn--90ais/fullchain.pem"),
    cert: fs.readFileSync("/etc/letsencrypt/live/xn-----6kccjk3blftwu2p.xn--90ais/privkey.pem")
};

const app = express()
app.use(express.json());

app.use(cors({credentials: true, origin: process.env.CLIENT_URL || `http://localhost:5173` }));

https.createServer(optionSSL, app).listen(80, "xn-----6kccjk3blftwu2p.xn--90ais");

try {
    app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`);
    });
    mongoose
        .connect(process.env.DB_CONNECTION_STRING)
        .then((res) => console.log("Connected to DB"))
        .catch((error) => console.log(error));
} catch (error) {
    console.log(error);
}

app.use(express.static("./uploads"));

app.get("*", function(req, res, next) {
    res.redirect("https://" + req.headers.host + req.path);
});

app.post('/upload', upload.single('file'), (req, res) => {
    res.json(req.file.filename);
});

app.post('/products', async (req, res) => {
    const products = await Product.find({tagEN: req.body.tagEN})

    res.json(products)
})

app.post('/product/one', async (req, res) => {
    try {
        const product = await Product.findOne({_id: req.body.id})

        res.json(product)
    } catch(e) {
        throw new Error(e)
    }
})

app.post('/product/add', async (req, res) => {
    try {
        const {title, description, tagRU, tagEN, image, weight, size} = req.body
        const product = new Product({title, description, tagRU, tagEN, image, weight, size});
    
        await product.save()
        
        res.json(product)
        
    } catch(e) {
        throw new Error(e)
    }
})
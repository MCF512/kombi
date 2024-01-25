import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import upload from './middlewares/upload.js';
import cors from 'cors'

import Product from './models/Product.js';

dotenv.config()

const PORT = process.env.PORT || 8080;


const app = express()
app.use(express.json());

app.use(cors({credentials: true, origin: process.env.CLIENT_URL || `http://localhost:5173` }));

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
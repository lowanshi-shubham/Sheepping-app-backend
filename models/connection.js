import mongoose from 'mongoose';
import dotenv from "dotenv";
dotenv.config();

// const url="mongodb://127.0.0.1:27017/shippingwar";

    mongoose.connect(process.env.DB_URL);
    console.log("Successfully connected to mongodb database...");
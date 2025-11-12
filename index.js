console.log("Hello, World!");
import express from 'express';
import { connectDB } from './src/configs/db.js';

connectDB();
const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
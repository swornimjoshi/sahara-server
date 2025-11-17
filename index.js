import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './src/configs/db.js';
import authRoutes from './src/routes/authRoutes.js';
import trekRoutes from './src/routes/trekRoutes.js';


dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/treks', trekRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(` Server running on port ${PORT}`);
});

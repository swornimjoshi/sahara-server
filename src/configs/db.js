import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const mongoURI = process.env.MONGO_URI || 'your-default-mongo-uri-here';

export const connectDB= async()=>{
    try{
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB connected successfully");

    }catch(error){
        console.error("MongoDB connection error:", error);
        process.exit(1);
    }
}
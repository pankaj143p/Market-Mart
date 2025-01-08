// import mongoose from "mongoose";

// export const connectDB = async () => {
// 	try {
// 		const conn = await mongoose.connect(process.env.MONGO_URI);
// 		console.log(`MongoDB connected: ${conn.connection.host}`);
// 	} catch (error) {
// 		console.log("Error connecting to MONGODB", error.message);
// 		process.exit(1);
// 	}
// };

// import mongoose from 'mongoose';
// import dotenv from "dotenv";
// dotenv.config();
// export const connectDB = async () => {
//     const mongoURI = process.env.MONGO_URI || "";
//     if (!mongoURI) {
//         console.error("MONGO_URI environment variable is not set.");
//         process.exit(1);
//     }

//     try {
//         const conn = await mongoose.connect(mongoURI, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true
//         });
//         console.log(`MongoDB connected: ${conn.connection.host}`);
//     } catch (error) {
//         console.error("Error connecting to MongoDB", error.message);
//         process.exit(1);
//     }
// 	console.log("Mongo URI:", process.env.MONGO_URI);

// };
import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect( process.env.MONGO_URL || "mongodb://localhost:27017/marketmart");
        console.log(`MongoDB connected: ${conn.connection.host,conn}`);
    } catch (error) {
        console.log("Error connecting to MONGODB", error.message);
        process.exit(1);
    }
};



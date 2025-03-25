import mongoose from "mongoose";

if (!process.env.MONGODB_URI) {
  throw new Error("Please add your MongoDB URI to .env.local");
}

const MONGODB_URI = process.env.MONGODB_URI;

const connectMongoDB = async () => {
  try {
    // Add connection options to handle timeout issues
    const options = {
      serverSelectionTimeoutMS: 15000, // Increase from default 10000
      socketTimeoutMS: 45000, // Increase from default 30000
    };
    
    await mongoose.connect(MONGODB_URI, options);
    console.log("Connected to MongoDB.");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error; // Rethrow to handle in the API route
  }
};

export default connectMongoDB;
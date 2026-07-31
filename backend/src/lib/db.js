import mongoose from "mongoose";
import { ENV } from "./env.js";

const connectDB = async () => {
  try {
    if (!ENV.MONGO_URI) {
      console.error("❌ ERROR: MONGO_URI is not set in Environment Variables!");
      process.exit(1);
    }

    const conn = await mongoose.connect(ENV.MONGO_URI);
    console.log(`Database connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Database connection error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;

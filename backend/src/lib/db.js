import mongoose from "mongoose";

const connectDB = async () => {
  const { MONGO_URI } = process.env;

  try {
    if (!MONGO_URI) {
      throw new Error("MONGO_URI not found in .env file");
    }

    const conn = await mongoose.connect(MONGO_URI);
    console.log(`Database connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Database connection error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;

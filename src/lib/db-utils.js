import mongoose from "mongoose";

const connectDB = async () => {
  if (mongoose.connection.readyState === 1) {
    return;
  }
  try {
    await mongoose.connect(process.env.DB_URL);
  } catch (error) {
    throw new Error("Connection failed", error);
  }
};

export default connectDB;

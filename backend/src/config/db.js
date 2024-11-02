import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose
      .connect(
     process.env.MONGO_URI
      )
      .then(() => {
        console.log("MongoDB connected successfully   :-)");
      });
  } catch (error) {
    console.log("MongoDB connection error  !!!");
  }
};

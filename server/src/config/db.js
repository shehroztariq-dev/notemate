import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MONGODB connected successfully!");
  } catch (error) {
    console.error("Error connecting to database", error);

    process.exit(1); // 1 means exit with failure
  }
};

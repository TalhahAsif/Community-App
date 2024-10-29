import mongoose from "mongoose";

export default async function connectDB() {
  try {
    let connection = await mongoose.connect(process.env.MONGODB_URI);
    console.info("mongodb Connected");
  } catch (err) {
    console.log("err in connection", err);
  }
}

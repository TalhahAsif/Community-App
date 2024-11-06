import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  profileImg: String,
  fullname: String,
  email: String,
  role: { type: String, default: "user", enum: ["user", "admin"] },
  password: String,
  location: {
    lat: Number,
    long: Number,
  },
  address: String,
  bio: String,
});

export const UserModel =
  mongoose.models?.Users || mongoose.model("Users", userSchema);
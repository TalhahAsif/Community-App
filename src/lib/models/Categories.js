import mongoose from "mongoose";
const { Schema } = mongoose;

const CategoriesSchema = new Schema({
  title: String,
  discription: String,
  thumnail: String,
});

export const CategoriesModel = mongoose.model("Categories", CategoriesSchema);

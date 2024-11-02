import mongoose from "mongoose";
const { Schema } = mongoose;

const CategoriesSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  thumnail: { type: String, required: true },
});

export const CategoriesModel =
  mongoose.models.Categories || mongoose.model("Categories", CategoriesSchema);

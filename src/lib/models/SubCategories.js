import mongoose from "mongoose";
const { Schema } = mongoose;

const SubCategoriesSchema = new Schema({
  title: { type: String, required: true },
  discription: String,
  thumnail: { type: String, required: true },
  category: {
    type: mongoose.Types.ObjectId,
    ref: "Categories",
  },
});

export const SubCategoriesModel =
  mongoose.models.SubCategories ||
  mongoose.model("SubCategories", SubCategoriesSchema);

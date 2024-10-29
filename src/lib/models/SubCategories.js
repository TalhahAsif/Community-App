import mongoose from "mongoose";
const { Schema } = mongoose;

const SubCategoriesSchema = new Schema({
  title: String,
  discription: String,
  thumnail: String,
  category: {type:mongoose.Types.ObjectId, ref:"Categories"},
});

export const SubCategoriesModel = mongoose.model("SubCategories", SubCategoriesSchema);

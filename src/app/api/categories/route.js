import connectDB from "@/lib/db/connectDB";
import { CategoriesModel } from "@/lib/models/Categories";
import { connect } from "mongoose";

export async function GET(request) {
  await connectDB();
  const categories = await CategoriesModel.find();
  return Response.json(
    {
      msg: "Categories Founded Successfully",
      categories,
    },
    { status: 200 }
  );
}

export async function POST(request) {
  await connectDB();
  const obj = await request.json();
  let newCategories = new CategoriesModel(obj);
  await newCategories.save();

  return Response.json(
    {
      msg: "Category added successfully",
      category: newCategories,
    },
    {
      status: 201,
    }
  );
}

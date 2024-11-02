import Subcategories from "@/app/(admin)/admin/subcategories/page";
import connectDB from "@/lib/db/connectDB";
import { SubCategoriesModel } from "@/lib/models/SubCategories";

export async function GET(request) {
  await connectDB();
  const SubCategories = await SubCategoriesModel.find();
  return Response.json(
    {
      msg: "Subcategories Founded Succesfully",
      SubCategories,
    },
    {
      status: "200",
    }
  );
}

export async function POST(request) {
  await connectDB();
  const obj = await request.json();
  console.log(obj);
  const newSubCategories = SubCategoriesModel(obj);
  return Response.json(
    {
      msg: "Subcategories Added successfully",  
      subcategories: newSubCategories,
    },
    { status: 201 }
  );
}

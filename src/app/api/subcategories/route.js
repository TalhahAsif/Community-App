import Subcategories from "@/app/(admin)/admin/subcategories/page";
import connectDB from "@/lib/db/connectDB";
import { SubCategoriesModel } from "@/lib/models/SubCategories";

export async function GET(request) {
  await connectDB();
  // const reqURL = request.url;
  // const { searchParams } = new URL(reqURL);
  // const query = {};
  // console.log("searchParams==>", searchParams);

  // if (searchParams.get("category")) {
  //   query.category = searchParams.get("category");
  // }
  // console.log("query=>", Categories);

  const SubCategories = await SubCategoriesModel.find().populate("category");

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
  await newSubCategories.save();
  return Response.json(
    {
      msg: "Subcategories Added successfully",
      subcategories: newSubCategories,
    },
    { status: 201 }
  );
}

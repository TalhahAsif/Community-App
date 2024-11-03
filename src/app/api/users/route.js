import connectDB from "@/lib/db/connectDB";
import { UserModel } from "@/lib/models/Users";

export async function GET(request) {
  await connectDB();
  const users = await UserModel.find();
  return Response.json(
    {
      msg: "User Fetched Succcessfully",
      users,
    },
    { status: 200 }
  );
}

export async function POST(request) {
  await connectDB();
  const obj = await request.json();
  console.log(obj);
  let newUser = new UserModel(obj);
  console.log(newUser);
  await newUser.save();

  return Response.json(
    {
      msg: "User Added Successfully",
      user: newUser,
    },
    { status: 201 }
  );
}

export async function PUT(request) {}

export async function DELETE(request) {}

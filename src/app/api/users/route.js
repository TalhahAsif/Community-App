import connectDB from "@/lib/db/connectDB";
import { UserModel } from "@/lib/models/Users";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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
  const user = await UserModel.findOne({ email: obj.email });

  if (user)
    return Response.json(
      {
        error: true,
        msg: "User is already exist",
      },
      { status: 403 }
    );
  const saltRounds = 10;
  const hashpassword = await bcrypt.hash(obj.password, saltRounds);

  obj.password = hashpassword;

  let newUser = new UserModel(obj);
  await newUser.save();

  var token = jwt.sign(
    { _id: newUser.id, role: newUser.role },
    process.env.JWT_KEY
  );

  return Response.json(
    {
      msg: "User Added Successfully",
      user: newUser,
      token,
    },
    { status: 201 }
  );
}

export async function PUT(request) {}

export async function DELETE(request) {}

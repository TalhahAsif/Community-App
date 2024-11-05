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

  if (!user)
    return Response.json(
      {
        error: true,
        msg: "Credential not Exist",
      },
      { status: 403 }
    );
  const isPasswordValid = await bcrypt.compare(obj.password, user.password);

  if (!isPasswordValid)
    return Response.json(
      {
        error: true,
        msg: "Credential not Exist",
      },
      {
        status: 403,
      }
    );

  var token = jwt.sign({ _id: user.id, role: user.role }, process.env.JWT_KEY);

  return Response.json(
    {
      msg: "User Login Successfully",
      user,
      token,
    },
    { status: 201 }
  );
}

export async function PUT(request) {}

export async function DELETE(request) {}

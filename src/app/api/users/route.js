import connectDB from "@/lib/db/connectDB";
import { userModel } from "@/lib/models/User";

export async function GET(request) {
  await connectDB();
  const users = userModel.find();
  return Response.json(users, { status: 200 });
}

export async function POST(request) {
  await connectDB();
  const obj = await request.json();
  let newUser = new userModel(obj);
  await newUser.save();

  return Response.json(newUser, { status: 201 });
}

export async function PUT(request) {}

export async function DELETE(request) {}

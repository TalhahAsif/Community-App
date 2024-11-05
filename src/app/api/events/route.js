import connectDB from "@/lib/db/connectDB";
import { EventModel } from "@/lib/models/Event";

export async function GET(request) {
  await connectDB();
  const events = await EventModel.find();
  return Response.json(
    {
      msg: "Event founded successfully",
      events,
    },
    { status: 200 }
  );
}

export async function POST(request) {
  await connectDB();
  const obj = await request.json();
  let newEvent = new EventModel(obj);
  newEvent = await newEvent.save();

  return Response.json(
    {
      msg: "Event Added successfully",
      event: newEvent,
    },
    { status: 201 }
  );
}

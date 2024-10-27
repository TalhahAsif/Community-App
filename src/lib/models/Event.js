import mongoose from "mongoose";
const { Schema } = mongoose;

const EventSchema = new Schema({
  title: String,
  discription: String,
  startTime: String,
  startDate: String,
  EndTime: String,
  EndDate: String,
  location: {
    lat: Number,
    long: Number,
  },
  address: String,
  createdBy: { type: mongoose.Types.ObjectId, ref: "Users" },
  going: [{ type: mongoose.Types.ObjectId, ref: "Users" }],
});

export const EventModel = mongoose.model("Event", EventSchema);

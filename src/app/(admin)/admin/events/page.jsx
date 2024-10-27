import Image from "next/image";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Categories from "../categories/page";

const EventArr = [
  {
    id: 1,
    thumbnail: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Annual Cycling Marathon",
    Category: "Sports",
    location:"Karachi",
    subcatogory: "Marathon",
    createdBy: "user",
    createdAt: Date.now(),
  },
  {
    id: 2,
    thumbnail: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Annual Cycling Marathon",
    Category: "Sports",
    location:"Karachi",
    subcatogory: "Marathon",
    createdBy: "user",
    createdAt: Date.now(),
  },
  {
    id: 3,
    thumbnail: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Annual Cycling Marathon",
    Category: "Sports",
    location:"Karachi",
    subcatogory: "Marathon",
    createdBy: "user",
    createdAt: Date.now(),
  },
  {
    id: 4,
    thumbnail: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Annual Cycling Marathon",
    Category: "Sports",
    location:"Karachi",
    subcatogory: "Marathon",
    createdBy: "user",
    createdAt: Date.now(),
  },
];

export default function Event() {
  return (
    <div className="min-h-screen text-center">
      <h1 className="text-3xl">Event</h1>

      <Table>
        <TableCaption>A list of your recent Event.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] text-center">ID</TableHead>
            <TableHead className="text-center">Image</TableHead>
            <TableHead className="text-center">Title</TableHead>
            <TableHead className="text-center">Category</TableHead>
            <TableHead className="text-center">Location</TableHead>
            <TableHead className="text-center">Subcatogory</TableHead>
            <TableHead className="text-center">Created By</TableHead>
            <TableHead className="text-center">Created At</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {EventArr.map((event) => {
            return (
              <TableRow key={event.id}>
                <TableCell className="font-medium text-center">
                  {event.id}
                </TableCell>
                <TableCell className="text-center flex justify-center">
                  <Image src={event.thumbnail} width={50} height={50}/>
                </TableCell>
                <TableCell className="font-medium text-center">
                  {event.title}
                </TableCell>
                <TableCell className="text-center">
                  {event.Category}
                </TableCell>
                <TableCell className="text-center">
                  {event.location}
                </TableCell>
                <TableCell className="text-center">
                  {event.subcatogory}
                </TableCell>
                <TableCell className="text-center">
                  {event.createdBy}
                </TableCell>
                <TableCell className="text-center">
                  {event.createdAt}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

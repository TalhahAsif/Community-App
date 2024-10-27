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

const SubCategoriesArr = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Marathon",
    Category: "Sports",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Award Caremony",
    Category: "Education",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Coding Workshop",
    Category: "Education",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Eid Mela",
    Category: "Festival",
  },
];

export default function Subcategories() {
  return (
    <div className="min-h-screen text-center">
      <h1 className="text-3xl">Subcategories</h1>

      <Table>
        <TableCaption>A list of your recent Subcategories.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] text-center">ID</TableHead>
            <TableHead className="text-center">Image</TableHead>
            <TableHead className="text-center">title</TableHead>
            <TableHead className="text-center">Category</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {SubCategoriesArr.map((subcatogory) => {
            return (
              <TableRow key={subcatogory.id}>
                <TableCell className="text-center">{subcatogory.id}</TableCell>
                <TableCell className="text-center flex justify-center">
                  <Image src={subcatogory.image} width={40} height={40}/>
                </TableCell>
                <TableCell className="text-center">
                  {subcatogory.title}
                </TableCell>
                <TableCell className="text-center">
                  {subcatogory.Category}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

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
import AddCategory from "@/components/AddCategory/AddCategory";

const CategoriesArr = [
  {
    id: 1,
    thumbnail:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Sports",
  },
  {
    id: 2,
    thumbnail:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Education",
  },
  {
    id: 3,
    thumbnail:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dage",
    category: "festival",
  },
];

export default function Categories() {
  return (
    <div className="min-h-screen text-center">
      <div className="flex justify-between m-8">
        <h1 className="text-3xl">Categories</h1>
        <AddCategory />
      </div>
      <Table>
        <TableCaption>A list of your recent categories.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] text-center">ID</TableHead>
            <TableHead className="text-center">Image</TableHead>
            <TableHead className="text-center">Category</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {CategoriesArr.map((categories) => {
            return (
              <TableRow key={categories.id}>
                <TableCell className="font-medium text-center">
                  {categories.id}
                </TableCell>
                <TableCell className="text-center flex justify-center">
                  <Image
                    src={categories.thumbnail}
                    width={40}
                    height={40}
                    alt={categories.category}
                  />
                </TableCell>
                <TableCell className="text-center">
                  {categories.category}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

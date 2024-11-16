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
import { getCategories } from "@/actions/addcategory";

export default async function Categories() {
  const categories = await getCategories();
  return (
    <div className="min-h-screen text-center">
      <div className="flex justify-between m-8">
        <h1 className="text-3xl">Categories</h1>
        <AddCategory />
      </div>
      <Table className="text-xl font-serif">
        <TableCaption>A list of your recent categories.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] text-center">ID</TableHead>
            <TableHead className="text-center">Image</TableHead>
            <TableHead className="text-center">Title</TableHead>
            <TableHead className="text-center">Description</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {categories?.categories?.map((categories) => {
            return (
              <TableRow key={categories._id}>
                <TableCell className="font-medium text-center">
                  {categories._id}
                </TableCell>
                <TableCell className="text-center flex justify-center">
                  <Image
                    src={categories.thumnail}
                    width={100}
                    height={70}
                    alt={categories.category}
                  />
                </TableCell>
                <TableCell className="text-center">
                  {categories.title}
                </TableCell>
                <TableCell className="text-center">
                  {categories.description}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

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
import { getSubCategories } from "@/actions/subcategories";
import AddsubCategories from "@/components/AddSubcategories/AddSubcategories";

export default async function Subcategories() {
  const SubCategories = await getSubCategories();

  return (
    <div className="min-h-screen text-center">
      <div className="flex justify-between m-8">
        <h1 className="text-3xl">Subcategories</h1>
        <AddsubCategories />
      </div>

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
          {SubCategories?.SubCategories?.map((subcatogory) => {
            return (
              <TableRow key={subcatogory.id}>
                <TableCell className="text-center">{subcatogory.id}</TableCell>
                <TableCell className="text-center flex justify-center">
                  <Image
                    src={subcatogory.image}
                    width={40}
                    height={40}
                    alt={subcatogory.title}
                  />
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

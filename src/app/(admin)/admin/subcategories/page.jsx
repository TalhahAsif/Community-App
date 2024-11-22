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
import { getCategories } from "@/actions/addcategory";
import { CategorySelect } from "@/components/CategorySelect/CategorySelect";

export default async function Subcategories({ searchParams }) {
  const SubCategories = await getSubCategories(searchParams?.category);
  const categories = (await getCategories()).categories;

  console.log("SubCategories==>", SubCategories);

  return (
    <div className="min-h-screen text-center">
      <div className="flex justify-between m-8">
        <h1 className="text-3xl">Subcategories</h1>
        <div className="flex gap-2">
          <CategorySelect categories={categories} />
          <AddsubCategories categories={categories} />
        </div>
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
              <TableRow key={subcatogory._id}>
                <TableCell className="text-center">{subcatogory._id}</TableCell>
                <TableCell className="text-center flex justify-center">
                  <Image
                    src={subcatogory.thumnail}
                    width={80}
                    height={80}
                    alt={subcatogory.title}
                  />
                </TableCell>
                <TableCell className="text-center">
                  {subcatogory.title}
                </TableCell>
                <TableCell className="text-center">{subcatogory?.category?.title}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

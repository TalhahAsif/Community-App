import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

import React from "react";

const Layout = ({ children }) => {
  return (
    // <div>
    <Tabs defaultValue="deshboard" className="w-full">
      <TabsList className="flex gap-3">
        <Link href={"/admin/deshboard"}>
          <TabsTrigger value="deshboard" className="px-10">
            Deshboard
          </TabsTrigger>
        </Link>
        <Link href={"/admin/users"}>
          <TabsTrigger value="users" className="px-10">
            Users
          </TabsTrigger>
        </Link>
        <Link href={"/admin/events"}>
          <TabsTrigger value="events" className="px-10 ">
            Events
          </TabsTrigger>
        </Link>
        <Link href={"/admin/categories"}>
          <TabsTrigger value="categories" className="px-10 ">
            Categories
          </TabsTrigger>
        </Link>
        <Link href={"/admin/subcategories"}>
          <TabsTrigger value="Subcategories" className="px-10 ">
            Sub Categories
          </TabsTrigger>
        </Link>
      </TabsList>
      <TabsContent value="deshboard">{children}</TabsContent>
      <TabsContent value="users">{children}</TabsContent>
      <TabsContent value="events">{children}</TabsContent>
      <TabsContent value="categories">{children}</TabsContent>
      <TabsContent value="Subcategories">{children}</TabsContent>
    </Tabs>
    // </div>
  );
};

export default Layout;

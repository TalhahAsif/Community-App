"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UploadImage } from "@/actions/upload";
import { toast, useToast } from "@/hooks/use-toast";
import { addSubcategories } from "@/actions/subcategories";

export default function AddsubCategories({ categories }) {
  const [open, setOpen] = React.useState(false);
  const isDesktop = true;

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">Add Sub-Category</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Create Sub-Category</DialogTitle>
            <DialogDescription>
              Create Sub-Category here. Click save when youre done.
            </DialogDescription>
          </DialogHeader>
          <ProfileForm categories={categories} onClose={() => setOpen(false)} />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline">Create Sub-Category</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Create Sub-Category</DrawerTitle>
          <DrawerDescription>
            Create Sub-Category here. Click save when youre done.
          </DrawerDescription>
        </DrawerHeader>
        <ProfileForm
          className="px-4"
          categories={categories}
          onClose={() => setOpen(false)}
        />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

function ProfileForm({ className, categories, onClose }) {
  const formRef = React.useRef();

  const handleAddSubCategory = async (formdata) => {
    const uploadLink = await UploadImage(formdata);
    console.log("category===>", formdata.get("category"));
    const obj = {
      title: formdata.get("title"),
      description: formdata.get("description"),
      category: formdata.get("category"),
      thumnail: uploadLink,
    };
    await addSubcategories(obj);
    toast({
      title: "Sub Category added successfully",
    });

    onClose(true);
    formRef?.current?.reset();
  };
  return (
    <form
      ref={formRef}
      action={handleAddSubCategory}
      className={cn("grid items-start gap-4", className)}
    >
      <div className="grid gap-2">
        <Label htmlFor="title">Title</Label>
        <Input
          type="text"
          name="title"
          id="title"
          placeholder="cricket"
          required={true}
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="title">Category</Label>
        <Select name="category">
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select Category" />
          </SelectTrigger>
          <SelectContent>
            {categories?.map((category, index) => {
              return (
                <SelectItem key={category._id} value={category._id}>
                  {category.title}
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="description">Description</Label>
        <Input
          type="text"
          name="description"
          id="description"
          placeholder="Description"
          required={true}
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="thumbnail">Thumbnail</Label>
        <Input id="thumbnail" name="thumbnail" type="file" required={true} />
      </div>
      <Button type="submit" loader="true">
        {/* <Loader2 className="animate-spin" /> */}
        {/* {loading ? <Loader2 className="animate-spin" /> :} */}
        Save changes
      </Button>
    </form>
  );
}

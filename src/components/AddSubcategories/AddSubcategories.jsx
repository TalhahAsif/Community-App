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
import { addcategories, getCategories } from "@/actions/addcategory";
import { Loader2 } from "lucide-react";
import { toast, useToast } from "@/hooks/use-toast";

export default async function AddsubCategories() {
  const [open, setOpen] = React.useState(false);
  const isDesktop = true;

  const category = await getCategories()

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
          <ProfileForm />
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
        <ProfileForm className="px-4" />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

function ProfileForm({ className, setOpen }) {
  const [loading, setLoading] = React.useState(false);

  const formRef = React.useRef();

  console.log("loading===>", loading);

  const handleAddCategory = async (formdata) => {
    setLoading(true);
    console.log(loading);

    const uploadLink = await UploadImage(formdata);
    const obj = {
      title: formdata.get("title"),
      description: formdata.get("description"),
      thumnail: uploadLink,
    };
    await addcategories(obj);
    toast({
      title: "Category added successfully",
    });

    formRef?.current?.reset();
    setLoading(false);
  };
  return (
    <form
      ref={formRef}
      action={handleAddCategory}
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
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
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
        <Input
          id="thumbnail"
          name="thumbnail"
          type="file"
          required={true}
          alt="slfjsa"
        />
      </div>
      <Button type="submit" disabled={loading} loader="true">
        {/* <Loader2 className="animate-spin" /> */}
        {/* {loading ? <Loader2 className="animate-spin" /> :} */}
        Save changes
      </Button>
    </form>
  );
}

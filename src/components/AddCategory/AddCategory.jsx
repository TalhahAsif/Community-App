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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UploadImage } from "@/actions/upload";
import { addcategories } from "@/actions/addcategory";
import { Loader2 } from "lucide-react";
import { toast, useToast } from "@/hooks/use-toast";

export default function AddCategory() {
  const [open, setOpen] = React.useState(false);
  const isDesktop = true;

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">Add Category</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Create Category</DialogTitle>
            <DialogDescription>
              Create Category here. Click save when youre done.
            </DialogDescription>
          </DialogHeader>
          <ProfileForm onClose={() => setOpen(false)} />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline">Create Category</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Create Category</DrawerTitle>
          <DrawerDescription>
            Create Category here. Click save when youre done.
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

function ProfileForm({ className, onClose }) {
  const formRef = React.useRef();

  const handleAddCategory = async (formdata) => {
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
    onClose(true);
    formRef?.current?.reset();
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
          placeholder="Sports"
          required={true}
        />
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
      <Button type="submit" loader="true">
        {/* <Loader2 className="animate-spin" /> */}
        {/* {loading ? <Loader2 className="animate-spin" /> :} */}
        Save changes
      </Button>
    </form>
  );
}

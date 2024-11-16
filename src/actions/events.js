"use server";

const { revalidatePath } = require("next/cache");

export const addcategories = async (obj) => {
  console.log("obj ===>", JSON.stringify(obj));
  const added = await fetch(`${process.env.BASE_URL}/api/categories`, {
    method: "POST",
    body: JSON.stringify(obj),
  });
  if (added.ok) {
    console.log("Category added successfully");
    revalidatePath("/admin/categories");
  } else {
    console.log("there is some thing wrong");
  }
};

export const getCategories = async () => {
  let Response = await fetch(`${process.env.BASE_URL}/api/categories`);
  Response = await Response.json();
  if (Response) {
    console.log("Category Founded Successfully");
    return Response;
  } else {
    console.log("there is some thing wrong");
  }
  revalidatePath("/admin/categories");
};

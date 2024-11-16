"use server";

const { revalidatePath } = require("next/cache");

export const addSubcategories = async (obj) => {
  console.log("obj ===>", JSON.stringify(obj));
  const added = await fetch(`${process.env.BASE_URL}/api/subcategories`, {
    method: "POST",
    body: JSON.stringify(obj),
  });
  if (added.ok) {
    console.log("subcategories added successfully");
    revalidatePath("/admin/categories");
  } else {
    console.log("there is some thing wrong");
  }
};

export const getSubCategories = async (category) => {
  let url;
  if (category) {
    url = `${process.env.BASE_URL}/api/subcategories?category=${category}`;
  } else {
    url = `${process.env.BASE_URL}/api/subcategories`;
  }
  let Response = await fetch(url);
  Response = await Response.json();
  console.log(Response);

  if (Response) {
    console.log("subcategories Founded Successfully");
    return Response;
  } else {
    console.log("there is some thing wrong");
  }
  revalidatePath("/admin/subcategories");
};

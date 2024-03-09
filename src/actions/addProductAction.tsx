"use server";

import { Produtos } from "@/app/products/page";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

function validateName(name: unknown) {
  return typeof name === "string" && name.length > 1;
}

function validatePrice(price: unknown) {
  return typeof price === "number" && price > 1;
}

export default async function addProductAction(
  state: { errors: string[] },
  formData: FormData,
) {
  const produto: Produtos = {
    nome: formData.get("name") as string,
    preco: Number(formData.get("price")),
    descricao: formData.get("description") as string,
    estoque: Number(formData.get("stock")),
    importado: formData.get("imported") ? 1 : 0,
  };

  let errors = [];
  if (!validateName(produto.nome)) errors.push("Nome inválido!");
  if (!validatePrice(produto.preco)) errors.push("Preço inválido!");
  if (errors.length > 0) return { errors };

  try {
    const response = await fetch("https://api.origamid.online/produtos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(produto),
    });

    if (!response.ok) throw new Error("Erro ao adicionar o produto!");
  } catch (error: unknown) {
    if (error instanceof Error)
      return {
        errors: [error.message],
      };
  }

  revalidatePath("/products");
  redirect("/products");
  // return { errors: [] };
}

// export default async function addProductAction(formData: FormData) {
//   const produto: Produtos = {
//     nome: formData.get("name") as string,
//     preco: Number(formData.get("price")),
//     descricao: formData.get("description") as string,
//     estoque: Number(formData.get("stock")),
//     importado: formData.get("imported") ? 1 : 0,
//   };

//   const response = await fetch("https://api.origamid.online/produtos", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(produto),
//   });

//   if (response.ok) {
//     await response.json();
//     revalidatePath("/products");
//     redirect("/products");
//   }
// }

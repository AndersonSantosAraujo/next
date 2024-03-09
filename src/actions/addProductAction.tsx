"use server";

import { Produtos } from "@/app/products/page";

export default async function addProductAction(body: Produtos) {
  try {
    const response = await fetch("https://api.origamid.online/produtos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    return data;
  } catch (err) {
    return undefined;
  }
}

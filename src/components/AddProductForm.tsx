"use client";

import RefreshProducts from "./RefreshProducts";
import addProductAction from "@/actions/addProductAction";
import { navigate } from "@/actions/navigate";
import { Produtos } from "@/app/products/page";

export default function AddProductForm() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const elements = e.currentTarget.elements;

    const name = (elements.namedItem("name") as HTMLInputElement).value;
    const price = (elements.namedItem("price") as HTMLInputElement).value;
    const description = (elements.namedItem("description") as HTMLInputElement)
      .value;
    const stock = (elements.namedItem("stock") as HTMLInputElement).value;
    const imported = (elements.namedItem("imported") as HTMLInputElement)
      .checked;

    const body: Produtos = {
      nome: name,
      preco: Number(price),
      descricao: description,
      estoque: Number(stock),
      importado: imported ? 1 : 0,
    };
    const response = await addProductAction(body);

    if (response) {
      RefreshProducts();
      navigate("/products");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Nome</label>
      <input type="text" id="name" name="name" />

      <label htmlFor="price">Preço</label>
      <input type="text" id="price" name="price" />

      <label htmlFor="description">Descrição</label>
      <input type="text" id="description" name="description" />

      <label htmlFor="stock">Estoque</label>
      <input type="text" id="stock" name="stock" />

      <label htmlFor="imported">
        <input type="checkbox" id="imported" name="imported" />
        Importado
      </label>

      <button type="submit">Adicionar</button>
    </form>
  );
}

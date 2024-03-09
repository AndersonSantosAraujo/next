import { Produtos } from "@/app/products/page";

export default async function ProductsList() {
  let error = false;
  let produtos: Produtos[] = [];
  try {
    const response = await fetch("https://api.origamid.online/produtoss", {
      next: {
        revalidate: 5,
      },
    });

    if (!response.ok) throw new Error("Erro ao tentar carregar os produtos!");
    produtos = (await response.json()) as Produtos[];
  } catch (error) {
    error = true;

    return (
      <p style={{ color: "red", fontSize: "14px" }}>Essa lista tem um erro!</p>
    );
  }

  return (
    <ul>
      {produtos.map(({ id, nome, preco }) => (
        <li key={id}>
          <span>{nome}: </span>
          <span>R$ {preco}</span>
        </li>
      ))}
    </ul>
  );
}

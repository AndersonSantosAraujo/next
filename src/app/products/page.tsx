import ProductsList from "@/components/ProductsList";

export type Produtos = {
  id?: string;
  nome: string;
  preco: number;
  descricao: string;
  estoque: number;
  importado: 0 | 1;
};

export default async function ProductsPage() {
  // const response = await fetch("https://api.origamid.online/produtos", {
  //   next: {
  //     revalidate: 5,
  //     // tags: ["products"],
  //   },
  // });

  // if (!response.ok) throw new Error("Erro ao tentar carregar os produtos!");
  // const produtos = (await response.json()) as Produtos[];

  return (
    <main>
      <h1>Produtos</h1>
      <p>Essa é a primeira lista</p>
      <ProductsList />
      {/* <ul>
        {produtos.map(({ id, nome, preco }) => (
          <li key={id}>
            <span>{nome}: </span>
            <span>R$ {preco}</span>
          </li>
        ))}
      </ul> */}
      <p>Essa é a segunda lista</p>
    </main>
  );
}

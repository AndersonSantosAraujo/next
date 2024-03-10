import Refresh from "@/components/Refresh";

type Acao = {
  atualizada: string;
  nome: string;
  preco: number;
};

export const revalidate = 5; // Esse ravalidate vale para todos os fetch's

export default async function CachePage() {
  // const response = await fetch("https://api.origamid.online/acoes/lua", {
  //   cache: "no-store",
  // });
  const response = await fetch("https://api.origamid.online/acoes/lua", {
    next: {
      //   revalidate: 5,
      tags: ["acoes"],
    },
  });
  const acao = (await response.json()) as Acao;

  return (
    <main>
      <h1>Cache</h1>
      <Refresh />
      <h2>{acao.nome}</h2>
      <p>Preço: {acao.preco}</p>
      <p>Atualizada: {acao.atualizada}</p>
    </main>
  );
}

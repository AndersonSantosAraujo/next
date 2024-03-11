import Link from "next/link";

export default async function NotFOund() {
  return (
    <main>
      <h1>404</h1>
      <h1>Página Não Encontrada!</h1>
      <Link href={"/"}>Volte para a Home</Link>
    </main>
  );
}

import { cookies } from "next/headers";
import Link from "next/link";

type Conta = {
  autorizado: boolean;
  usuario: string;
};

export default async function Menu() {
  const token = cookies().get("token");

  const response = await fetch("https://api.origamid.online/conta/perfil", {
    method: "GET",
    headers: {
      Authorization: "Bearer " + token?.value,
    },
  });

  const data = (await response.json()) as Conta;

  return (
    // prefetch=true já é padrão
    <ul className="menu">
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/exemplo">Exemplo</Link>
      </li>
      <li>
        <Link href="/new-login">Novo Login</Link>
      </li>
      <li>
        <Link href="/sobre">Sobre</Link>
      </li>
      <li>
        <Link href="/contato">Contato</Link>
      </li>
      <li>
        <Link href="/imc">IMC</Link>
      </li>
      <li>
        <Link href="/produtos">Produtos</Link>
      </li>
      <li>
        <Link href="/cursos">Cursos</Link>
      </li>
      <li>
        <Link href="/acoes">Ações</Link>
      </li>
      <li>
        {data.autorizado ? (
          <span>{data.usuario}</span>
        ) : (
          <Link href="/login">Login</Link>
        )}
      </li>
    </ul>
  );
}

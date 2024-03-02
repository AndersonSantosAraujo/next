import Link from "next/link";

export default function Menu() {
  return (
    // prefetch=true já é padrão
    <ul className="menu">
      <li>
        <Link href="/" prefetch={true}>
          Home
        </Link>
      </li>
      <li>
        <Link href="/sobre#empresa" prefetch={true} scroll={false}>
          Sobre
        </Link>
      </li>
      <li>
        <Link href="/contato" prefetch={true}>
          Contato
        </Link>
      </li>
    </ul>
  );
}

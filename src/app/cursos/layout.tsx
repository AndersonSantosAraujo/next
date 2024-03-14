import { getCursos } from "@/api/cursos";
import Link from "next/link";
import React from "react";

export default async function CursosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await getCursos();

  return (
    <div className="flex">
      <nav style={{ marginRight: "4rem" }}>
        <h2>Cursos</h2>
        <ul>
          {data.map(({ slug, nome, id }) => (
            <li key={id}>
              <Link href={`/cursos/${slug}`}>{nome}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div>{children}</div>
    </div>
  );
}

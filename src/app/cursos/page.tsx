import { getCursos } from "@/api/cursos";
import Link from "next/link";

export default async function CursosPage() {
  const data = await getCursos();

  return (
    <div>
      <h1>Cursos</h1>
      <ul>
        {data.map(({ slug, nome, id }) => (
          <li key={id}>
            <Link href={`/cursos/${slug}`}>{nome}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

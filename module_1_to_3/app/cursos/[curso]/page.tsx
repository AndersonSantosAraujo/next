import { getCurso } from "@/api/cursos";
import Link from "next/link";

type PageProps = {
  params: {
    curso: string;
  };
};

export default async function CursoPage({ params }: PageProps) {
  const data = await getCurso(params.curso);

  return (
    <div>
      <Link href={`/cursos`}>Voltar</Link>
      <h1>Curso de {data.nome}</h1>
      <p>Descrição: {data.descricao}</p>
      <p>Total de Horas: {data.total_horas}</p>
      <p>Total de Aulas: {data.total_aulas}</p>
      <h3>Aulas:</h3>
      <ul>
        {data.aulas.map(({ id, slug, nome }) => (
          <li key={id}>
            <Link href={`/cursos/${data.slug}/${slug}`}>{nome}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

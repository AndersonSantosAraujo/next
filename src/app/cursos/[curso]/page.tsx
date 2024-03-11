import { getCurso, getCursos } from "@/api/cursos";
import Link from "next/link";

type PageProps = {
  params: {
    curso: string;
  };
};

// export function generateStaticParams() {
//   return [
//     { curso: "html" },
//     { curso: "css" },
//     { curso: "javascript" },
//     { curso: "ui-design" },
//     { curso: "ux-design" },
//     { curso: "tipografia" },
//   ];
// }

export async function generateStaticParams() {
  const cursos = await getCursos();

  return cursos.map((curso) => {
    curso: curso.slug;
  });
}

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

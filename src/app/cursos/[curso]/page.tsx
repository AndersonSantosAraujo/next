import { getCurso, getCursos } from "@/api/cursos";
import { Metadata } from "next";
import Link from "next/link";

type PageParams = {
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

// export const metadata: Metadata = {
//   title: "Cursos Origamid",
//   description: "Cursos online de Front End e UI Design.",
//   keywords: ["HTML", "CSS", "JavaScript", "UI Design"],
//   authors: [{ name: "Anderson", url: "https://anderson.com" }],
// };

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const curso = await getCurso(params.curso);

  return {
    title: curso.nome,
    description: curso.descricao,
  };
}

export default async function CursoPage({ params }: PageParams) {
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

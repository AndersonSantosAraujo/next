import { AulaProps, getAula, getCurso, getCursos } from "@/api/cursos";
import Link from "next/link";

type PageProps = {
  params: {
    curso: string;
    aula: string;
  };
};

export async function generateStaticParams() {
  const cursos = await getCursos();
  const aulas = await Promise.all(cursos.map((curso) => getCurso(curso.slug)));

  return aulas
    .reduce((acc: AulaProps[], curso) => acc.concat(curso.aulas), [])
    .map((aula) => ({
      curso: cursos.find((curso) => curso.id === aula.curso_id)?.slug,
      aula: aula.slug,
    }));
}

export default async function AulaPage({ params }: PageProps) {
  const data = await getAula(params.curso, params.aula);

  return (
    <div>
      <h1>Aula: {data.nome}</h1>
      <p>Descrição: {data.descricao}</p>
      <p>Temp: {data.tempo}</p>
      <Link href={`/cursos/${params.curso}`}>Voltar</Link>
    </div>
  );
}

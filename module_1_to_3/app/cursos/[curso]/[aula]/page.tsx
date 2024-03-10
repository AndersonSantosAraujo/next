import { getAula } from "@/api/cursos";
import Link from "next/link";

type PageProps = {
  params: {
    curso: string;
    aula: string;
  };
};

export default async function AulaPage({ params }: PageProps) {
  const data = await getAula(params.curso, params.aula);

  return (
    <div>
      <Link href={`/cursos/${params.curso}`}>Voltar</Link>
      <h1>Aula: {data.nome}</h1>
      <p>Descrição: {data.descricao}</p>
      <p>Temp: {data.tempo}</p>
    </div>
  );
}

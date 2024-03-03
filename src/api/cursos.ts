type CursosProps = {
  id: number;
  slug: string;
  nome: string;
  descricao: string;
  total_aulas: number;
  total_horas: number;
};

type AulaProps = {
  id: number;
  slug: string;
  nome: string;
  descricao: string;
  curso_id: number;
  tempo: number;
  ordem: number;
};

type CursoProps = CursosProps & {
  aulas: AulaProps[];
};

const baseURL = "https://api.origamid.online/cursos";

export async function getCursos() {
  const response = await fetch(baseURL);
  const data = (await response.json()) as CursosProps[];

  return data;
}

export async function getCurso(curso: string) {
  const response = await fetch(`${baseURL}/${curso}`);
  const data = (await response.json()) as CursoProps;

  return data;
}

export async function getAula(curso: string, aula: string) {
  const response = await fetch(`${baseURL}/${curso}/${aula}`);
  const data = (await response.json()) as AulaProps;

  return data;
}

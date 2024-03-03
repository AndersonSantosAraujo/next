type PageParams = {
  params: {
    slug: string[];
  };
};

export default function LicoesPage({ params }: PageParams) {
  return (
    <main>
      <h1>Lições</h1>
      {params.slug.join("/")}
    </main>
  );
}

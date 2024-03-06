// <-- SPA -->
"use client";

import { useEffect, useState } from "react";

type Acao = {
  simbolo: string;
  atualizada: string;
};

export default function AcoesPage() {
  const [acao, setAcao] = useState<Acao | null>(null);

  useEffect(() => {
    fetch("https://api.origamid.online/acoes/lua")
      .then((res) => res.json())
      .then((json) => setAcao(json));
  }, []);

  if (acao === null) return null;

  return (
    <main>
      <h1>{acao.simbolo}</h1>
      <h2>{acao.atualizada}</h2>
    </main>
  );
}

// <-- SSR -->
// export default async function AcoesPage() {
//   const response = await fetch("https://api.origamid.online/acoes/lua", {
//     next: {
//       revalidate: 5,
//     },
//   });
//   const acao = (await response.json()) as {
//     simbolo: string;
//     atualizada: string;
//   };

//   return (
//     <main>
//       <h1>{acao.simbolo}</h1>
//       <h2>{acao.atualizada}</h2>
//     </main>
//   );
// }

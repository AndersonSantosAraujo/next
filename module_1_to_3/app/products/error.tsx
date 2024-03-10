"use client";

export default function ProductsError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  // o reset só tenta renderizar o componente novamente
  // não refaz o fetch
  // (função meio inútil)
  return (
    <main>
      <h1>Um erro ocorreu!</h1>
      <p>{error.message}</p>
      <button onClick={() => reset()}>Tente novamente</button>
    </main>
  );
}

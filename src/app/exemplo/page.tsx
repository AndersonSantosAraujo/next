"use client";

import { setCookie } from "@/actions/setCookie";
import { useState } from "react";

export default function ExemploPage() {
  const [value, setValue] = useState("");

  async function handleClick() {
    // Server Action
    const response = await setCookie("segredo", "123456");
    setValue(response.value);

    console.log(response);
  }

  return (
    <main>
      <h1>Exemplo</h1>
      {value && <p>{value}</p>}
      <button onClick={handleClick}>Definir Cookie</button>
    </main>
  );
}

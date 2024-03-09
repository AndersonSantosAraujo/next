"use client";

import addProductAction from "@/actions/addProductAction";
import { useFormState, useFormStatus } from "react-dom";

function Button() {
  const status = useFormStatus();
  return (
    <button type="submit" disabled={status.pending}>
      Adicionar
    </button>
  );
}

export default function AddProductForm() {
  const [state, formAction] = useFormState(addProductAction, {
    errors: [],
  });

  console.log(state);

  return (
    // <form action={addProductAction}>
    <form action={formAction}>
      <label htmlFor="name">Nome</label>
      <input type="text" id="name" name="name" />

      <label htmlFor="price">Preço</label>
      <input type="text" id="price" name="price" />

      <label htmlFor="description">Descrição</label>
      <input type="text" id="description" name="description" />

      <label htmlFor="stock">Estoque</label>
      <input type="text" id="stock" name="stock" />

      <label htmlFor="imported">
        <input type="checkbox" id="imported" name="imported" />
        Importado
      </label>

      {state.errors.map((error, index) => (
        <p style={{ color: "red", fontSize: "14px" }} key={index}>
          {error}
        </p>
      ))}

      <Button />
    </form>
  );
}

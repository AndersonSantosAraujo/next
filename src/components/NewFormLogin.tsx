"use client";

import loginServeAction from "@/actions/loginServeAction";

export default function NewFormLogin() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const elements = e.currentTarget.elements;

    const username = (elements.namedItem("username") as HTMLInputElement).value;
    const password = (elements.namedItem("password") as HTMLInputElement).value;

    const response = await loginServeAction(username, password);

    console.log(response);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Usuário</label>
      <input type="text" id="username" name="username" />

      <label htmlFor="password">Senha</label>
      <input type="password" id="password" name="password" />

      <button type="submit">Login</button>
    </form>
  );
}

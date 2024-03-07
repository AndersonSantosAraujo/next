"use client";

export default function FormLogin() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const elements = e.currentTarget.elements;

    const username = (elements.namedItem("username") as HTMLInputElement).value;
    const password = (elements.namedItem("password") as HTMLInputElement).value;

    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    if (response.ok) window.location.href = "/";
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

"use client";

import loginServeAction from "@/actions/loginServeAction";
import NewFormLogin from "@/components/NewFormLogin";
import Cookie from "@/components/cookie";

export default function NewLoginPage(e: React.FormEvent<HTMLFormElement>) {
  return (
    <main>
      <h1>Novo Login</h1>
      <Cookie />
      <NewFormLogin />
    </main>
  );
}

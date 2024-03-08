"use client";

import getCookie from "@/actions/getCookie";
import { useState } from "react";

export default function Cookie() {
  const [token, setToken] = useState("");

  async function handleClick() {
    const token_ = await getCookie("token");

    if (token_) setToken(token_);

    console.log(token_);
  }

  return (
    <div>
      <h2>Cookie</h2>
      {token && <p>{token}</p>}
      <button onClick={handleClick}>Pegar Cookie</button>
    </div>
  );
}

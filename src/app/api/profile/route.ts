import { cookies } from "next/headers";
import { NextRequest } from "next/server";

export async function GET() {
  const token = cookies().get("token");

  const response = await fetch("https://api.origamid.online/conta/perfil", {
    method: "GET",
    headers: {
      Authorization: "Bearer " + token?.value,
    },
  });

  const data = await response.json();

  return Response.json(data);
}

// Tem que ser dentro de /src e com o nome middleware.ts

import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // nova rota
  if (request.nextUrl.pathname.startsWith("/conta")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // verifica se tem o token e se está tentando entrar em /conta
  const token = request.cookies.get("token")?.value;
  if (!token && request.nextUrl.pathname.startsWith("/conta")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    {
      source: "/((?!api|_next/static|_next/image|favicon.ico).*)",
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },
  ],
};

// export function middleware(request: NextRequest) {
//   const token = request.cookies.get("token")?.value;
//   const response = NextResponse.next();

//   if (!token && request.nextUrl.pathname.startsWith("/conta")) {
//     response.cookies.set("entrouConta", "true", {
//       httpOnly: true,
//     });
//     return response;
//     // return NextResponse.next();
//   } else {
//     return NextResponse.redirect(new URL("/login", request.url));
//   }

//   // console.log(`${request.nextUrl.pathname}`);

//   // return NextResponse.redirect(new URL("/", request.url));
// }

// export const config = {
// matcher: ["/cursos", "/animais"],
// matcher: ["/entrar"],
// ['/cursos'] // rota /cursos
// ['/cursos', '/login'] // rota /cursos e /login
// ['/cursos/:path*'] // todas as rotas que começam com /cursos
// ['/(.*)'] ou ['/:path*'] // todas as rotas que começam com /
// ['/((?!api|_next|static|public|favicon.ico).*)'] // todas as rotas que não começam com /api, /_next, /static, /public, /favicon.ico -> Negative Look Ahead

//   matcher: ["/conta"],
// };

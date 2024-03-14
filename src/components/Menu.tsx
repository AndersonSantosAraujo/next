"use client";

import Link from "next/link";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { Suspense, useEffect } from "react";

export default function Menu() {
  // const params = useParams();
  // const pathName = usePathname();
  // const router = useRouter();

  // console.log(pathName);

  // useEffect(() => {
  //   console.log("Rota mudou!");
  // }, [pathName]);

  // useEffect(() => {
  // setTimeout(() => {
  //   router.push("/");
  // }, 5000);
  // setInterval(() => {
  //   router.refresh();
  // }, 5000);
  // }, [router]);

  function Search() {
    const searchParams = useSearchParams();
    const busca = searchParams.get("busca");
    return <div>Busca: {busca}</div>;
  }

  return (
    <>
      <Suspense>
        {/* <Search /> precisa ser envolvido por um <Suspense> */}
        <Search />
      </Suspense>
      <ul className="menu">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/cursos">Cursos</Link>
        </li>
        <li>
          <Link href="/animais">Animais</Link>
        </li>
      </ul>
    </>
  );
}

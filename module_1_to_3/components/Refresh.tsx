"use client";

import {
  revalidatePathAction,
  revalidateTagAction,
} from "@/actions/revalidatePath";
import { useEffect } from "react";

export default function Refresh() {
  function handleClick() {
    // revalidatePathAction("/cache");
    revalidateTagAction("acoes");
  }

  // useEffect(() => {
  //   const intervalID = setInterval(() => {
  //     revalidatePathAction("/cache");
  //   }, 5000);

  //   return () => {
  //     clearInterval(intervalID);
  //   };
  // }, []);

  return <button onClick={handleClick}>Atualizar</button>;
}

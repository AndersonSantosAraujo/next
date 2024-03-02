import Acesso from "@/components/Acesso"; // server component
//import Width from "@/components/Width"; // client component
import dynamic from "next/dynamic";

const Width = dynamic(() => import("@/components/Acesso"), { ssr: false });

export default function SobrePage() {
  return (
    <main>
      <h2>Sobre</h2>
      <Width />
      <Acesso />
    </main>
  );
}

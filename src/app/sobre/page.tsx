// import Access from "@/components/Access"; // server component
//import Width from "@/components/Width"; // client component
// import dynamic from "next/dynamic";

import ClientFetch from "@/components/ClientFetch";

// const Width = dynamic(() => import("@/components/Access"), { ssr: false });

export default function SobrePage() {
  return (
    <main>
      <h2>Sobre</h2>
      <ClientFetch />
      {/* <Width />
      <Access /> */}
    </main>
  );
}

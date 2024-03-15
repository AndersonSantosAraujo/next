import Script from "next/script";

export default async function HomePage() {
  return (
    <main>
      <h1>Home</h1>
      <Script
        id="script-legal"
        src="https://api.origamid.online/scripts/idade-legal.min.js"
        strategy="afterInteractive"
      />
      <Script id="script-test">{`console.log('Teste')`}</Script>
    </main>
  );
}

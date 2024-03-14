import Image from "next/image";
import styles from "./animais.module.css";

type Animal = {
  id: number;
  nome: string;
  descricao: string;
  imagem: string;
};

export default async function AnimaisPage() {
  const response = await fetch("https://api.origamid.online/animais", {
    cache: "no-store",
  });
  const animais = (await response.json()) as Animal[];

  return (
    <main>
      <Image
        src="/images/dogs.svg"
        alt="Marca Dogs"
        width={28}
        height={22}
        priority
      />
      <Image
        src="/images/login.jpg"
        alt="Dogs"
        width={1200}
        height={1600}
        sizes="100vw"
        priority
      />

      <h1>Animais</h1>
      <ul className={styles.animais}>
        {animais.map(({ id, nome, imagem, descricao }, index) => (
          <li key={id}>
            <h2>{nome}</h2>
            <Image
              src={imagem}
              width={2400}
              height={1600}
              alt={descricao}
              quality={80}
              sizes="(max-width: 600px) 100vw, 50vw"
              priority={index < 2}
            />
          </li>
        ))}
      </ul>
    </main>
  );
}

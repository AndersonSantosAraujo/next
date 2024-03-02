"use client";

import { useState } from "react";

export default function IMC() {
  const [height, setHeight] = useState(0);
  const [weight, setWeigth] = useState(0);
  const [imc, setImc] = useState("");
  const [situation, setSituation] = useState("");

  function handleClick() {
    const heightMeter = height / 100;
    const total = (weight / (heightMeter * heightMeter)).toFixed(2);
    setImc(total);

    if (Number(total) < 17) setSituation("Muito abaixo do peso");
    if (Number(total) >= 17 && Number(total) < 18.5)
      setSituation("Abaixo do peso");
    if (Number(total) >= 18.5 && Number(total) < 25)
      setSituation("Peso normal");
    if (Number(total) >= 25 && Number(total) < 30)
      setSituation("Acima do peso");
    if (Number(total) >= 30 && Number(total) < 35) setSituation("Obesidade I");
    if (Number(total) >= 35 && Number(total) < 40)
      setSituation("Obesidade II (severa)");
    if (Number(total) >= 40) setSituation("Obesidade III (mórbida)");
  }

  return (
    <div>
      <label htmlFor="peso">Peso (em kg)</label>
      <input
        type="number"
        id="peso"
        name="peso"
        value={weight}
        onChange={({ target }) => setWeigth(Number(target.value))}
      />

      <label htmlFor="altura">Altura (em cm)</label>
      <input
        type="number"
        id="altura"
        name="altura"
        value={height}
        onChange={({ target }) => setHeight(Number(target.value))}
      />

      <button onClick={handleClick}>Calcular</button>

      <p>
        <span>IMC: </span>
        {imc}
      </p>

      <p>
        <span>Situação: </span>
        {situation}
      </p>
    </div>
  );
}

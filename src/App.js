import { useState } from "react";
import "./style.scss"

export default function App() {
  const [primeiroValor, setPrimeiroValor] = useState();
  const [segundoValor, setSegundoValor] = useState();
  const [resultado, setResultado] = useState();

  const capturandoPrimeiroValor = (e) => {
    setPrimeiroValor(Number(e.target.value));
    console.log(e.target.value);
  };

  const capturandoSegundoValor = (e) => {
    setSegundoValor(Number(e.target.value));
    console.log(e.target.value);
  };

  const soma = () => {
    setResultado(primeiroValor + segundoValor);
  };

  const subtracao = () => {
    setResultado(primeiroValor - segundoValor);
  };
  return (
    <main>
      <h1>Calculadora</h1>
      {/* onChange evento de mudança */}
      <input
        type="number"
        placeholder="Insira um número"
        onChange={capturandoPrimeiroValor}
      />
      <input placeholder="Insira um número" onChange={capturandoSegundoValor} />
      <button onClick={soma}>+</button>
      <button onClick={subtracao}>-</button>
      <button>x</button>
      <button>/</button>
      <h3>{resultado}</h3>
    </main>
  );
}

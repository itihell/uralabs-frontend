"use client";

import { useState } from "react";

export default function RolesPage() {
  let [numero1, setNumero1] = useState(0);
  let [numero2, setNumero2] = useState(0);
  let [resultado, setResultado] = useState(0);
  const sumarDosNumeros = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setResultado(numero1 + numero2);
  };
  return (
    <form className="" onSubmit={sumarDosNumeros}>
      <div className="h-auto">
        <h1>Listado de roles</h1>
        <div className="flex flex-row">
          <label className="basis-3/12 text-right">Número 1</label>
          <div className="basis-9/12 ml-1">
            <input
              className="p-1"
              type="number"
              name="numero1"
              id="numero1"
              value={String(numero1)}
              onChange={(e) => setNumero1(parseInt(e.target.value))}
            />
          </div>
        </div>
        <div className="flex flex-row mt-2">
          <label className="basis-3/12 text-right">Número 2</label>
          <div className="basis-9/12 ml-1">
            <input
              className="p-1"
              type="number"
              name="numero2"
              id="numero2"
              value={String(numero2)}
              onChange={(e) => setNumero2(parseInt(e.target.value))}
            />
          </div>
        </div>
        <div className="flex flex-row mt-2">
          <button type="submit" className="bg-blue-500 text-white p-1">
            Sumar
          </button>
        </div>
        <div className="flex flex-row mt-2">
          <label className="basis-auto text-right">
            El resultado es {resultado}
          </label>
        </div>
      </div>
    </form>
  );
}

import Link from "next/link";
import React from "react";

export default function HorasPracticas() {
  return (
    <div className="min-h-screen flex flex-col  items-center">
      <h1 className="text-center text-3xl mb-6">Horas Prácticas</h1>
      <div className="flex space-x-4">
        {/* Botón para ir a Practicante */}
        <Link href="/horas-practicas/practicante">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition duration-300 ease-in-out">
            Agregar Practicante
          </button>
        </Link>
        {/* Botón para ir a Corte de Prácticas */}
        <Link href="/horas-practicas/corte-practicas">
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition duration-300 ease-in-out">
            Agregar Corte de Prácticas
          </button>
        </Link>
      </div>
    </div>
  );
}

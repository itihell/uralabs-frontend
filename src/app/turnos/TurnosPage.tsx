"use client";
import { ChangeEvent, useEffect, useState } from "react";

interface Turno {
  id: number;
  name: string;
}

const Turnos = (): JSX.Element => {
  const [turnos, setTurnos] = useState<Turno[]>([]);
  const [nuevoTurno, setNuevoTurno] = useState<string>("");

  // Obtener la lista de turnos al cargar la página
  useEffect(() => {
    const fetchTurnos = async () => {
      try {
        const response = await fetch("http://localhost:5003/turnos");
        const data: Turno[] = await response.json();
        setTurnos(data);
      } catch (error) {
        console.error("Error fetching turnos:", error);
      }
    };

    fetchTurnos();
  }, []);

  // Función para agregar un nuevo turno
  const handleAgregarTurno = async () => {
    try {
      const response = await fetch("http://localhost:5003/turnos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: nuevoTurno }),
      });

      const nuevoTurnoData: Turno = await response.json();

      setTurnos([...turnos, nuevoTurnoData]);
      setNuevoTurno("");
    } catch (error) {
      console.error("Error adding turno:", error);
    }
  };

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-bold mb-4">Turnos</h1>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Nombre</th>
          </tr>
        </thead>
        <tbody>
          {turnos.map((turno) => (
            <tr key={turno.id}>
              <td className="py-2 px-4 border-b">{turno.id}</td>
              <td className="py-2 px-4 border-b">{turno.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4">
        <input
          type="text"
          value={nuevoTurno}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setNuevoTurno(e.target.value)
          }
          className="p-2 border border-gray-300 mr-2"
        />
        <button
          onClick={handleAgregarTurno}
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Agregar Turno
        </button>
      </div>
    </div>
  );
};

export default Turnos;

"use client";
import { useEffect, useState } from "react";
import { getPracticante } from "../../actions/post/save-practicantes";

interface Practicante {
  id: number;
  nombre: string;
}
export default function FieldsCortePracticas({ corte }: { corte: any }) {
  const [corteData, setCorteData] = useState(corte);
  const handlerChange = (e: any) => {
    const { name, value } = e.target;
    setCorteData({
      ...corteData,
      [name]: value,
    });
  };

  const [practicantes, setPracticantes] = useState<Practicante[]>([]);
  const [practicanteSeleccionado, setPracticanteSeleccionado] = useState("");

  useEffect(() => {
    async function fetchPracticantes() {
      try {
        const id = corte?.practicante || "";
        const data = await getPracticante(id);
        setPracticantes(data); // Establece la lista de practicantes en el estado
      } catch (error) {
        console.error("Error al obtener los practicantes", error);
      }
    }

    fetchPracticantes();
  }, []);
  const handler_Change = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPracticanteSeleccionado(e.target.value);
  };
  return (
    <div className="flex flex-col justify-center sm:py-5">
      <div className="bg-white shadow-md rounded-lg px-2 py-1 text-gray-700 flex flex-wrap justify-center sm:justify-between">
        <input type="hidden" id="id" name="id" defaultValue={corte?.id || ""} />
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 p-1">
          <label
            htmlFor="practicante"
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          >
            Practicante
          </label>
          <select
            name="practicante"
            id="practicante"
            value={practicanteSeleccionado}
            onChange={handler_Change}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-full"
          >
            <option value="">Seleccione un practicante</option>
            {practicantes.map((practicante, index) => (
              <option key={index} value={practicante.nombre}>
                {practicante.nombre}
              </option>
            ))}
          </select>
        </div>

        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 p-1">
          <label
            htmlFor="fecha_corte"
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          >
            Fecha Corte
          </label>
          <input
            type="date"
            name="fecha_corte"
            id="fecha_corte"
            defaultValue={corte?.fecha_corte || ""}
            onChange={handlerChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-full"
          />
        </div>
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 p-1">
          <label
            htmlFor="horas_actuales"
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          >
            Horas Actuales
          </label>
          <input
            type="number"
            name="horas_actuales"
            id="horas_actuales"
            defaultValue={corte?.horas_actuales || ""}
            onChange={handlerChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-full"
          />
        </div>
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 p-1">
          <label
            htmlFor="horas_anteriores"
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          >
            Horas anteriores
          </label>
          <input
            type="number"
            name="horas_anteriores"
            id="horas_anteriores"
            defaultValue={corte?.horas_anteriores || ""}
            onChange={handlerChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-full"
          />
        </div>
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 p-1">
          <label
            htmlFor="horas_totales"
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          >
            Horas totales
          </label>
          <input
            type="number"
            name="horas_totales"
            id="horas_totales"
            defaultValue={corte?.horas_totales || ""}
            onChange={handlerChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-full"
          />
        </div>
      </div>
    </div>
  );
}

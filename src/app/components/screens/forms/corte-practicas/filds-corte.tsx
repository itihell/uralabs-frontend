"use client";
import { useState } from "react";

export default function FieldsCortePracticas({ corte }: { corte: any }) {
  const [corteData, setCorteData] = useState(corte);
  const handlerChange = (e: any) => {
    const { name, value } = e.target;
    setCorteData({
      ...corteData,
      [name]: value,
    });
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
          <input
            type="text"
            name="practicante"
            id="practicante"
            defaultValue={corte?.practicante || ""}
            onChange={handlerChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-full"
          />
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

"use client";
import { useState } from "react";

export default function FieldsPracticantes({
  practicante,
}: {
  practicante: any;
}) {
  const [practicanteData, setPracticanteData] = useState(practicante);

  const handlerChange = (e: any) => {
    const { name, value } = e.target;

    setPracticanteData({
      ...practicanteData,
      [name]: value,
    });
  };

  return (
    <div
      className="
        flex flex-col
        justify-center
        sm:py-5
    "
    >
      <div
        className="bg-white shadow-md rounded-lg px-2 py-1 text-gray-700
        flex flex-wrap
        justify-center
        sm:justify-between
      "
      >
        <input
          type="hidden"
          id="id"
          name="id"
          defaultValue={practicante?.id || ""}
        />

        <div
          className="w-full md:w-1/2 px-3 mb-6 md:mb-0 
          p-1
        "
        >
          <label
            htmlFor="nombre"
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          >
            Nombre
          </label>
          <input
            type="text"
            name="nombre"
            id="nombre"
            defaultValue={practicante?.nombre || ""}
            onChange={handlerChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-full"
          />
        </div>

        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 p-1">
          <label
            htmlFor="carrera"
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          >
            Carrera
          </label>
          <input
            type="text"
            name="carrera"
            id="carrera"
            defaultValue={practicante?.carrera || ""}
            onChange={handlerChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-full"
          />
        </div>

        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 p-1">
          <label
            htmlFor="fecha_inicio"
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          >
            Fecha de Inicio
          </label>
          <input
            type="date"
            name="fecha_inicio"
            id="fecha_inicio"
            defaultValue={practicante?.fecha_inicio || ""}
            onChange={handlerChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-full"
          />
        </div>

        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 p-1">
          <label
            htmlFor="fecha_fin"
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          >
            Fecha de Fin
          </label>
          <input
            type="date"
            name="fecha_fin"
            id="fecha_fin"
            defaultValue={practicante?.fecha_fin || ""}
            onChange={handlerChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-full"
          />
        </div>

        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 p-1">
          <label
            htmlFor="cantidad_horas"
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          >
            Cantidad de Horas
          </label>
          <input
            type="number"
            name="cantidad_horas"
            id="cantidad_horas"
            defaultValue={practicante?.cantidad_horas || ""}
            onChange={handlerChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-full"
          />
        </div>
      </div>
    </div>
  );
}

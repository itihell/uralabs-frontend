"use client";
import { getCarreras } from "@/app/actions/post/save-carreras";
import { useEffect, useState } from "react";

interface Carrera {
  id: number;
  nombre: string;
}
export default function FieldsPracticantes({ fields }: { fields: any }) {
  const [fieldsData, setFieldsData] = useState(fields);

  const handlerChange = (e: any) => {
    const { name, value } = e.target;

    setFieldsData({
      ...fieldsData,
      [name]: value,
    });
  };

  const [carreras, setCarreras] = useState<Carrera[]>([]);
  const [carreraSeleccionada, setCarreraSeleccionada] = useState("");

  useEffect(() => {
    async function fetchCarreras() {
      try {
        const id = fields?.carrera || "";
        const data = await getCarreras(id);
        setCarreras(data); // Establece la lista de carreras en el estado
      } catch (error) {
        console.error("Error al obtener las carreras", error);
      }
    }

    fetchCarreras();
  }, []);
  const handler_Change = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCarreraSeleccionada(e.target.value);
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
          defaultValue={fields?.id || ""}
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
            defaultValue={fields?.nombre || ""}
            onChange={handlerChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-full"
          />
        </div>

        <div
          className="w-full md:w-1/2 px-3 mb-6 md:mb-0 
          p-1
        "
        >
          <label
            htmlFor="carrera"
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          >
            Carrera
          </label>
          <select
            name="carrera"
            id="carrera"
            value={carreraSeleccionada}
            onChange={handler_Change}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-full"
          >
            <option value="">Selecciona una carrera</option>
            {carreras.map((carrera, index) => (
              <option key={index} value={carrera.nombre}>
                {carrera.nombre}
              </option>
            ))}
          </select>
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
            defaultValue={fields?.fecha_inicio || ""}
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
            defaultValue={fields?.fecha_fin || ""}
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
            defaultValue={fields?.cantidad_horas || ""}
            onChange={handlerChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-full"
          />
        </div>
      </div>
    </div>
  );
}

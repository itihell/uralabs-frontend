"use client";
import { useState, useEffect } from "react";
import { getAllCarreras, getAllLaboratorio, getAllModalidades } from "../../../actions/post/save-labUse";

export default function FieldsLabuse({ usoLaboratorios }: { usoLaboratorios: any }) {

  const [carreras, setCarreras] = useState([]);
  const [modalidades, setModalidades] = useState([]);
  const [laboratorios, setLaboratorios] = useState([]);
  const [usoLaboratorio, setUsoLaboratorios] = useState(usoLaboratorios);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const carrerasData = await getAllCarreras();
        const modalidadesData = await getAllModalidades();
        const laboratoriosData = await getAllLaboratorio();
        setCarreras(carrerasData);
        setModalidades(modalidadesData);
        setLaboratorios(laboratoriosData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Se ejecutará una vez al montar el componente

  const handlerChange = (e: any) => {
    const { data, value } = e.target;

    setUsoLaboratorios({
      ...usoLaboratorio,
      [data]: value,
    });
  };


  return (
    <>
      {/* <input type="hidden" id="id" name="id" defaultValue={usoLaboratorios?.id || ""} /> */}

      <div>
        <label htmlFor="className" className="block mb-4 text-sm font-medium text-gray-900 dark:text-black">Nombre de la Clase</label>
      </div>
      <div className="mb-6">
        <input
          type="text"
          name="className"
          id="className"
          defaultValue={usoLaboratorios.className || ""}
          onChange={handlerChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div className="mb-6">
        <div>
          <label htmlFor="carrera" className="block mb-4 text-sm font-medium text-gray-900 dark:text-black">Carrera</label>
        </div>
        <select
          id="carrera"
          name="carrera"
          onChange={handlerChange}
          className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="carrera">
            Seleccionar Carrera
          </option>
          {carreras.map((carrera: any) => (
            <option key={carrera.id} value={carrera.id} >
              {carrera.nombre}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="teacher" className="block mb-4 text-sm font-medium text-gray-900 dark:text-black">Docente</label>
      </div>
      <div className="mb-6">
        <input
          type="text"
          name="teacher"
          id="teacher"
          defaultValue={usoLaboratorios?.teacher || ""}
          onChange={handlerChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div>
        <label htmlFor="date" className="block mb-4 text-sm font-medium text-gray-900 dark:text-black">Fecha</label>
      </div>
      <div className="mb-6">
        <input
          type="date"
          name="date"
          id="date"
          defaultValue={usoLaboratorios?.date || ""}
          onChange={handlerChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div>
        <label htmlFor="modality" className="block mb-4 text-sm font-medium text-gray-900 dark:text-black">Modalidad</label>
      </div>
      <div className="mb-6">
        <select
          id="modality"
          name="modality"
          onChange={handlerChange}
          className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="modality">
            Seleccionar Modalidad
          </option>
          {modalidades.map((modalidad: any) => (
            <option key={modalidad.id} value={modalidad.id} >
              {modalidad.modalidad}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="shift" className="block mb-4 text-sm font-medium text-gray-900 dark:text-black">Turno</label>
      </div>
      <div className="mb-6">
        <input
          type="text"
          name="shift"
          id="shift"
          defaultValue={usoLaboratorios?.shift || ""}
          onChange={handlerChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div>
        <label htmlFor="year" className="block mb-4 text-sm font-medium text-gray-900 dark:text-black">Año</label>
      </div>
      <div className="mb-6">
        <input
          type="text"
          name="year"
          id="year"
          defaultValue={usoLaboratorios?.year || ""}
          onChange={handlerChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div>
        <label htmlFor="semester" className="block mb-4 text-sm font-medium text-gray-900 dark:text-black">Semestre</label>
      </div>
      <div className="mb-6">
        <input
          type="text"
          name="semester"
          id="semester"
          defaultValue={usoLaboratorios?.semester || ""}
          onChange={handlerChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div>
        <label htmlFor="female" className="block mb-4 text-sm font-medium text-gray-900 dark:text-black">Mujeres</label>
      </div>
      <div className="mb-6">
        <input
          type="text"
          name="female"
          id="female"
          defaultValue={usoLaboratorios?.female || ""}
          onChange={handlerChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div>
        <label htmlFor="male" className="block mb-4 text-sm font-medium text-gray-900 dark:text-black">Varones</label>
      </div>
      <div className="mb-6">
        <input
          type="text"
          name="male"
          id="male"
          defaultValue={usoLaboratorios?.male || ""}
          onChange={handlerChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div>
        <label htmlFor="total" className="block mb-4 text-sm font-medium text-gray-900 dark:text-black">Total</label>
      </div>
      <div className="mb-6">
        <input
          type="text"
          name="total"
          id="total"
          defaultValue={usoLaboratorios?.total || ""}
          onChange={handlerChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div>
        <label htmlFor="hours" className="block mb-4 text-sm font-medium text-gray-900 dark:text-black">Horas</label>
      </div>
      <div className="mb-6">
        <input
          type="text"
          name="hours"
          id="hours"
          defaultValue={usoLaboratorios?.hours || ""}
          onChange={handlerChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="laboratorio" className="block mb-4 text-sm font-medium text-gray-900 dark:text-black">Laboratorio</label>
        <select
          id="laboratorio"
          name="laboratorio"
          className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={handlerChange}
          defaultValue={usoLaboratorios?.id} // Asegúrate de tener una variable para almacenar el valor seleccionado, por ejemplo, selectedLabId
        >
          <option value="laboratorio">
            Seleccionar Laboratorio
          </option>
          {laboratorios.map((laboratorio: any) => (
            <option key={laboratorio.id} value={laboratorio.id}>
              {laboratorio.labName}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}

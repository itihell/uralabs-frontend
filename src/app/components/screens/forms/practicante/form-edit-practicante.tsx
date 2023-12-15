"use client";
import { setterData } from "@/app/interfaces/setter-interfaces";
import Practicante from "./interface/practicante";
import { useEffect, useState } from "react";
import { Input, Switch } from "@nextui-org/react";
import { getAllCarreras } from "@/app/actions/post/save-carreras";

interface FormEditPracticanteProps {
  practicante?: Practicante;
  onChangePracticante: (data: setterData) => void;
}

export default function FormEditPracticante(
  { practicante, onChangePracticante }: FormEditPracticanteProps = {
    practicante: {} as Practicante,
    onChangePracticante: () => {},
  }
) {
  const [fields, setFields] = useState<Practicante>({} as Practicante);
  const handleChangePracticante = ({ clave, valor }: setterData) => {
    setFields({ ...fields, [clave]: valor });
    onChangePracticante({ clave, valor });

    console.log(fields);
  };

  useEffect(() => {
    if (practicante) {
      setFields(practicante || ({} as Practicante));
    }
  }, [practicante]);

  const [carrera, setCarrera] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllCarreras();
        setCarrera(data);
      } catch (error) {
        console.error(`Error: ${error}`);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <div className="w-full flex flex-col gap-4">
        <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
          <Input
            size="sm"
            type="text"
            label="Nombres"
            name="nombres"
            placeholder="Escriba un nombre..."
            defaultValue={practicante?.nombres}
            onChange={(e) => {
              const data: setterData = {
                clave: e.target.name,
                valor: e.target.value,
              };
              handleChangePracticante(data);
            }}
          />
        </div>
        <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
          <Input
            size="sm"
            type="text"
            label="Apellidos"
            name="apellidos"
            placeholder="Escriba un nombre..."
            defaultValue={practicante?.apellidos}
            onChange={(e) => {
              const data: setterData = {
                clave: e.target.name,
                valor: e.target.value,
              };
              handleChangePracticante(data);
            }}
          />
        </div>
        <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
          <Input
            size="sm"
            type="date"
            label="Fecha inicio"
            placeholder="Fecha inicio del practicante"
            defaultValue={practicante?.fecha_inicio}
            onChange={(e) => {
              const data: setterData = {
                clave: e.target.name,
                valor: e.target.value,
              };
              handleChangePracticante(data);
            }}
          />
        </div>
        <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
          <Input
            size="sm"
            type="date"
            label="Fecha fin"
            placeholder="Fecha inicio del practicante"
            defaultValue={practicante?.fecha_fin}
            onChange={(e) => {
              const data: setterData = {
                clave: e.target.name,
                valor: e.target.value,
              };
              handleChangePracticante(data);
            }}
          />
        </div>
        <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
          <select
            id="carreraId"
            name="carreraId"
            className="appearance-none block w-full bg-[#27272A] text-gray-100 border-0  rounded-small py-4 px-4 mb-3 leading-tight hover:bg-[#3F3F46] focus:bg-[#3F3F46] focus:outline-none"
            onChange={(e) => {
              const data: setterData = {
                clave: e.target.name,
                valor: parseInt(e.target.value, 10) || 0,
              };
              handleChangePracticante(data);
            }}
          >
            <option value="">Seleccione una carrera</option>
            {carrera &&
              carrera.map((carrera: any) => (
                <option key={carrera.id} value={carrera.id}>
                  {carrera.nombre}
                </option>
              ))}
          </select>
        </div>

        <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
          <input
            type="number"
            name="cantidad_horas"
            className="appearance-none block w-full bg-[#27272A] text-gray-100 border-0 rounded-small py-4 px-4 mb-3 leading-tight hover:bg-[#3F3F46] focus:bg-[#3F3F46] focus:outline-none"
            id="cantidad_horas"
            placeholder="Cantidad de horas del practicante"
            defaultValue={practicante?.cantidad_horas || 0}
            onChange={(e) => {
              const data: setterData = {
                clave: e.target.name,
                valor: parseInt(e.target.value, 10) || 0,
              };
              handleChangePracticante(data);
            }}
          />
        </div>
      </div>
    </div>
  );
}

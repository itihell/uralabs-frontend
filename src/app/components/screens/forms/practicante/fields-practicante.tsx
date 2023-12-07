import { useEffect, useState } from "react";
import Practicante from "./interface/practicante";
import { Input, Select } from "@nextui-org/react";
import { setterData } from "@/app/interfaces/setter-interfaces";
import { getCareers } from "@/app/reservations/utils/api";

interface FieldsPracticanteProps {
  practicante?: Practicante;
  onChangePracticante: (data: setterData) => void;
}

export default function FieldsPracticantes(
  { practicante, onChangePracticante }: FieldsPracticanteProps = {
    practicante: {} as Practicante,
    onChangePracticante: () => {},
  }
) {


  const [fields, setFields] = useState<Practicante>({} as Practicante);
  const handleChangePracticante = ({ clave, valor }: setterData) => {
    setFields({ ...fields, [clave]: valor });
    onChangePracticante({ clave, valor });
  };
  useEffect(() => {
    if (practicante) {
      setFields(practicante || ({} as Practicante));
    }
  }, [practicante]);

  //obtener las carreras de la base de datos 
  const [careers, setCareers] = useState([]);
  useEffect(() => {
    const loadCareers = async () => {
      const { data } = await getCareers();
      setCareers(data);
    };
    loadCareers();
  }, []);

    
  return (
    <div>
      <div
        className="
        w-full flex flex-col
      "
      >
        <div
          className="
          w-full flex flex-col
          
        "
        >
          <Input
            className="mb-2"
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
          <Input
            className="mb-2"
            size="sm"
            type="text"
            label="Apellidos"
            name="apellidos"
            placeholder="Escriba un apellido..."
            defaultValue={practicante?.apellidos}
            onChange={(e) => {
              const data: setterData = {
                clave: e.target.name,
                valor: e.target.value,
              };
              handleChangePracticante(data);
            }}
          />
          <Select
            className="mb-2"
            size="sm"
            label="Carrera"
            name="carreraId"
            placeholder="Seleccione una carrera..."
            defaultValue={practicante?.carreraId}
            onChange={(e) => {
              const data: setterData = {
                clave: e.target.name,
                valor: e.target.value,
              };
              handleChangePracticante(data);
            }}
          >
            {careers.map((career: CarreraInterface) => (
              <Select.Option key={career.id} value={career.id}>
                {career.nombre}
              </Select.Option>
            ))}
          </Select>
            
          <Input
            className="mb-2"
            size="sm"
            type="date"
            label="fecha de inicio"
            name="fecha_inicio"
            placeholder="Escriba una fecha de inicio..."
            defaultValue={practicante?.fecha_inicio}
            onChange={(e) => {
              const data: setterData = {
                clave: e.target.name,
                valor: e.target.value,
              };
              handleChangePracticante(data);
            }}
          />
          <Input
            className="mb-2"
            size="sm"
            type="date"
            label="fecha de fin"
            name="fecha_fin"
            placeholder="Escriba una fecha de fin..."
            defaultValue={practicante?.fecha_fin}
            onChange={(e) => {
              const data: setterData = {
                clave: e.target.name,
                valor: e.target.value,
              };
              handleChangePracticante(data);
            }}
          />

          <Input
            className="mb-2"
            size="sm"
            type="number"
            label="cantidad de horas"
            name="cantidad_horas"
            placeholder="Escriba las horas..."
            defaultValue={practicante?.cantidad_horas}
            onChange={(e) => {
              const data: setterData = {
                clave: e.target.name,
                valor: e.target.value,
              };
              handleChangePracticante(data);
            }}
          />
        </div>
      </div>
    </div>
  );
}

function obtenerInstitucionId() {
  throw new Error("Function not implemented.");
}

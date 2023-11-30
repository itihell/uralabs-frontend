import { getCarreras } from "@/app/actions/post/save-carreras";
import { useEffect, useState } from "react";
import Practicante from "./interface/practicante";
import { Input, Select } from "@nextui-org/react";
import { setterData } from "@/app/interfaces/setter-interfaces";

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

  const [carreras, setCarreras] = useState([]);
  const [carrera, setCarrera] = useState("");
  
  // Obtener carreras para el select
  useEffect(() => {
    const obtenerCarreras = async () => {
      try {
        
        const institucionId = obtenerInstitucionId();
        const carrerasData = await getCarreras(institucionId);
        setCarreras(carrerasData);
      } catch (error) {
        console.error("Error al obtener las carreras:", error);
      }
    };
  
    obtenerCarreras();
  }, []);

  useEffect(() => {
    if (practicante) {
      setFields(practicante || ({} as Practicante));
    }
  }, [practicante]);

  return (
    <div>
      <div className="
        w-full flex flex-col
      ">
        <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
          <Input
            
            type="text"
            label="Nombre"
            name="nombre"
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
            size="sm"
            type="text"
            label="Apellido"
            name="apellido"
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
            size="sm"
            label="Carrera"
            placeholder="Seleccione una carrera"
            onChange={(e) => {
              const data: setterData = {
                clave: e.target.name,
                valor: e.target.value,
              };
              handleChangePracticante(data);
              setCarrera(e.target.value);
            }}
            name="carrera"
            defaultValue={practicante?.carrera}
          />
          <Input
            size="sm"
            type="text"
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
            size="sm"
            type="text"
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
            size="sm"
            type="text"
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
         
) }

function obtenerInstitucionId() {
  throw new Error("Function not implemented.");
}


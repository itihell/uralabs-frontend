import { useEffect, useState } from "react";
import Practicante from "./interface/practicante";
import { Input, Select } from "@nextui-org/react";
import { setterData } from "@/app/interfaces/setter-interfaces";
import { getAllCarreras } from "@/app/actions/post/save-carreras";
interface FieldsPracticanteProps {
  practicante?: Practicante;
  onChangePracticante: (data: setterData) => void;
}
export default function FieldsPracticantes(
  { practicante, onChangePracticante }: FieldsPracticanteProps = {
    practicante: {} as Practicante,
    onChangePracticante: (data: setterData) => {},
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

  const [carrera, setCarrera] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const  data  = await getAllCarreras();
        setCarrera(data);
      } catch (error) {
        console.error(`Error: ${error}`);
      }
    };
    fetchData();
  }, []);

  console.log(`Carrera: ${carrera}`);
  return (
    <div>
      <div className="w-full flex flex-col">
        <div className="w-full flex flex-col gap-1">
          <div className="w-full flex flex-col gap-1">
            <label className="text-sm font-semibold text-gray-700">
              Nombres
            </label>
            <Input
              size="sm"
              type="text"
              label="Nombres"
              placeholder="Nombres del practicante"
              defaultValue={practicante?.nombres}
              onChange={(e) => {
                const data: setterData = {
                  clave: "nombres",
                  valor: e.target.value,
                };
                handleChangePracticante(data);
              }}
            />
          </div>
          <div className="w-full flex flex-col gap-1">
            <label className="text-sm font-semibold text-gray-700">
              Apellidos
            </label>
            <Input
              size="sm"
              type="text"
              label="Apellidos"
              placeholder="Apellidos del practicante"
              defaultValue={practicante?.apellidos}
              onChange={(e) => {
                const data: setterData = {
                  clave: "apellidos",
                  valor: e.target.value,
                };
                handleChangePracticante(data);
              }}
            />
          </div>
          <div className="w-full flex flex-col gap-1">
            <label className="text-sm font-semibold text-gray-700">
              Fecha inicio
            </label>
            <Input
              size="sm"
              type="date"
              label="Fecha inicio"
              placeholder="Fecha inicio del practicante"
              defaultValue={practicante?.fecha_inicio}
              onChange={(e) => {
                const data: setterData = {
                  clave: "fecha_inicio",
                  valor: e.target.value,
                };
                handleChangePracticante(data);
              }}
            />
          </div>
          <div className="w-full flex flex-col gap-1">
            <label className="text-sm font-semibold text-gray-700">
              Carrera
            </label>
            <select
              id="carrera"
              name="carrera"
              className="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline"
              onChange={(e) => {
                const data: setterData = {
                  clave: "carrera",
                  valor: e.target.value,
                };
                handleChangePracticante(data);
              }}
            >
              <option value="carrera">Seleccione una carrera</option>
              {carrera &&
                carrera.map((carrera: any) => (
                  <option key={carrera.id} value={carrera.id}>
                    {carrera.nombre}
                  </option>
                ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
import { Carrera } from "@/app/interfaces/carreras-interfaces";
import { setterData } from "@/app/interfaces/setter-interfaces";
import { Input, Switch } from "@nextui-org/react";
import { useEffect, useState } from "react";

interface FieldsCarrerasProps {
  carrera?: Carrera;
  onChangeCarrera: (data: setterData) => void;
}

export default function FieldsCarreras(
  { carrera, onChangeCarrera }: FieldsCarrerasProps = {
    carrera: {} as Carrera,
    onChangeCarrera: () => { },
  }
) {
  const [fields, setFields] = useState<Carrera>({} as Carrera);
  const handleChangeCarrera = ({ clave, valor }: setterData) => {
    setFields({ ...fields, [clave]: valor });
    onChangeCarrera({ clave, valor });
  };
  useEffect(() => {
    if (carrera) {
      setFields(carrera || ({} as Carrera));
    }
  }, [carrera]);

  return (
    <div>
      <div className="w-full flex flex-col gap-4">
        <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
          <Input
            size="sm"
            type="text"
            label="Carrera"
            name="carrera"
            placeholder="Escriba una carrera..."
            defaultValue={carrera?.carrera}
            onChange={(e) => {
              const data: setterData = {
                clave: e.target.name,
                valor: e.target.value,
              };
              handleChangeCarrera(data);
            }}
          />
        </div>
      </div>
      <div className="w-full flex flex-col gap-4 mt-2">
        <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
          <Switch
            name="is_active"
            defaultSelected={carrera?.is_active}
            onChange={(e) => {
              const data: setterData = {
                clave: e.target.name,
                valor: e.target.checked,
              };

              handleChangeCarrera(data);
            }}
          />
        </div>
      </div>
    </div>
  );
}

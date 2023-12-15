import { Asignatura } from "@/app/interfaces/asignatura-interfaces";
import { setterData } from "@/app/interfaces/setter-interfaces";
import { Input, Switch } from "@nextui-org/react";
import { useEffect, useState } from "react";

interface FieldsAsignaturaProps {
  asignatura?: Asignatura;
  onChangeAsignatura: (data: setterData) => void;
}
export default function FieldsAsignatura(
  { asignatura, onChangeAsignatura }: FieldsAsignaturaProps = {
    asignatura: {} as Asignatura,
    onChangeAsignatura: () => {},
  }
) {
  const [fields, setFields] = useState<Asignatura>({} as Asignatura);
  const handleChangeAsignatura = ({ clave, valor }: setterData) => {
    setFields({ ...fields, [clave]: valor });
    onChangeAsignatura({ clave, valor });
  };

  useEffect(() => {
    if (asignatura) {
      setFields(asignatura || ({} as Asignatura));
    }
  }, [asignatura]);
  return (
    <div>
      <div className="w-full flex flex-col gap-4">
        <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
          <Input
            size="sm"
            type="text"
            label="nombre"
            name="nombre"
            placeholder="Escriba una Asignatura..."
            defaultValue={asignatura?.nombre}
            onChange={(e) => {
              const data: setterData = {
                clave: e.target.name,
                valor: e.target.value,
              };
              handleChangeAsignatura(data);
            }}
          />
        </div>
      </div>
    </div>
  );
}

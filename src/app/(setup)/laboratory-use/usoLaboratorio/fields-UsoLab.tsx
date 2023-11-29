import { setterData } from "@/app/interfaces/setter-interfaces";
import { UsoLab } from "@/app/interfaces/usoLab-interfaces";
import { Input, Switch } from "@nextui-org/react";
import { useEffect, useState } from "react";

interface FieldsUsoLabProps {
  usoLaboratorio?: UsoLab;
  onChangeUsoLab: (data: setterData) => void;
}
export default function FieldsUsoLab(
  { usoLaboratorio, onChangeUsoLab }: FieldsUsoLabProps = {
    usoLaboratorio: {} as UsoLab,
    onChangeUsoLab: () => {},
  }
) {
  const [fields, setFields] = useState<UsoLab>({} as UsoLab);
  const handleChangeRole = ({ clave, valor }: setterData) => {
    setFields({ ...fields, [clave]: valor });
    onChangeUsoLab({ clave, valor });
  };

  useEffect(() => {
    if (usoLaboratorio) {
      setFields(usoLaboratorio || ({} as UsoLab));
    }
  }, [usoLaboratorio]);
  return (
    <div>
      <div className="w-full flex flex-col gap-4">
        <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
          <Input
            size="sm"
            type="text"
            label="UsoLab"
            name="semester"
            placeholder="Escriba un usoLaboratorio..."
            defaultValue={usoLaboratorio?.semester}
            onChange={(e) => {
              const data: setterData = {
                clave: e.target.name,
                valor: e.target.value,
              };
              handleChangeRole(data);
            }}
          />
        </div>
      </div>
      <div className="w-full flex flex-col gap-4 mt-2">
        <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
          <Switch
            name="is_active"
            defaultSelected={usoLaboratorio?.is_active}
            onChange={(e) => {
              const data: setterData = {
                clave: e.target.name,
                valor: e.target.checked,
              };

              handleChangeRole(data);
            }}
          />
        </div>
      </div>
    </div>
  );
}

import { Modalidad } from "@/app/interfaces/modalidades-interface";
import { setterData } from "@/app/interfaces/setter-interfaces";
import { Input, Switch } from "@nextui-org/react";
import { useEffect, useState } from "react";

interface FieldsModalidadProps {
  modalidades?: Modalidad;
  onchangeModalidad: (data: setterData) => void;
}
export default function FieldsModalidades(
  { modalidades, onchangeModalidad }: FieldsModalidadProps = {
    modalidades: {} as Modalidad,
    onchangeModalidad: () => {},
  }
) {
  const [fields, setFields] = useState<Modalidad>({} as Modalidad);
  const handleChangeModalidad = ({ clave, valor }: setterData) => {
    setFields({ ...fields, [clave]: valor });
    onchangeModalidad({ clave, valor });
  };

  useEffect(() => {
    if (modalidades) {
      setFields(modalidades || ({} as Modalidad));
    }
  }, [modalidades]);
  return (
    <div>
      <div className='w-full flex flex-col gap-4'>
        <div className='flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4'>
          <Input
            size='sm'
            type='text'
            label='Modalidad'
            name='modalidad'
            placeholder='Escriba un modalidad...'
            defaultValue={modalidades?.modalidades}
            onChange={(e) => {
              const data: setterData = {
                clave: e.target.name,
                valor: e.target.value,
              };
              handleChangeModalidad(data);
            }}
          />
        </div>
      </div>
      <div className='w-full flex flex-col gap-4 mt-2'>
        <div className='flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4'>
          <Switch
            name='is_active'
            defaultSelected={modalidades?.isActive}
            onChange={(e) => {
              const data: setterData = {
                clave: e.target.name,
                valor: e.target.checked,
              };

              handleChangeModalidad(data);
            }}
          />
        </div>
      </div>
    </div>
  );
}

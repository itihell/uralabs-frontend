import { setterData } from "@/app/interfaces/setter-interfaces";
import { useState, useEffect } from "react";
import { Input, Switch } from "@nextui-org/react";
import { DocentesModalidades } from "@/app/interfaces/docentes-modalidades";

interface FieldsReportesProps {
  modalidadDocentes?: DocentesModalidades;
  onChangeModalidadesDocents: (data: setterData) => void;
}

export default function FieldsModalidadDocentes(
  { modalidadDocentes, onChangeModalidadesDocents }: FieldsReportesProps = {
    modalidadDocentes: {} as DocentesModalidades,
    onChangeModalidadesDocents: () => {},
  }
) {
  const [fields, setFields] = useState<DocentesModalidades>(
    {} as DocentesModalidades
  );
  const handleChangeDocentMo = ({ clave, valor }: setterData) => {
    setFields({ ...fields, [clave]: valor });
    onChangeModalidadesDocents({ clave, valor });
  };
  console.log(modalidadDocentes);
  useEffect(() => {
    if (modalidadDocentes) {
      setFields(modalidadDocentes || ({} as DocentesModalidades));
    }
  }, [modalidadDocentes]);

  return (
    <div>
      <div className='w-full flex flex-col gap-4'>
        <div className='flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4'>
          <Input
            size='sm'
            type='text'
            label='Fecha'
            name='fecha'
            placeholder='Escriba una fecha...'
            defaultValue={modalidadDocentes?.fecha}
            onChange={(e) => {
              const data: setterData = {
                clave: e.target.name,
                valor: e.target.value,
              };
              handleChangeDocentMo(data);
            }}
          />

          <Input
            size='sm'
            type='text'
            label='Filtro'
            name='Data filter '
            placeholder='Filtrar...'
            defaultValue={modalidadDocentes?.doncente}
            onChange={(e) => {
              const data: setterData = {
                clave: e.target.name,
                valor: e.target.value,
              };
              console.log(data);
              handleChangeDocentMo(data);
            }}
          />
        </div>
      </div>
      <div className='w-full flex flex-col gap-4 mt-2'>
        <div className='flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4'>
          <Switch
            name='is_active'
            // defaultSelected={modalidadDocentes?.is_active}
            onChange={(e) => {
              const data: setterData = {
                clave: e.target.name,
                valor: e.target.checked,
              };

              handleChangeDocentMo(data);
            }}
          />
          <span className='ml-2'>Activo</span>
        </div>
      </div>
    </div>
  );
}

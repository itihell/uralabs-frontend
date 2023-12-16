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
            placeholder='Escriba la hora...'
            defaultValue={modalidadDocentes?.horas?.toString()}
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
            label='Docente'
            name='Data filter '
            placeholder='Escriba el docente...'
            defaultValue={modalidadDocentes?.docente}
            onChange={(e) => {
              const data: setterData = {
                clave: e.target.name,
                valor: e.target.value,
              };
              console.log(data);
              handleChangeDocentMo(data);
            }}
          />

          <Input
            size='sm'
            type='text'
            label='Modalidad'
            name='modalidad'
            placeholder='Escriba la asignatura...'
            defaultValue={modalidadDocentes?.asignatura}
            onChange={(e) => {
              const data: setterData = {
                clave: e.target.name,
                valor: e.target.value,
              };
              handleChangeDocentMo(data);
            }}
          />
        </div>
      </div>
    </div>
  );
}

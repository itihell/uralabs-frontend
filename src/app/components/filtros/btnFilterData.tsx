import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import React, { useState } from "react";
import FieldsModalidadDocentes from "./fieldsDocentesModalidades";
import { DocentesModalidades } from "@/app/interfaces/docentes-modalidades";
import { setterData } from "@/app/interfaces/setter-interfaces";

interface BtnFilterDataProps {
  onFilteredReports: (fields: DocentesModalidades) => void;
}

const BtnFilterData = ({ onFilteredReports }: BtnFilterDataProps) => {
  const [fields, setFields] = useState<DocentesModalidades>(
    {} as DocentesModalidades
  );
  const [isOpen, setOpen] = useState(false);
  const onOpen = () => setOpen(true);
  const onOpenChange = (open: boolean) => {
    setOpen(open);
  };

  const setChangeFields = (value: setterData) => {
    setFields({ ...fields, [value.clave]: value.valor });
  };

  const onFilterReports = () => {
    onFilteredReports(fields);
  };
  return (
    <>
      <Button onPress={onOpen}>Filtrar Reportes</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className='flex flex-col gap-1'>
                Filtro de datos
              </ModalHeader>
              <ModalBody>
                <FieldsModalidadDocentes
                  reports={fields}
                  onChangeModalidadesDocents={setChangeFields}
                />
              </ModalBody>
              <ModalFooter>
                <Button
                  color='danger'
                  variant='light'
                  onPress={() => {
                    setTimeout(() => {
                      onClose();
                    }, 200);

                    setFields(() => {
                      onFilteredReports({} as DocentesModalidades);
                      return {} as DocentesModalidades;
                    });
                  }}
                >
                  Cancelar
                </Button>
                <Button
                  color='success'
                  onPress={() => {
                    setTimeout(() => {
                      onClose();
                    }, 200);
                    onFilterReports();
                  }}
                >
                  Filtrar Datos
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default BtnFilterData;

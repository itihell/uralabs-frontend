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
  onFilteredData: (fields: DocentesModalidades) => void;
}

const BtnFilterData = ({ onFilteredData }: BtnFilterDataProps) => {
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

  const onFilterData = () => {
    onFilteredData(fields);
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
                  modalidadDocentes={fields}
                  onChangeModalidadesDocents={setChangeFields}
                />
              </ModalBody>
              <ModalFooter>
                <Button color='danger' variant='light' onPress={onClose}>
                  Cancelar
                </Button>
                <Button
                  color='success'
                  onPress={() => {
                    setTimeout(() => {
                      onClose();
                    }, 200);
                    onFilterData();
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

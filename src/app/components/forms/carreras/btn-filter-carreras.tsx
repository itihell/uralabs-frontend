import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import { useState } from "react";
import { setterData } from "@/app/interfaces/setter-interfaces";
import FieldsCarreras from "./fields-carreras";
import { Carrera } from "@/app/interfaces/carreras-interfaces";

interface BtnFilterCarrerasProps {
  onFilteredCarreras: (fields: Carrera) => void;
}

const BtnFilterCarreras = ({ onFilteredCarreras }: BtnFilterCarrerasProps) => {
  const [fields, setFields] = useState<Carrera>({} as Carrera);
  const [isOpen, setOpen] = useState(false);
  const onOpen = () => setOpen(true);
  const onOpenChange = (open: boolean) => {
    setOpen(open);
  };

  const setChangeFields = (value: setterData) => {
    setFields({ ...fields, [value.clave]: value.valor });
  };

  const onFilterCarreras = () => {
    onFilteredCarreras(fields);
  };

  return (
    <>
      <Button onPress={onOpen}>Buscar Carreras</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Modal Title
              </ModalHeader>
              <ModalBody>
                <div>
                  <FieldsCarreras carrera={fields} onChangeCarrera={setChangeFields} />
                </div>
              </ModalBody>
              <ModalFooter>
                <Button
                  color="danger"
                  variant="light"
                  onPress={() => {
                    setTimeout(() => {
                      onClose();
                    }, 200);

                    setFields(() => {
                      onFilteredCarreras({} as Carrera);
                      return {} as Carrera;
                    });
                  }}
                >
                  Cancelar
                </Button>
                <Button
                  color="success"
                  onPress={() => {
                    setTimeout(() => {
                      onClose();
                    }, 200);
                    onFilterCarreras();
                  }}
                >
                  Filtrar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default BtnFilterCarreras;

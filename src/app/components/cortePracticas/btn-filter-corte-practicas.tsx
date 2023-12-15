import { useState } from "react";
import CortePracticas from "../screens/forms/corte-practicas/interface/corte-practicas";
import { setterData } from "@/app/interfaces/setter-interfaces";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import FieldsCortePracticas from "../screens/forms/corte-practicas/filds-corte";

interface BtnFilterCortePracticasProps {
  onFilteredCortePracticas: (fields: CortePracticas) => void;
}
const BtnFilterCortePracticas = ({ onFilteredCortePracticas }: BtnFilterCortePracticasProps) => {

  const [fields, setFields] = useState<CortePracticas>({} as CortePracticas);
  const [isOpen, setOpen] = useState(false);
  const onOpen = () => setOpen(true);
  const onOpenChange = (open: boolean) => {
    setOpen(open);
  };

  const setChangeFields = (value: setterData) => {
    setFields({ ...fields, [value.clave]: value.valor });
  };

  const onFilterCortePracticas = () => {
    onFilteredCortePracticas(fields);
  };
  return (
    <>
      <Button onPress={onOpen}>Buscar CorteParcticas</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Buscar CortePracticas
              </ModalHeader>
              <ModalBody>
                <div>
                  <FieldsCortePracticas cortePracticas={fields} onChangeCortePracticas={setChangeFields}
                  />
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
                      onFilteredCortePracticas({} as CortePracticas);
                      return {} as CortePracticas;
                    });
                  }}
                >
                  Cancelar
                </Button>
                <Button color="success" onPress={onFilterCortePracticas}>
                  Buscar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default BtnFilterCortePracticas;

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
  import FieldsUsoLab from "./fields-UsoLab";
  import { UsoLab } from "@/app/interfaces/usoLab-interfaces";
  
  interface BtnFilterUsoLabProps {
    onFilteredLabUse: (fields: UsoLab) => void;
  }
  
  const BtnFilterUsoLab = ({ onFilteredLabUse }: BtnFilterUsoLabProps) => {
    const [fields, setFields] = useState<UsoLab>({} as UsoLab);
    const [isOpen, setOpen] = useState(false);
    const onOpen = () => setOpen(true);
    const onOpenChange = (open: boolean) => {
      setOpen(open);
    };
  
    const setChangeFields = (value: setterData) => {
      setFields({ ...fields, [value.clave]: value.valor });
    };
  
    const onFilteredUsoLab = () => {
      onFilteredLabUse(fields);
    };
  
    return (
      <>
        <Button onPress={onOpen}>Buscar Registro del laboratorio</Button>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top">
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Registros del uso del laboratorio
                </ModalHeader>
                <ModalBody>
                  <div>
                    <FieldsUsoLab usoLaboratorio={fields} onChangeUsoLab={setChangeFields} />
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
                        onFilteredLabUse({} as UsoLab);
                        return {} as UsoLab;
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
                      onFilteredUsoLab();
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
  
  export default BtnFilterUsoLab;
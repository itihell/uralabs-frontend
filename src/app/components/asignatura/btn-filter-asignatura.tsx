import {
    Button,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
  } from "@nextui-org/react";
  import FieldsAsignatura from "./fields-asignatura";
  import { useState } from "react";
  import { Asignatura } from "@/app/interfaces/asignatura-interfaces";
  import { setterData } from "@/app/interfaces/setter-interfaces";
  
  interface BtnFilterAsignaturaProps {
    onFilteredAsignatura: (fields: Asignatura) => void;
  }
  
  const BtnFilterAsignatura = ({ onFilteredAsignatura} : BtnFilterAsignaturaProps) => {
    const [fields, setFields] = useState<Asignatura>({} as Asignatura);
    const [isOpen, setOpen] = useState(false);
    const onOpen = () => setOpen(true);
    const onOpenChange = (open: boolean) => {
      setOpen(open);
    };
  
    const setChangeFields = (value: setterData) => {
      setFields({ ...fields, [value.clave]: value.valor });
    };
  
    const onFilterAsignatura = () => {
      onFilteredAsignatura(fields);
      console.log(fields);     
    };
  
    return (
      <>
        <Button onPress={onOpen}>Buscar Asignatura</Button>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Asignatura Modal Title
                </ModalHeader>
                <ModalBody>
                  <div>
                    <FieldsAsignatura asignatura={fields} onChangeAsignatura={setChangeFields} />
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
                        onFilteredAsignatura({} as Asignatura);
                        return {} as Asignatura;
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
                      onFilterAsignatura(); 
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
  
  export default BtnFilterAsignatura;
  
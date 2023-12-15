"use client";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Switch,
} from "@nextui-org/react";
import { useState } from "react";
import { setterData } from "@/app/interfaces/setter-interfaces";
import { useAsignatura } from "@/app/hooks/use-asignatura";
import { Asignatura } from "@/app/interfaces/asignatura-interfaces";
import FieldsAsignatura from "@/app/components/asignatura/fields-asignatura";


interface BtnAddAsignaturaProps {
  onSaved: (data: Asignatura) => void;
}
export default function BtnAddAsignatura({ onSaved }: BtnAddAsignaturaProps) {
  const [fields, setFields] = useState<Asignatura>({} as Asignatura);

  const handleChangeAsignatura = ({ clave, valor }: setterData) => {
    setFields({ ...fields, [clave]: valor });
  };
  const { onStore } = useAsignatura();


  

  const [isOpen, setOpen] = useState(false);
  const onOpen = () => {
    setOpen(!isOpen);
    setFields({} as Asignatura);
  };

  const handleOnStore = async () => {
    const rest = await onStore(fields);
    return rest;
  };

  return (
    <>
      <Button variant="light" size="sm" color="primary" onPress={onOpen}>
        Agregar Asignatura
      </Button>
      <Modal
        placement="top"
        backdrop="blur"
        isOpen={isOpen}
        onOpenChange={onOpen}
        isDismissable={false}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Datos de la asignatura
              </ModalHeader>
              <ModalBody>
                <div>
                  <FieldsAsignatura onChangeAsignatura={handleChangeAsignatura} />
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cancelar
                </Button>
                <Button
                  color="primary"
                  onPress={async (e) => {
                    const { data } = await handleOnStore();

                    if (data && data.id) {
                      onSaved(data);
                      onClose();
                    } 
                  }}
                >
                  Guardar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

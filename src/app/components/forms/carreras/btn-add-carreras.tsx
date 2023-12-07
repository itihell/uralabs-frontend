"use client";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import { useState } from "react";
import { setterData } from "@/app/interfaces/setter-interfaces";
import { Carrera } from "@/app/interfaces/carreras-interfaces";
import { useCarreras } from "@/app/hooks/use-carrreras";
import FieldsCarreras from './fields-carreras';

interface BtnAddCarreraProps {
  onSaved: (data: Carrera) => void;
}
export default function BtnAddCarrera({ onSaved }: BtnAddCarreraProps) {
  const [fields, setFields] = useState<Carrera>({} as Carrera);
  const handleChangeCarrera = ({ clave, valor }: setterData) => {
    setFields({ ...fields, [clave]: valor });
  };
  const { onStore } = useCarreras();

  const [isOpen, setOpen] = useState(false);
  const onOpen = () => {
    setOpen(!isOpen);
    setFields({} as Carrera);
  };

  const handleOnStore = async () => {
    const rest = await onStore(fields);
    return rest;
  };

  return (
    <>
      <Button variant="light" size="sm" color="primary" onPress={onOpen}>
        Agregar Carrera
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
                Datos del carrera
              </ModalHeader>
              <ModalBody>
                <div>
                  <FieldsCarreras onChangeCarrera={handleChangeCarrera} />
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

                    if (data.id) {
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

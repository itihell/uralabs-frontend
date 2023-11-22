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
import { Modalidad } from "@/app/interfaces/modalidades-interface";
import { useModalidad } from "@/app/hooks/use-modalidadades";
import FieldsModalidades from "../forms/modalidades/fields-modalidades";

interface BtnAddModalidadProps {
  onSaved: (data: Modalidad) => void;
}
export default function BtnAddModalidad({ onSaved }: BtnAddModalidadProps) {
  const [fields, setFields] = useState<Modalidad>({} as Modalidad);
  const handleChangeModal = ({ clave, valor }: setterData) => {
    setFields({ ...fields, [clave]: valor });
  };
  const { onStore } = useModalidad();

  const [isOpen, setOpen] = useState(false);
  const onOpen = () => {
    setOpen(!isOpen);
    setFields({} as Modalidad);
  };

  const handleOnStore = async () => {
    const rest = await onStore(fields);
    return rest;
  };

  return (
    <>
      <Button variant='light' size='sm' color='primary' onPress={onOpen}>
        Agregar Modalidad
      </Button>
      <Modal
        placement='top'
        backdrop='blur'
        isOpen={isOpen}
        onOpenChange={onOpen}
        isDismissable={false}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className='flex flex-col gap-1'>
                Datos de la modalidad
              </ModalHeader>
              <ModalBody>
                <div>{JSON.stringify(fields)}</div>
                <div>
                  <FieldsModalidades onchangeModalidad={handleChangeModal} />
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color='danger' variant='light' onPress={onClose}>
                  Cancelar
                </Button>
                <Button
                  color='primary'
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

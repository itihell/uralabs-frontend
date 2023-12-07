"use client";
import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import { IconPencilMinus } from "@tabler/icons-react";
import { Carrera } from "@/app/interfaces/carreras-interfaces";
import { useCarreras } from "@/app/hooks/use-carrreras";
import { setterData } from "@/app/interfaces/setter-interfaces";
import FieldsCarreras from "./fields-carreras";

interface ButtonEditCarreraProps {
  id: number;
  onSaved: (e: Carrera) => void;
}

export default function ButtonEditCarrera({ id, onSaved }: ButtonEditCarreraProps) {
  const { onUpdate, onShow } = useCarreras();

  const [fields, setFields] = useState<Carrera>({} as Carrera);

  const [isOpen, setIsOpen] = useState(false);

  const loadData = async (id: number) => {
    const { data } = await onShow(id);

    setFields(data);
    setTimeout(() => {
      onOpen();
    }, 200);
  };

  const onOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleChangeCarrera = ({ clave, valor }: setterData) => {
    setFields({ ...fields, [clave]: valor });
  };

  const handleOnStore = async () => {
    const rest = await onUpdate(id, fields);
    return rest;
  };

  const handleOnClick = async (e: any) => {
    await loadData(id);
  };

  const handleOnClickSaved = async (e: any) => {
    const { data } = await handleOnStore();
    onSaved(data);
  };

  return (
    <>
      <Button
        onPress={async (e) => {
          await handleOnClick(e);
        }}
        variant="light"
        size="sm"
      >
        <IconPencilMinus color="lime" />
      </Button>
      {isOpen && (
        <Modal isOpen={isOpen} onOpenChange={onOpen} backdrop="blur">
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Editar Carrera
                </ModalHeader>
                <ModalBody>
                  <div>
                    {fields.id && (
                      <FieldsCarreras
                        carrera={fields}
                        onChangeCarrera={handleChangeCarrera}
                      />
                    )}
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Cancelar
                  </Button>
                  <Button
                    color="primary"
                    onPress={async (e) => {
                      await handleOnClickSaved(e);
                      setTimeout(() => {
                        onClose();
                      }, 200);
                    }}
                  >
                    Actualizar
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      )}
    </>
  );
}

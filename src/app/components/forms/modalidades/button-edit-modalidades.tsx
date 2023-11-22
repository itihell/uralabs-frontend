"use client";
import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { IconPencilMinus } from "@tabler/icons-react";
import { setterData } from "@/app/interfaces/setter-interfaces";
import { useModalidad } from "@/app/hooks/use-modalidadades";
import { Modalidad } from "@/app/interfaces/modalidades-interface";
import FieldsModalidades from "./fields-modalidades";

interface ButtonEditModalidadProp {
  id: number;
  onSaved: (e: Modalidad) => void;
}
export default function ButtonEditModalidad({
  id,
  onSaved,
}: ButtonEditModalidadProp) {
  const { onUpdate, onShow } = useModalidad();

  const [fields, setFields] = useState<Modalidad>({} as Modalidad);

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

  const handleChangeModalidad = ({ clave, valor }: setterData) => {
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
        variant='light'
        size='sm'
      >
        <IconPencilMinus color='lime' />
      </Button>
      {isOpen && (
        <Modal isOpen={isOpen} onOpenChange={onOpen} backdrop='blur'>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className='flex flex-col gap-1'>
                  Editar Modalidad
                </ModalHeader>
                <ModalBody>
                  <div>
                    {fields.id && (
                      <FieldsModalidades
                        modalidades={fields}
                        onchangeModalidad={handleChangeModalidad}
                      />
                    )}
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button color='danger' variant='light' onPress={onClose}>
                    Cancelar
                  </Button>
                  <Button
                    color='primary'
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

"use client";
import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import {
  IconArrowBackUpDouble,
  IconCheck,
  IconTrash,
} from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { Modalidad } from "@/app/interfaces/modalidades-interface";
import { useModalidad } from "@/app/hooks/use-modalidadades";

interface ButtonDeleteModalidadProps {
  id: number;
  onDeleted: (e: Modalidad) => void;
}
export default function ButtonDeleteModalidad({
  id,
  onDeleted,
}: ButtonDeleteModalidadProps) {
  const { onDelete } = useModalidad();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const router = useRouter();

  const deletedModalidad = async (id: number) => {
    const { data } = await onDelete(id);
    onDeleted(data);
  };

  return (
    <>
      <Button onPress={onOpen} variant='light' size='sm'>
        <IconTrash color='red' />
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className='flex flex-row justify-start'>
                <IconTrash color='red' /> Eliminar Modalidad
              </ModalHeader>
              <ModalBody>
                <h1>
                  ¿Está seguro que desea eliminar la modalidad con id {id}?
                </h1>
              </ModalBody>
              <ModalFooter>
                <Button color='danger' variant='light' onPress={onClose}>
                  <IconArrowBackUpDouble color='red' />
                  Cancelar
                </Button>
                <Button
                  color='primary'
                  onClick={() => {
                    deletedModalidad(id);
                    onClose();
                  }}
                >
                  <IconCheck color='lime' />
                  Si
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

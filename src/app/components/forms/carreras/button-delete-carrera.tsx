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
import { Carrera } from "@/app/interfaces/carreras-interfaces";
import { UseCarreras } from "@/app/hooks/use-carreras";

interface ButtonDeletedCarreraProps {
  id: number;
  onDeleted: (e: Carrera) => void;
}
export default function ButtonDeleteCarrera({
  id,
  onDeleted,
}: ButtonDeletedCarreraProps) {
  const { onDelete } = UseCarreras();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const router = useRouter();

  const deletedCarreras = async (id: number) => {
    const { data } = await onDelete(id);
    onDeleted(data);
  };

  return (
    <>
      <Button onPress={onOpen} variant="light" size="sm">
        <IconTrash color="red" />
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-row justify-start">
                <IconTrash color="red" /> Eliminar Carrera
              </ModalHeader>
              <ModalBody>
                <h1>¿Está seguro que desea eliminar la carrera con id {id}?</h1>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  <IconArrowBackUpDouble color="red" />
                  Cancelar
                </Button>
                <Button
                  color="primary"
                  onClick={() => {
                    deletedCarreras(id);
                    onClose();
                  }}
                >
                  <IconCheck color="lime" />
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

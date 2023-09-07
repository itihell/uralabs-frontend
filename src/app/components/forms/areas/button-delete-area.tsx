"use client";
import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { IconArrowBackUpDouble, IconCheck, IconTrash } from "@tabler/icons-react";
import { deleteAreaById } from "@/app/actions/post/save-areas";
import { useRouter } from "next/navigation";

export default function ButtonDeleteArea({ id }: { id: string }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const router = useRouter();

  const deleteArea = async (id: string) => {
    await deleteAreaById(parseInt(id));
    router.refresh();
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
                <IconTrash color="red" /> Eliminar Area
              </ModalHeader>
              <ModalBody>
                <h1>¿Está seguro que desea eliminar el area con id {id}?, tambien se eliminaran las carreras pertenecientes a esta area.</h1>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  <IconArrowBackUpDouble color="red" />
                  Cancelar
                </Button>
                <Button
                  color="primary"
                  onClick={() => {
                    deleteArea(id);
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

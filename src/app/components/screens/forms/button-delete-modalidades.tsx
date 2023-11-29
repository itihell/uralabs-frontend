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
import { revalidatePath } from "next/cache";
import { useRouter } from "next/navigation";
import { deteteModalidadById } from "../actions/post/save-modalidades";

export default function ButtonDeleteModalidades({ id }: { id: string }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const router = useRouter();

  const deleteModalidad = async (id: string) => {
    const { data } = await deteteModalidadById(parseInt(id));
    router.refresh();
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
                    deleteModalidad(id);
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

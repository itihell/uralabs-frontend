"use client";

import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { deletePracticanteById } from "../../actions/post/save-practicantes";
import {
  IconArrowBackUpDouble,
  IconCheck,
  IconTrash,
} from "@tabler/icons-react";

export default function ButtonDeletePracticante({ id }: { id: string }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const router = useRouter();
  const deletPracticante = async (id: string) => {
    const { data } = await deletePracticanteById(parseInt(id));
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
              <ModalHeader className=" flex flex-row justify-start">
                <IconTrash color="red" /> Eliminar Practicante
              </ModalHeader>
              <ModalBody>
                <h1>
                  ¿Está seguro que desea eliminar el practicante con id {id}?
                </h1>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    <IconArrowBackUpDouble color="red" />
                    Cancelar
                  </Button>
                  <Button
                    color="primary"
                    onClick={() => {
                      deletPracticante(id);
                      onClose();
                    }}
                  >
                    <IconCheck color="lime" />
                    Si
                  </Button>
                </ModalFooter>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { getPracticante } from "../../actions/post/save-practicantes";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { IconPencilMinus } from "@tabler/icons-react";
import FormEditPracticante from "./form-edit-practicante";

export default function ButtonEditPracicante({ id }: { id: string }) {
  const router = useRouter();
  const [fields, setFields] = useState({});
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const loadData = async (id: number) => {
    const datos = await getPracticante(id);

    setFields(datos);
  };
  console.log(id);
  return (
    <>
      <Button
        onPress={() => {
          onOpen();
          loadData(parseInt(id));
        }}
        variant="light"
        size="sm"
      >
        <IconPencilMinus color="lime" />
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Editar Practicante
              </ModalHeader>
              <ModalBody>
                <FormEditPracticante
                  fields={fields}
                  closeModal={(e: any) => {
                    onClose();
                    setFields({});
                    router.refresh();
                  }}
                />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

"use client";
import React, { useState } from "react";
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
import FormEditRole from "./form-edit-role";
import { getRoles } from "@/app/actions/post/save-roles";
import { revalidatePath } from "next/cache";
import { useRouter } from "next/navigation";

export default function ButtonEditRole({ id }: { id: string }) {
  const router = useRouter();
  const [fields, setFields] = useState({});
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const loadData = async (id: number) => {
    const datos = await getRoles(id);
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
        variant='light'
        size='sm'
      >
        <IconPencilMinus color='lime' />
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className='flex flex-col gap-1'>
                Editar Role
              </ModalHeader>
              <ModalBody>
                <FormEditRole
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

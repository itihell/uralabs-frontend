"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  useDisclosure,
  ModalFooter,
} from "@nextui-org/react";
import { IconPencilMinus } from "@tabler/icons-react";
import FormEditPracticante from "./form-edit-practicante";
import Practicante from "./interface/practicante";
import { setterData } from "@/app/interfaces/setter-interfaces";
import FieldsPracticantes from "./fields-practicante";
import { usePracticante } from "@/app/hooks/use-practicante";

interface ButtonEditPracticanteProps {
  id: number;
  onSaved: (e: Practicante) => void;
}

export default function ButtonEditPracicante({id, onSaved}:ButtonEditPracticanteProps) {

  const {onUpdate, onShow} = usePracticante();
  const [fields, setFields] = useState<Practicante>({} as Practicante);
  const [ isOpen, setIsOpen]  = useState(false);
const loadData = async (id: number) => {
  const { data } = await onShow(id);

  setFields(data);
  setTimeout(() => {
    onOpen();
  }, 200);
}

  const onOpen = () => {
    setIsOpen(!isOpen);
  }

  const handleChangePracticante = ({ clave, valor }: setterData) => {
    setFields({ ...fields, [clave]: valor });
    console.log(fields);
  }

  const handleOnStore = async () => {
    const rest = await onUpdate (id, fields);
    return rest;
  }

  const handleOnClickSave = async (e: any) => {
    await loadData(id);
  }

  const handleOnClickSaved = async (e: any) => {
    const { data } = await handleOnStore();
    onSaved(data);
  }
  return (
    <>
      <Button
        onPress={ async () => {
          await handleOnClickSave(id);
        }}
        variant="light"
        size="sm"
      >
        <IconPencilMinus color="lime" />
      </Button>
      {isOpen &&(
          <Modal isOpen={isOpen} onOpenChange={onOpen} backdrop="blur">
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Editar Practicante
                </ModalHeader>
                <ModalBody>
                  <div>
                    {fields.id && (
                      <FormEditPracticante
                        practicante={fields}
                        onChangePracticante={handleChangePracticante}
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
                    onClick={() => {
                      handleOnClickSaved(id);
                      onClose();
                    }}
                  >
                    Si
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

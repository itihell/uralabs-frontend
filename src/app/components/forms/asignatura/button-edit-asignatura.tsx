"use client";
import React, { useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { IconPencilMinus } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { getAsignatura } from "@/app/actions/post/save-asignatura";
import FormEditAsignatura from "./form-edit-asignatura";
import { Asignatura } from "@/app/interfaces/asignatura-interfaces";
import { useAsignatura } from "@/app/hooks/use-asignatura";
import FieldsAsignatura from "../../asignatura/fields-asignatura";
import { setterData } from "@/app/interfaces/setter-interfaces";

interface ButtonEditAsignaturaProps {
  id: number;
  onSaved: (e: Asignatura) => void;
}

export default function ButtonEditAsignatura({ id, onSaved }:  ButtonEditAsignaturaProps) {
  const { onUpdate, onShow } = useAsignatura();
  const [fields, setFields] = useState<Asignatura>({} as Asignatura);
  const [isOpen, setIsOpen] = useState(false);
  const loadData = async (id: number) => {
    const { data } = await onShow(id);
    setFields(data);
    setTimeout (() =>{
      onOpen();
    }, 200);
  };


  const onOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleChangeAsignatura = ({ clave, valor }: setterData) => {
    setFields({ ...fields, [clave]: valor});
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
         <Modal isOpen={isOpen} onOpenChange={onOpen} backdrop='blur'>
         <ModalContent>
           {(onClose) => (
             <>
               <ModalHeader className="flex flex-col gap-1">Editar Asignatura</ModalHeader>
               <ModalBody>
                <div>
                {fields.id && (
                      <FieldsAsignatura
                        asignatura={fields}
                        onChangeAsignatura={handleChangeAsignatura}
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

"use client";
import React, { useState } from "react";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    Button,
    useDisclosure,
} from "@nextui-org/react";
import { IconPencilMinus } from "@tabler/icons-react";

import { useRouter } from "next/navigation";
import FormEditLabUse from "../forms/laboratory-use/form-edit-labUse";
import { getLabUse } from "../../actions/post/save-labUse";

export default function ButtonEditLabUse({ id }: { id: string }) {
    const router = useRouter();
    const [fields, setFields] = useState({});
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const loadDatas = async (id: number) => {
        const datos = await getLabUse(id);
        setFields(datos);
    };

    return (
        <>
            <Button
                onPress={() => {
                    onOpen();
                    loadDatas(parseInt(id));
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
                                Editar el registro de uso del laboratorio
                            </ModalHeader>
                            <ModalBody>
                                <FormEditLabUse
                                    field={fields}
                                    closeModals={(e: any) => {
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

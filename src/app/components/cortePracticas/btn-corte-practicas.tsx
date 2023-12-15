'use client'
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button
} from "@nextui-org/react"

import CortePracticas from "../screens/forms/corte-practicas/interface/corte-practicas";
import { setterData } from "@/app/interfaces/setter-interfaces";
import { useState } from "react";
import { useCortePracticas } from "@/app/hooks/use-corte-practicas";
import FieldsCortePracticas from "../screens/forms/corte-practicas/filds-corte";

interface BtnAddCortePracticasProps {
    onSaved: (data: CortePracticas) => void;

}
export default function BtnAddCortePracticas({ onSaved }: BtnAddCortePracticasProps) {
    const [fields, setFields] = useState<CortePracticas>({} as CortePracticas);
    const { onSave } = useCortePracticas();

    const handleChangeCortePracticas = ({ clave, valor }: setterData) => {
        setFields({ ...fields, [clave]: valor });
        console.log(fields);
    };

    const handleOnStore = async () => {
        const rest = await onSave(fields);
        console.log(rest);
        return rest;
    };
    const [isOpen, setOpen] = useState(false);

    const onOpen = () => {
        setOpen(!isOpen);
        setFields({} as CortePracticas);
    };
    return (
        <>
            <Button variant="light" size="sm" color="primary" onPress={onOpen}>
                Agregar Corte Practicas
            </Button>
            <Modal
                placement="top"
                backdrop="blur"
                isOpen={isOpen}
                onOpenChange={onOpen}
                isDismissable={false}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader>
                                Datos del Corte Practicas
                            </ModalHeader>
                            <ModalBody>
                                <div>
                                    <FieldsCortePracticas onChangeCortePracticas={handleChangeCortePracticas} />
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button color='danger' variant='light' onPress={onClose}>
                                    Cancelar
                                </Button>
                                <Button
                                    color='primary'
                                    onPress={async (e) => {
                                        const { data } = await handleOnStore();

                                        if (data.id) {
                                            onSaved(data);
                                            onClose();
                                        }
                                    }}
                                >
                                    Guardar
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>

    );
}
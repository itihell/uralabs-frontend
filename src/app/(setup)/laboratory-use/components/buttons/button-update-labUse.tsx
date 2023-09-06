"use client";
import { Button, ButtonGroup } from "@nextui-org/react";
import { IconArrowBackUpDouble, IconDeviceFloppy } from "@tabler/icons-react";

export default function ButtonUpdateLabUse({ close }: { close: any }) {
    const goToLabUse = () => {
        close();
    };

    return (
        <ButtonGroup>
            <Button color="warning" onClick={goToLabUse}>
                <IconArrowBackUpDouble />
                Cancelar
            </Button>
            <Button type="submit" color="primary">
                <IconDeviceFloppy />
                Actualizar
            </Button>
        </ButtonGroup>
    );
}
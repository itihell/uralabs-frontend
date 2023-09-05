"use client";

import { Button, ButtonGroup } from "@nextui-org/react";

import { IconArrowBackUpDouble, IconDeviceFloppy } from "@tabler/icons-react";

export default function ButtonUpdateModalidades({ close }: { close: any }) {
  const goToModalides = () => {
    close();
  };

  return (
    <ButtonGroup>
      <Button color='warning' onClick={goToModalides}>
        <IconArrowBackUpDouble />
        Cancelar
      </Button>
      <Button type='submit' color='primary'>
        <IconDeviceFloppy />
        Actualizar
      </Button>
    </ButtonGroup>
  );
}

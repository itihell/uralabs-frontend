"use client";
import { Button, ButtonGroup } from "@nextui-org/react";
import { IconArrowBackUpDouble, IconDeviceFloppy } from "@tabler/icons-react";

export default function ButtonUpdateLab({ close }: { close: any }) { 
  const goToLabs = () => {
    close();
  };
  
  return (
    <ButtonGroup>
      <Button color="warning" onClick={goToLabs}> 
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

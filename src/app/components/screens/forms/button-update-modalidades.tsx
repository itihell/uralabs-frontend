import { Button, ButtonGroup } from "@nextui-org/react";

import { IconArrowBackUpDouble, IconDeviceFloppy } from "@tabler/icons-react";
import ButtonUpdateRole from "../../forms/roles/button-update-role";
import { getModalidades } from "../actions/post/save-modalidades";

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

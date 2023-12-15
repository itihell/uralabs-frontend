import { ButtonGroup } from "@nextui-org/react";
import { IconPencilMinus, IconTrash } from "@tabler/icons-react";
import Link from "next/link";

export default function OptionsAsignatura({ id }: { id: string }) {
  return (
    <div className='flex justify-end'>
      <Link href={`/asignatura/delete/${id}`}>
        <IconTrash color='red' />
      </Link>
      <Link href={`/asignatura/edit/${id}`}>
        <IconPencilMinus color='lime' />
      </Link>
    </div>
  );
}

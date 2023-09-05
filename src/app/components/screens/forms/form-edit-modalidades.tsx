import { redirect } from "next/navigation";

import FieldsModalidades from "./fields-modalidades";
import { updateModalidad } from "../actions/post/save-modalidades";
import ButtonUpdateModalidades from "./button-update-modalidades";

export default function FormEditModalidades({
  fields,
  closeModal,
}: {
  fields: any;
  closeModal: any;
}) {
  const actualizarModalidad = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.target as HTMLFormElement);
    const id = fields?.id;
    const data = await updateModalidad(id, form);

    closeModal(data);
  };
  return (
    <form onSubmit={actualizarModalidad}>
      <div>
        <FieldsModalidades fields={fields} />
        <div className='flex justify-end'>
          <ButtonUpdateModalidades close={closeModal} />
        </div>
      </div>
    </form>
  );
}

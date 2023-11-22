"use client";

import { updateModalidades } from "../../screens/actions/post/save-modalidades";
import ButtonUpdateModalidades from "./button-update-modalidades";
import FieldsModalidades from "./fields-modalidades";

export default function FormEditModalidades({
  fields,
  closeModal,
}: {
  fields: any;
  closeModal: any;
}) {
  const actualiarModalidad = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.target as HTMLFormElement);
    const id = fields?.id;
    const data = await updateModalidades(id, form);

    closeModal(data);
  };
  return (
    <form onSubmit={actualiarModalidad}>
      <div>
        <FieldsModalidades fields={fields} />
        <div className='flex justify-end'>
          <ButtonUpdateModalidades close={closeModal} />
        </div>
      </div>
    </form>
  );
}

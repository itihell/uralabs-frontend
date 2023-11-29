"use client";

import { updateModalidades } from "../../screens/actions/post/save-modalidades";
import ButtonUpdateModalidades from "./button-update-modalidades";
import FieldsModalidades from "../../../(setup)/modalidades/fields-modalidades";
import FieldsModal from "./fields-modalidad";

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
    console.log(data, "data prueba");

    closeModal(data);
  };
  return (
    <form onSubmit={actualiarModalidad}>
      <div>
        <FieldsModal fields={fields} />
        <div className='flex justify-end'>
          <ButtonUpdateModalidades close={closeModal} />
        </div>
      </div>
    </form>
  );
}

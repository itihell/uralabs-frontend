"use client";

import { updatePracticante } from "../../actions/post/save-practicantes";
import ButtonUpdatePracticante from "./button-update-practicante";
import FieldsPracticantes from "./fields-practicante";

export default function FormEditPracticante({
  fields,
  closeModal,
}: {
  fields: any;
  closeModal: any;
}) {
  const actualiarPracticante = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const id = fields?.id;
    const form = new FormData(e.target as HTMLFormElement);
    const data = await updatePracticante(id, form);

    closeModal(data);
  };
  return (
    <form onSubmit={actualiarPracticante}>
      <div>
        <FieldsPracticantes fields={fields} />
        <div className="flex justify-end">
          <ButtonUpdatePracticante close={closeModal} />
        </div>
      </div>
    </form>
  );
}

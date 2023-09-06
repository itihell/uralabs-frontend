"use client";

import { updatePracticante } from "../../../actions/post/save-horas-practicas";
import ButtonUpdatePracticante from "./button-update-practicante";
import FieldsPracticantes from "./filds-practicante";

export default function FormEditPracticante({
  fields,
  closeModal,
}: {
  fields: any;
  closeModal: any;
}) {
  const actualiarPracticante = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.target as HTMLFormElement);
    const id = fields?.id;
    const data = await updatePracticante(id, form);

    closeModal(data);
  };
  return (
    <form onSubmit={actualiarPracticante}>
      <div>
        <FieldsPracticantes practicante={fields} />
        <div className="flex justify-end">
          <ButtonUpdatePracticante close={closeModal} />
        </div>
      </div>
    </form>
  );
}
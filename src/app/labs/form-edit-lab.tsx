"use client";
// import ButtonUpdateLab from "./button-update-lab";
import { updateLab } from "@/app/actions/post/save-labs";
import { useRouter } from "next/navigation";
import FieldsLabs from "./fields-labs";
import ButtonUpdateLab from "./button-update-lab"; 
  
export default function FormEditLab({ 
  fields,
  closeModal,
}: {
  fields: any;
  closeModal: any;
}) {
  const actualiarLab = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.target as HTMLFormElement);
    const id = fields?.id;
    const data = await updateLab(id, form);

    closeModal(data);
  };
  return (
    <form onSubmit={actualiarLab}> 
      <div>
        <FieldsLabs fields={fields} />
        <div className="flex justify-end">
          <ButtonUpdateLab close={closeModal} />
        </div>
      </div>
    </form>
  );
}

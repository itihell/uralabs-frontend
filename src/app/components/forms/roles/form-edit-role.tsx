import { redirect } from "next/navigation";
import { updateRole } from "../../../actions/post/save-roles";
import FieldsRoles from "./fields-roles";
import GoToRoles from "../go-to-roles";
import { revalidatePath, revalidateTag } from "next/cache";

export default function FormEditRole({ roleId = 0 }) {
  const actualizarRole = async (formData: FormData) => {
    "use server";
    const data = await updateRole(roleId, formData);

    redirect("/roles");
  };
  return (
    <form action={actualizarRole}>
      <div>
        <h1>Desde el formulario {roleId}</h1>

        <FieldsRoles roleId={roleId} />

        <div>
          <GoToRoles />
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            name="btn-guardar"
          >
            Actualizar
          </button>
        </div>
      </div>
    </form>
  );
}

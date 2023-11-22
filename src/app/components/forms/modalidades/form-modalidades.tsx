import { revalidatePath } from "next/cache";
import { saveModalidades } from "../../screens/actions/post/save-modalidades";
import FieldsModalidades from "./fields-modalidades";
import { fields } from "@hookform/resolvers/ajv/src/__tests__/__fixtures__/data.js";
import FieldsModal from "./fields-modalidad";

export default function FormModalidades({ modalidadId = "modalidades" }) {
  const crearModalidad = async (formData: FormData) => {
    "use server";
    const data = await saveModalidades(formData);

    revalidatePath("/modalidades");
  };

  return (
    <form action={crearModalidad}>
      <div>
        <FieldsModal fields={fields} />
        <div>
          <button
            type='submit'
            className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
            name='btn-guardar'
          >
            Guardar
          </button>
        </div>
      </div>
    </form>
  );
}

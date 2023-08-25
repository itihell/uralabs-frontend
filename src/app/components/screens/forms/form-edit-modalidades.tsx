import { redirect } from "next/navigation";

import FieldsModalidades from "./fields-modalidades";
import { updateModalidad } from "../actions/post/save-modalidades";

export default function FormEditModalidades({ modalidadId = 0 }) {
  const actualizarModalidad = async (formData: FormData) => {
    "use server";
    const data = await updateModalidad(modalidadId, formData);

    redirect("/modalidades");
  };
  return (
    <form action={actualizarModalidad}>
      <div>
        <h1>Desde el formulario {modalidadId}</h1>

        <FieldsModalidades modalidadId={modalidadId} />

        <div>
          {/* <GoToModalidades /> */}
          <button
            type='submit'
            className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
            name='btn-guardar'
          >
            Actualizar
          </button>
        </div>
      </div>
    </form>
  );
}

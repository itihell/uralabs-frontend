import { getRoles } from "@/app/actions/post/save-roles";
import { revalidatePath } from "next/cache";
import { getAllCarreras, getAllLaboratorio, getAllModalidades, saveLabUse } from "../../../actions/post/save-labUse";

const crearRegistro = async (formData: FormData) => {
  "use server"
  const data = await saveLabUse(formData);
  revalidatePath("/uselab");
}


export default async function FormAddLabUse({ roleId = 0 }) {
  let fields: any = {};
  if (roleId > 0) {
    fields = await getRoles(roleId);

  }


  const carreras = await getAllCarreras();
  const modalidades = await getAllModalidades();
  const laboratorios = await getAllLaboratorio();
  // const TableLabUse = async () => {
  //   revalidatePath("/laboratory-use");
  //   const data = await getAllLabUse();
    
  //   return (
  //     <ul>
  //       {Object.values(data).map((uselab: any) => (
  //         <li key={`uselabs-${uselab.id}`}>
  //           {uselab.id}
  //           {/* Otros campos de datos si los hay */}
  //         </li>
  //       ))}
  //     </ul>
       
  //   );
  // }
  
  
  return (
    <form action={crearRegistro}>
    <div>
      {/* <input type="number" id="id" name="id" defaultValue={fields.id || ""} /> */}
      <div>
        <label
          htmlFor='role'
          className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
        >
          Nombre de la clase
        </label>
      </div>
      <div className='mb-6'>
        <input
          type='text'
          name='role'
          id='role'
          defaultValue={fields.role || ""}
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-150 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
        />
      </div>
      <div className="mb-6">
      <div>
        <label htmlFor="teacher" className="block mb-4 text-sm font-medium text-gray-900 dark:text-black">Carrera</label>
      </div>
      <select
          id="underline_select"
          className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="carrera">
            Seleccionar Carrera
          </option>
          {carreras.map((carrera: any) => (
            <option key={carrera.id} value={carrera.id}>
              {carrera.nombre}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="teacher" className="block mb-4 text-sm font-medium text-gray-900 dark:text-black">Docente</label>
      </div>
      <div className="mb-6">
        <input
          type="text"
          name="teacher"
          id="teacher"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div>
        <label htmlFor="date" className="block mb-4 text-sm font-medium text-gray-900 dark:text-black">Fecha</label>
      </div>
      <div className="mb-6">
        <input
          type="text"
          name="date"
          id="date"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div>
        <label htmlFor="modality" className="block mb-4 text-sm font-medium text-gray-900 dark:text-black">Modalidad</label>
      </div>
      <div className="mb-6">
      <select
          id="underline_select"
          className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="modalidad">
            Seleccionar Carrera
          </option>
          {modalidades.map((modalidad: any) => (
            <option key={modalidad.id} value={modalidad.id}>
              {modalidad.modalidad}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="shift" className="block mb-4 text-sm font-medium text-gray-900 dark:text-black">Turno</label>
      </div>
      <div className="mb-6">
        <input
          type="text"
          name="shift"
          id="shift"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div>
        <label htmlFor="year" className="block mb-4 text-sm font-medium text-gray-900 dark:text-black">Año</label>
      </div>
      <div className="mb-6">
        <input
          type="text"
          name="year"
          id="year"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div>
        <label htmlFor="semester" className="block mb-4 text-sm font-medium text-gray-900 dark:text-black">Semestre</label>
      </div>
      <div className="mb-6">
        <input
          type="text"
          name="semester"
          id="semester"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div>
        <label htmlFor="hours" className="block mb-4 text-sm font-medium text-gray-900 dark:text-black">Mujeres</label>
      </div>
      <div className="mb-6">
        <input
          type="text"
          name="hours"
          id="hours"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div>
        <label htmlFor="hours" className="block mb-4 text-sm font-medium text-gray-900 dark:text-black">Varones</label>
      </div>
      <div className="mb-6">
        <input
          type="text"
          name="hours"
          id="hours"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div>
        <label htmlFor="total" className="block mb-4 text-sm font-medium text-gray-900 dark:text-black">Total</label>
      </div>
      <div className="mb-6">
        <input
          type="text"
          name="total"
          id="total"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div>
        <label htmlFor="hours" className="block mb-4 text-sm font-medium text-gray-900 dark:text-black">Horas</label>
      </div>
      <div className="mb-6">
        <input
          type="text"
          name="hours"
          id="hours"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div className="mb-6">
      <label htmlFor="hours" className="block mb-4 text-sm font-medium text-gray-900 dark:text-black">Laboratorio</label>
      <select
          id="underline_select"
          className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="laboratorio" >
            Seleccionar Laboratorio
          </option>
          {laboratorios.map((laboratorio: any) => (
            <option key={laboratorio.id} value={laboratorio.id}>
              {laboratorio.labName}
            </option>
          ))}
        </select>
      </div>
      <div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            name="btn-guardar"
          >
            Guardar
          </button>
          </div>
      
    </div>
    </form>
    
  );
}

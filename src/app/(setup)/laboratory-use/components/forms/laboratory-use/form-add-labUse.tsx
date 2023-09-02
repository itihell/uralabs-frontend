import { getRoles } from "@/app/actions/post/save-roles";

export default async function FormAddLabUse({ roleId = 0 }) {
  let fields: any = {};
  if (roleId > 0) {
    fields = await getRoles(roleId);
  }

  return (
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
        <input
          type="text"
          name="academyArea"
          id="academyArea"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>

      <div>
        <label htmlFor="career" className="block mb-4 text-sm font-medium text-gray-900 dark:text-black">Carrera</label>
      </div>
      <div className="mb-6">
        <select id="underline_select" className="  block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option selected>Seleccionar Carrera</option>
          <option value="US">{ }</option>
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
        <input
          type="text"
          name="modality"
          id="modality"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
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
        <label htmlFor="total" className="block mb-4 text-sm font-medium text-gray-900 dark:text-black">Cantidad</label>
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
    </div>
  );
}

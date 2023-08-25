import getModalidades from "../actions/get/get-modalidades";

export default async function FieldsModalidades({ modalidadId = 0 }) {
  let fields: any = {};
  if (modalidadId > 0) {
    fields = await getModalidades(modalidadId);
  }
  return (
    <>
      <div>
        <label
          htmlFor='modalidad'
          className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
        >
          Modalidad
        </label>
      </div>
      <div className='mb-6'>
        <input
          type='text'
          name='modalidad'
          id='modalidad'
          defaultValue={fields.modalidad || ""}
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
        />
      </div>
      <div>
        <label
          htmlFor='Carrera'
          className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
        >
          Carrera
        </label>
      </div>{" "}
      <div className='mb-2'>
        <input
          type='text'
          name='carrera'
          id='carrera'
          defaultValue={fields.carrera || ""}
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
        />
      </div>
    </>
  );
}

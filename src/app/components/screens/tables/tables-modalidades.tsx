import getModalidades from "../actions/get/get-modalidades";
import Link from "next/link";

const TablesModalidades = async () => {
  const { data } = await getModalidades();
  return (
    <div>
      <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
        <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400 sm:rounded-lg'>
          <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
            <tr>
              <th className='px-6 py-3'>ID</th>
              <th className='px-6 py-3'>Modalidades</th>
              <th className='px-6 py-3'>Config</th>
            </tr>
          </thead>
          <tbody className='bg-white border-b dark:bg-gray-900 dark:border-gray-700'>
            {Object.values(data).map((modalidades: any) => (
              <tr key={`modalidades-${modalidades.id}`}>
                <td className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                  {modalidades.id}
                </td>
                <td className='px-6 py-4'> {modalidades.modalidad}</td>

                <td className='px-6 py-4'>
                  <div>
                    <Link
                      href={`/modalidades/delete/${modalidades.id}`}
                      className='bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mr-2'
                    >
                      Eliminar
                    </Link>
                    <Link
                      href={`/modalidades/edit/${modalidades.id}`}
                      className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded'
                    >
                      Editar
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default TablesModalidades;

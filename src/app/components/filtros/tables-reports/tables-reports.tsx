import { revalidatePath } from "next/cache";
import { IconTrashFilled } from "@tabler/icons-react";

import { DocentesModalidades } from "@/app/interfaces/docentes-modalidades";

interface TablesReports {
  onDeleted: (e: any) => void;
  onUpdated: (e: any) => void;
  reports: DocentesModalidades[];
}

const TablesReports = ({ reports }: TablesReports) => {
  return (
    <div>
      <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
        <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400 sm:rounded-lg'>
          <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
            <tr>
              <th className='px-6 py-3'>ID</th>
              <th className='px-6 py-3'>Fecha</th>
              <th className='px-6 py-3'>Horas</th>
              <th className='px-6 py-3'>Carrera</th>
              <th className='px-6 py-3'>Docente</th>
              <th className='px-6 py-3'>Apellido</th>
            </tr>
          </thead>
          <tbody className='bg-white border-b dark:bg-gray-900 dark:border-gray-700'>
            {Object.values(reports).map((reports: any) => (
              <tr key={`reports-${reports.id}`}>
                <td className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                  {reports.id}
                </td>
                <td className='px-6 py-4'> {reports.fecha}</td>
                <td className='px-6 py-4'> {reports.horas}</td>
                <td className='px-6 py-4'> {reports.carrera}</td>
                <td className='px-6 py-4'> {reports.docente}</td>
                <td className='px-6 py-4'> {reports.apellido}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TablesReports;

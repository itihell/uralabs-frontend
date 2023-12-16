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
              <th className='px-6 py-3'>Docente</th>
              <th className='px-6 py-3'>Asignatura</th>
              <th className='px-6 py-3'>Horas</th>
              <th className='px-6 py-3'>Mes</th>
              <th className='px-6 py-3'>Año</th>
            </tr>
          </thead>
          <tbody className='bg-white border-b dark:bg-gray-900 dark:border-gray-700'>
            {Object.values(reports).map((reports: any, index: number) => (
              <tr key={`reports-${index + 1}`}>
                <td className='px-6 py-4'>{reports.id}</td>
                <td className='px-6 py-4'> {reports.docente}</td>
                <td className='px-6 py-4'> {reports.asignatura}</td>
                <td className='px-6 py-4'> {reports.horas}</td>
                <td className='px-6 py-4'> {reports.mes}</td>
                <td className='px-6 py-4'> {reports.anio}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TablesReports;

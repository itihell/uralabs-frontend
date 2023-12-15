import ButtonDeleteAsignatura from "../forms/asignatura/button-delete-asignatura";
import ButtonEditAsignatura from "../forms/asignatura/button-edit-asignatura";

import {Asignatura} from "@/app/interfaces/asignatura-interfaces";

interface TableAsignaturaProps {
  onDeleted: (e: Asignatura) => void;
  onUpdated: (e: Asignatura) => void;
  asignaturas: Asignatura[];
}

const TableAsignatura = async ({asignaturas, onDeleted, onUpdated}: TableAsignaturaProps) => {
  const handlerOnDeleted = async (asignatura: Asignatura) => {
    onDeleted(asignatura);
  };

  const handlerOnUpdate = async (asignatura: Asignatura) => {
    onUpdated(asignatura);
  };
  return (
    <div>
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 sm:rounded-lg">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr className="text-center">
            <th className="px-6 py-3">ID</th>
            <th className="px-6 py-3">Asignatura</th>
            {/* <th className="px-6 py-3">Activo</th> */}
            <th className="px-6 py-3">Config</th>
          </tr>
        </thead>
        <tbody className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
        {asignaturas && Object.values(asignaturas).map((asignatura: any) => (
            <tr key={`asignatura-${asignatura.id}`}>
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {asignatura.id}
              </td>
              <td className="px-6 py-4"> {asignatura.nombre}</td>
              <td className="px-6 py-4">
                <div className="flex flex-row items-center justify-end">
                  <ButtonDeleteAsignatura
                    onDeleted={async (e) => {
                      await handlerOnDeleted(e);
                    }}
                    id={asignatura.id}
                  />
                  <ButtonEditAsignatura
                    onSaved={async (e) => {
                      await handlerOnUpdate(e);
                    }}
                    id={asignatura.id}
                  />
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
export default TableAsignatura;

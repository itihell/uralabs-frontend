import { revalidatePath } from "next/cache";
import { getPracticantes } from "../actions/post/save-practicantes";

import ButtonDeletePracticante from "../forms/practicante/button-delete-practicante";
import ButtonEditPracicante from "../forms/practicante/button-edit-practicante";

const TablePracticante = async () => {
  revalidatePath("practicante");
  const data = await getPracticantes();
  console.log(data);

  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 sm:rounded-lg">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th className="px-6 py-3">ID</th>
              <th className="px-6 py-3">Nombre</th>
              <th className="px-6 py-3">Carrera</th>
              <th className="px-6 py-3">Fecha_inicio</th>
              <th className="px-6 py-3">Fecha_fin</th>
              <th className="px-6 py-3">Cantidad_horas</th>
              <th className="px-6 py-3">config</th>
            </tr>
          </thead>
          <tbody className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
            {Object.values(data).map((practicante: any) => (
              <tr key={`practicante-${practicante.id}`}>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {practicante.id}
                </td>
                <td className="px-6 py-4"> {practicante.nombre}</td>
                <td className="px-6 py-4"> {practicante.carrera}</td>
                <td className="px-6 py-4"> {practicante.fecha_inicio}</td>
                <td className="px-6 py-4"> {practicante.fecha_fin}</td>
                <td className="px-6 py-4"> {practicante.cantidad_horas}</td>
                <td className="px-6 py-4">
                  <div className="flex flex-row items-center justify-end">
                    <ButtonDeletePracticante id={practicante.id} />
                    <ButtonEditPracicante id={practicante.id} />
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
export default TablePracticante;

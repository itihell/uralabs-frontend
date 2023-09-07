import { revalidatePath } from "next/cache";
import { getCortePracticas } from "../actions/post/save-corte-practicas";
import ButtonDeleteCorte from "../forms/corte-practicas/button-delete-corte";
import ButtonEditCorte from "../forms/corte-practicas/button-edit-corte";

const TableCortePractica = async () => {
  revalidatePath("/horas-practicas/corte-practica");
  const data = await getCortePracticas();
  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 sm:rounded-lg">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th className="px-6 py-3">ID</th>
              <th className="px-6 py-3">Practicante</th>
              <th className="px-6 py-3">Fecha Corte</th>
              <th className="px-6 py-3">Horas Actuales</th>
              <th className="px-6 py-3">Horas Totales</th>
              <th className="px-6 py-3">config</th>
            </tr>
          </thead>
          <tbody className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
            {Object.values(data).map((corte: any) => (
              <tr key={`corte-${corte.id}`}>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {corte.id}
                </td>
                <td className="px-6 py-4"> {corte.practicante}</td>
                <td className="px-6 py-4"> {corte.fecha_corte}</td>
                <td className="px-6 py-4"> {corte.horas_actuales}</td>
                <td className="px-6 py-4"> {corte.horas_totales}</td>
                <td className="px-6 py-4">
                  <div className="flex flex-row items-center justify-end">
                    <ButtonDeleteCorte id={corte.id} />
                    <ButtonEditCorte id={corte.id} />
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

export default TableCortePractica;

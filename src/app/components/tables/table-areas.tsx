import { revalidatePath } from "next/cache";
import { getAllAreas } from "@/app/actions/post/save-areas";
import ButtonDeleteArea from "../forms/areas/button-delete-area";
import ButtonEditArea from "../forms/areas/button-edit-area";

const TableAreas = async () => {
  revalidatePath("/registro-area");
  const data = await getAllAreas();

  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 sm:rounded-lg">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th className="px-6 py-3">ID</th>
              <th className="px-6 py-3">Area</th>
              <th className="px-6 py-3">Config</th>
            </tr>
          </thead>
          <tbody className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
            {Object.values(data).map((area: any) => (
              <tr key={`registro-area-${area.id}`}>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{area.id}</td>
                <td className="px-6 py-4"> {area.nombre}</td>
                <td className="px-6 py-4">
                  <div className="flex flex-row items-center justify-end">
                    <ButtonDeleteArea id={area.id} />
                    <ButtonEditArea id={area.id} />
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
export default TableAreas;

import { revalidatePath } from "next/cache";
import ButtonEditCarrera from "../forms/carreras/button-edit-carrera";
import { Carrera } from "@/app/interfaces/carreras-interfaces";
import ButtonDeletecarrera from "../forms/carreras/button-delete-carrera";

interface TableCarrerasProps {
  onDeleted: (e: Carrera) => void;
  onUpdated: (e: Carrera) => void;
  carreras: Carrera[];
}

const TableCarreras = ({ carreras, onDeleted, onUpdated }: TableCarrerasProps) => {
  const handlerOnDeleted = async (car: Carrera) => {
    onDeleted(car);
  };

  const handlerOnUpdate = async (car: Carrera) => {
    onUpdated(car);
  }

  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 sm:rounded-lg">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th className="px-6 py-3">ID</th>
              <th className="px-6 py-3">Carrera</th>
              <th className="px-6 py-3">Area</th>
              <th className="px-6 py-3">Opciones</th>
            </tr>
          </thead>
          <tbody className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
            {Object.values(carreras).map((carreras: any) => (
              <tr key={`registro-carreras-${carreras.id}`}>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{carreras.id}</td>
                <td className="px-6 py-4"> {carreras.nombre}</td>
                <td className="px-6 py-4"> {carreras.area.nombre}</td>
                <td className="px-6 py-4">
                  <div className="flex flex-row items-center justify-end">

                    <ButtonDeletecarrera
                      onDeleted={async (e) => {
                        alert("Eliminado");
                        await handlerOnDeleted(e);
                      }}
                      id={carreras.id}
                    />
                    <ButtonEditCarrera
                      onSaved={async (e) => {
                        await handlerOnUpdate(e);
                      }}
                      id={carreras.id}
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
}

export default TableCarreras;

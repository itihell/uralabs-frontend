import feching from "@/app/utils/cliente-http";

export default async function ListAreas() {
  const getAllAreas = async () => {
    const endPoind = `/catalogos/areas`;
    const areas = await feching(endPoind, "no-store", "GET");
    return areas;
  };

  const dataRoles = await getAllAreas();
  return (
    <div className="my-8">
    <h1>Lista de Areas</h1>
    <select
    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    >
      {dataRoles.map((area: any) => {
        return <option key={`area-${area.id}`}>{area.nombre}</option>;
      })}
    </select>
    </div>
  );
}
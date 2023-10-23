import feching from "@/app/utils/cliente-http";


export default async function ListCortePracticante() {
  const getCortePracticas = async () => {
    const endPoind = "/catalogos/corte-practicas";
    const CortePractica = await feching(endPoind, "no-store", "GET");
    return CortePractica;
  };

  const dataCortePractica = await getCortePracticas();
  return (
    <div className="my-8">
      <h1>Lista de Corte de Practica</h1>
      <select
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
      {dataCortePractica.map((CortePractica: any) => {
        return <option key={`CortePractica-${CortePractica.id}`}>{CortePractica.fecha_corte}</option>;
      })}
    </select>
    </div>
    
  );
}

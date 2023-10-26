import feching from "@/app/utils/cliente-http";

export default async function ListUsoLab() {
  const getUselab = async () => {
    const endPoind = "/catalogos/uselab";
    const uselab = await feching(endPoind, "no-store", "GET");
    return uselab;
  };

  const uselab = await getUselab();
  return (
   <div className="mt-8">
    <h1>Uso de laboratorio</h1>
    <select
    className="mt-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    >
    <option key="default">usoLab</option>
      {uselab.map((uselab: any) => {
            return <option key={`uselab-${uselab.id}`}>{`El docente ${uselab.teacher} reservo el laboratorio`}</option>;
      })}
    </select>
    </div>
  );
}
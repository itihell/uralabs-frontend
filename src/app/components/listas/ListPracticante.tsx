import feching from "@/app/utils/cliente-http";

export default async function ListPracticante() {
    const getPracticante = async () => {
        const endPoind = "/practicante";
        const practicante = await feching(endPoind, "no-store", "GET");
        return practicante.data;
    };

    const practicante = await getPracticante();
    return (
        <select
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
            <option key="default">Practicante</option>
            {practicante.map((practicante: any) => (
                <option key={`practicante-${practicante.id}`}>{practicante.nombre}</option>
            ))}
        </select>
    );
}

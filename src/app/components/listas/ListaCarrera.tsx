import feching from "@/app/utils/cliente-http";

export default async function ListCarrera() {
    const getCarrera = async () => {
        const endPoind = "/catalogos/registro-carreras";
        const carrera = await feching(endPoind, "no-store", "GET");
        return carrera;
    };

    const carrera = await getCarrera();
    return (
        <div className="my-8">
            <select
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
                <option key="default">Carreras</option>
                {carrera.map((carrera: any) => (
                    <option key={`carrera-${carrera.id}`}>{carrera.nombre}</option>
                ))}
            </select>

        </div>

    );
}

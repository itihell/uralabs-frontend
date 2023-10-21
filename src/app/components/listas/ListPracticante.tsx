import feching from "@/app/utils/cliente-http";

export default async function ListPracticante() {
    const getPracticante = async () => {
        const endPoind = "/catalogos/practicante";
        const practicante = await feching(endPoind, "no-store", "GET");
        return practicante;
    };

    const practicante = await getPracticante();
    return (
        <select className="bg-gray-400 flex flex-col mt-2">
            <option key="default">Practicante</option>
            {practicante.map((practicante: any) => (
                <option key={`practicante-${practicante.id}`}>{practicante.nombre}</option>
            ))}
        </select>
    );
}

import feching from "@/app/utils/cliente-http";


export default async function ListCortePracticante() {
  const getPracticante = async () => {
    const endPoind = "/corte-practicas";
    const practicante = await feching(endPoind, "no-store", "GET");
    return practicante.data;
  };

  const dataPracticante = await getPracticante();
  return (
    <div className="my-8">
      <h1>Lista de Cote de Practica</h1>
      <select>
      {dataPracticante.map((practicante: any) => {
        return <option key={`practicante-${practicante.id}`}>{practicante.practicante}</option>;
      })}
    </select>
    </div>
    
  );
}

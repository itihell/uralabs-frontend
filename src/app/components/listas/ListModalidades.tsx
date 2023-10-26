import feching from "@/app/utils/cliente-http";

export default async function ListModalidades() {
  const getModalidades = async () => {
    const endPoind = "/catalogos/modalidades";
    const roles = await feching(endPoind, "no-store", "GET");
    return roles;
  };

  const modalidades = await getModalidades();
  return (
    <div>
      <h1>List Modalidades</h1>
      <select>
        {modalidades.map((modalidades: any) => {
          return (
            <option key={`modalidad-${modalidades.id}`}>
              {modalidades.modalidad}
            </option>
          );
        })}
      </select>
    </div>
  );
}

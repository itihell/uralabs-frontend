import { UsoLab } from "../interfaces/usoLab-interfaces";
import feching from "../utils/cliente-http";

export function useLaboratorio() {
  const onStore = async (payload: UsoLab) => {
    const { male, female, className, carrera, docente, modality, laboratorio, ...restPayload } = payload;
  
    // Asegurémonos de que las propiedades problemáticas sean objetos completos
    const formattedPayload = {
      ...restPayload,
      total: Number(male) + Number(female),
      male: Number(male),
      female: Number(female),
      className: { id: Number(className) },  // Ajusta el formato según lo que espere el servidor
      carrera: { id: Number(carrera) },      // Ajusta el formato según lo que espere el servidor
      docente: { id: Number(docente) },      // Ajusta el formato según lo que espere el servidor
      modality: { id: Number(modality) },    // Ajusta el formato según lo que espere el servidor
      laboratorio: { id: Number(laboratorio) },  // Ajusta el formato según lo que espere el servidor
    };
  
    console.log(formattedPayload);
  
    const url = `/uselab`;
  
    const rest = await feching(url, "no-store", "POST", formattedPayload);
  
    console.log(rest);
    return rest;
  };
  

  const onShowAll = async (id: number) => {
    const url = `/uselab?z=1${id}`;
    const rest = await feching(url, "no-cache", "GET");
    return rest;
  };

  const onDelete = async (id: number) => {
    const url = `/uselab/${id}`;
    const rest = await feching(url, "no-cache", "DELETE");
    return rest;
  };

  const onUpdate = async (id: number, payload: UsoLab) => {
    const url = `/uselab/${id}`;
    const rest = await feching(url, "no-store", "PUT", payload);
    return rest;
  };

  const onShow = async (id: number) => {
    const url = `/uselab/${id}`;
    const rest = await feching(url, "no-cache", "GET");
    return rest;
  }

  return {
    onShowAll,
    onStore,
    onDelete,
    onUpdate,
    onShow
  };
}


import { Carrera } from "../interfaces/carreras-interfaces";
import feching from "../utils/cliente-http";

export function UseCarreras() {
  const onStore = async (payload: Carrera) => {
    const url = `/registro-carreras`;

    const rest = await feching(url, "no-store", "POST", payload);
    return rest;
  };

  const onShowAll = async (params: string) => {
    const url = `/registro-carreras?z=1${params}`;
    const rest = await feching(url, "no-cache", "GET");
    return rest;
  };

  const onDelete = async (id: number) => {
    const url = `/registro-carreras/${id}`;
    const rest = await feching(url, "no-cache", "DELETE");
    return rest;
  };

  const onUpdate = async (id: number, payload: Carrera) => {
    const url = `/registro-carreras/${id}`;
    const rest = await feching(url, "no-store", "PUT", payload);
    return rest;
  };

  const onShow = async (id: number) => {
    const url = `/registro-carreras/${id}`;
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

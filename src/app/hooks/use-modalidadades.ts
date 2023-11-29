import { Modalidad } from "../interfaces/modalidades-interface";
import feching from "../utils/cliente-http";

export function useModalidad() {
  const onStore = async (payload: Modalidad) => {
    const url = `/modalidades`;

    const rest = await feching(url, "no-store", "POST", payload);
    return rest;
  };

  const onShowAll = async (params: string) => {
    const url = `/modalidades?z=1${params}`;
    const rest = await feching(url, "no-cache", "GET");
    return rest;
  };

  const onDelete = async (id: number) => {
    const url = `/modalidades/${id}`;
    const rest = await feching(url, "no-cache", "DELETE");
    console.log(rest);
    return rest;
  };

  const onUpdate = async (id: number, payload: Modalidad) => {
    const url = `/modalidades/${id}`;
    const rest = await feching(url, "no-store", "PUT", payload);
    console.log(rest);
    return rest;
  };

  const onShow = async (id: number) => {
    const url = `/modalidades/${id}`;
    const rest = await feching(url, "no-cache", "GET");
    return rest;
  };

  return {
    onShowAll,
    onStore,
    onDelete,
    onUpdate,
    onShow,
  };
}

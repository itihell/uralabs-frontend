import { Asignatura } from "../interfaces/asignatura-interfaces";
import feching from "../utils/cliente-http";

export function useAsignatura() {
  const onStore = async (payload: Asignatura) => {
    const url = `/asignatura`;

    const rest = await feching(url, "no-store", "POST", payload);
    return rest;
  };

  const onShowAll = async (params: string) => {
    const url = `/asignatura?z=1${params}`;
    const rest = await feching(url, "no-cache", "GET");
    return rest;
  };

  const onDelete = async (id: number) => {
    const url = `/asignatura/${id}`;
    const rest = await feching(url, "no-cache", "DELETE");
    return rest;
  };

  const onUpdate = async (id: number, payload: Asignatura) => {
    const url = `/asignatura/${id}`;
    const rest = await feching(url, "no-store", "PUT", payload);
    return rest;
  };

  const onShow = async (id: number) => {
    const url = `/asignatura/${id}`;
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

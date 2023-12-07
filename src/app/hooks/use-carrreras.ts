import { Carrera } from "../reservations/utils/api";
import feching from "../utils/cliente-http";

export function useCarreras() {
  const onStore = async (payload: Carrera) => {
    const url = `/carreras`;

    const rest = await feching(url, "no-store", "POST", payload);
    return rest;
  };

  const onShowAll = async (params: string) => {
    const url = `/carreras?z=1${params}`;
    const rest = await feching(url, "no-cache", "GET");
    return rest;
  };

  const onDelete = async (id: number) => {
    const url = `/carreras/${id}`;
    const rest = await feching(url, "no-cache", "DELETE");
    return rest;
  };

  const onUpdate = async (id: number, payload: Carrera) => {
    const url = `/carreras/${id}`;
    const rest = await feching(url, "no-store", "PUT", payload);
    return rest;
  };

  const onShow = async (id: number) => {
    const url = `/carreras/${id}`;
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

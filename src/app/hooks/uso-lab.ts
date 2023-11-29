import { UsoLab } from "../interfaces/usoLab-interfaces";
import feching from "../utils/cliente-http";

export function useLaboratorio() {
  const onStore = async (payload: UsoLab) => {
    
    const url = `/uselab`;

    const rest = await feching(url, "no-store", "POST", payload);
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

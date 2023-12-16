import feching from "../utils/cliente-http";
import { Modalidades } from "../interfaces/modalidades-interface";
export default function useDocentesModalidades() {
  const onShowAll = async (params: string) => {
    const url = `/report-modalidades/modalidades?z=1${params}`;
    const rest = await feching(url, "no-cache", "GET");
    console.log(rest);
    return rest;
  };

  return {
    onShowAll,
  };
}

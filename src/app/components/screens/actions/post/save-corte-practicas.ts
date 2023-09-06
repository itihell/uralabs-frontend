"use server";

import feching from "@/app/utils/cliente-http";
//corte-practicas
export async function saveCortePractica(request: FormData) {
  const data = {
    cortePractica: request.get("corte-practicas"),
  };
  const endPoind = `/corte-practica`;
  const cortePractica = await feching(endPoind, "no-store", "POST", data);

  if (!cortePractica.data) {
    throw new Error(cortePractica.error);
  }

  return cortePractica.data;
}
export async function updateCortePractica(id: number, request: FormData) {
  const data = {
    cortePractica: request.get("corte-practicas"),
  };
  const endPoind = `/corte-practica/${id}`;
  const cortePractica = await feching(endPoind, "no-store", "PUT", data);

  if (!cortePractica.data) {
    throw new Error(cortePractica.error);
  }

  return cortePractica.data;
}
export async function getCortePractica(id: number) {
  const endPoind = `/corte-practica/${id}`;
  const cortePractica = await feching(endPoind, "no-store", "GET");
  if (!cortePractica.data) {
    throw new Error(cortePractica);
  }
  return cortePractica.data;
}
export async function getCortePracticas() {
  const endPoind = `/corte-practica`;
  const cortePractica = await feching(endPoind, "no-store", "GET");
  if (!cortePractica.data) {
    throw new Error(cortePractica);
  }
  return cortePractica.data;
}
export async function deleteCortePractica(id: number) {
  const endPoind = `/corte-practica/${id}`;
  const cortePractica = await feching(endPoind, "no-store", "DELETE");
  if (!cortePractica.data) {
    throw new Error(cortePractica);
  }
  return cortePractica.data;
}

"user-server";

import feching from "@/app/utils/cliente-http";
export async function savePracticante(request: FormData) {
  const data = {
    practicante: request.get("practicante"),
  };
  const endPoind = `/practicante`;
  const practicante = await feching(endPoind, "no-store", "POST", data);

  if (!practicante.data) {
    throw new Error(practicante.error);
  }

  return practicante.data;
}
export async function updatePracticante(id: number, request: FormData) {
  const data = {
    practicante: request.get("practicante"),
  };
  const endPoind = `/practicante/${id}`;
  const practicante = await feching(endPoind, "no-store", "PUT", data);

  if (!practicante.data) {
    throw new Error(practicante.error);
  }

  return practicante.data;
}
export async function getPracticante(id: number) {
  const endPoind = `/practicante/${id}`;
  const practicante = await feching(endPoind, "no-store", "GET");
  if (!practicante.data) {
    throw new Error(practicante);
  }
  return practicante.data;
}
export async function getPracticantes() {
  const endPoind = `/practicante`;
  const practicante = await feching(endPoind, "no-store", "GET");
  if (!practicante.data) {
    throw new Error(practicante);
  }
  return practicante.data;
}
export async function deletePracticante(id: number) {
  const endPoind = `/practicante/${id}`;
  const practicante = await feching(endPoind, "no-store", "DELETE");
  if (!practicante.data) {
    throw new Error(practicante);
  }
  return practicante.data;
}
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

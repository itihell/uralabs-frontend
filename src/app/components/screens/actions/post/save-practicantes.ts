"use server";

import feching from "@/app/utils/cliente-http";

export async function savePracticante(request: FormData) {
  const data = {
    nombre: request.get("nombre"),
    carrera: request.get("carrera"),
    fecha_inicio: request.get("fecha_inicio"),
    fecha_fin: request.get("fecha_fin"),
    cantidad_horas: request.get("cantidad_horas"),
  };

  const endPoind = `/practicante`;

  const practicante = await feching(endPoind, "no-store", "POST", data);

  if (!practicante.data) {
    const error = {
      error: practicante.error,
    };
    return error;
  }

  return practicante.data;
}

export async function updatePracticante(id: number, request: FormData) {
  const data = {
    nombre: request.get("nombre"),
    carrera: request.get("carrera"),
    fecha_inicio: request.get("fecha_inicio"),
    fecha_fin: request.get("fecha_fin"),
    cantidad_horas: request.get("cantidad_horas"),
  };

  const endPoind = `/practicante/${id}`;

  const practicante = await feching(endPoind, "no-store", "PUT", data);

  if (!practicante.data) {
    const error = {
      error: practicante.error,
    };
    return error;
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

export const deletePracticanteById = async (id: number) => {
  const endPoind = `/practicante/${id}`;

  const practicante = await feching(endPoind, "no-store", "DELETE");
  console.log(practicante);

  if (!practicante.data) {
    throw new Error(practicante);
  }

  return practicante.data;
};

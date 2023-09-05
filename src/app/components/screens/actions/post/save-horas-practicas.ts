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

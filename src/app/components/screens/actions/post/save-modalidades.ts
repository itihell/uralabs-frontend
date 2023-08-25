"use server";

import feching from "@/app/utils/cliente-http";

export async function saveModalidades(request: FormData) {
  const data = {
    modalidad: request.get("modalidad"),
  };
  const endPoind = `/modalidades`;

  const modalidades = await feching(endPoind, "no-store", "POST", data);

  if (!modalidades.data) {
    throw new Error(modalidades.error);
  }

  return modalidades.data;
}

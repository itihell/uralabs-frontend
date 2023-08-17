"use server";

import getHeadersGlobal from "@/app/utils/header-global";
import { redirect } from "next/navigation";

export async function deleteRoles(request: FormData) {
  const data = {
    id: request.get("id"),
  };
  try {
    const url = `${process.env.API_BASE_URL}/roles/${data.id}`;
    const headers = getHeadersGlobal();
    const roles = await fetch(url, {
      method: "DELETE",
      cache: "no-store",
      headers: headers,
      body: JSON.stringify(data),
    }).then((res) => res.json());
    
    redirect("/roles");
  } catch (error) {
    
    throw new Error(error);
  }
}

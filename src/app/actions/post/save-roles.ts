"use server";

import getHeadersGlobal from "@/app/utils/header-global";
import { redirect } from "next/navigation";

export default async function saveRoles(request: FormData) {
  const data = {
    role: request.get("role"),
  };
  try {
    const url = `${process.env.API_BASE_URL}/roles`;
    const headers = getHeadersGlobal();
    const roles = await fetch(url, {
      method: "POST",
      cache: "no-store",
      headers: headers,
      body: JSON.stringify(data),
    }).then((res) => res.json());
    if (!roles.data) {
      throw new Error(roles.error);
    }
    redirect("/roles");
  } catch (error) {
    console.log({ error });
    throw new Error(error);
  }
}

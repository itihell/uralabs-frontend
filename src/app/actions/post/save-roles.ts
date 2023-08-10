"use server";

import getHeadersGlobal from "@/app/utils/header-global";
import { redirect } from "next/navigation";

export default async function saveRoles(request: FormData) {
  const data = {
    role: request.get("role"),
  };
  const url = `${process.env.API_BASE_URL}/roles`;
  const headers = getHeadersGlobal();
  const roles = await fetch(url, {
    method: "POST",
    cache: "no-store",
    headers: headers,
    body: JSON.stringify(data),
  }).then((res) => res.json());

  redirect("/roles");
}

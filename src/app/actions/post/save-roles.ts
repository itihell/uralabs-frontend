"use server";

import getHeadersGlobal from "@/app/utils/header-global";
import { redirect } from "next/navigation";

export async function saveRoles(request: FormData) {
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
    redirect("/");
  } catch (error) {
    console.log({ error });
    throw new Error(error);
  }
}

export const updateRole = async (request: FormData) => {
  const data = {
    role: request.get("role"),
  };
  const id = request.get("id");
  try {
    const url = `${process.env.API_BASE_URL}/roles/${id}`;
    const headers = getHeadersGlobal();
    const roles = await fetch(url, {
      method: "PUT",
      cache: "no-store",
      headers: headers,
      body: JSON.stringify(data),
    }).then((res) => res.json());
    console.log(JSON.stringify(roles));

    if (!roles.data) {
      throw new Error(roles.error);
    }
    redirect("/roles");
  } catch (error) {
    console.log({ error });
    throw new Error(error);
  }
};

export const getRoles = async (id: number) => {
  const url = `${process.env.API_BASE_URL}/roles/${id}`;
  const headers = getHeadersGlobal();
  const roles = await fetch(url, {
    method: "GET",
    cache: "no-store",
    headers: headers,
  }).then((res) => res.json());
  if (!roles.data) {
    throw new Error(roles);
  }

  return roles.data;
};

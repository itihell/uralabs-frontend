"use server";

import getHeadersGlobal from "@/app/utils/header-global";

export async function saveRoles(request: FormData) {
  const data = {
    role: request.get("role"),
  };

  const url = `${process.env.API_BASE_URL}/roles`;
  const headers = getHeadersGlobal();
  const roles = await fetch(url, {
    method: "POST",
    cache: "no-store",
    next: { revalidate: 0 },
    headers: headers,
    body: JSON.stringify(data),
  }).then((res) => res.json());
  if (!roles.data) {
    throw new Error(roles.error);
  }

  return roles.data;
}

export const updateRole = async (id: number, request: FormData) => {
  const data = {
    role: request.get("role"),
  };

  const url = `${process.env.API_BASE_URL}/roles/${id}`;
  const headers = getHeadersGlobal();
  const roles = await fetch(url, {
    method: "PUT",
    cache: "no-store",
    headers: headers,
    body: JSON.stringify(data),
  }).then((res) => res.json());

  if (!roles.data) {
    throw new Error(roles.error);
  }

  return roles.data;
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

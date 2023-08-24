import getHeadersGlobal from "../../utils/header-global";
export default async function getRolesUser() {
  const url = `${process.env.API_BASE_URL}/roles`;
  const headers = getHeadersGlobal();

  const roles = await fetch(url, {
    method: "GET",
    cache: "no-store",
    next: { revalidate: 0 },
    headers: headers,
  }).then((res) => res.json());

  if (!roles.data) {
    throw new Error(roles.message);
  }

  return roles;
}

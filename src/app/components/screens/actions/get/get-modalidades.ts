import getHeadersGlobal from "@/app/utils/header-global";
export default async function getModalidades() {
  const url = `${process.env.API_BASE_URL}/modalidades`;
  const headers = getHeadersGlobal();

  const modalidades = await fetch(url, {
    method: "GET",
    cache: "no-store",
    next: { revalidate: 0 },
    headers: headers,
  }).then((res) => res.json());

  if (!modalidades.data) {
    throw new Error(modalidades.message);
  }

  return modalidades;
}

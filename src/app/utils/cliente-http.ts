import getHeadersGlobal from "./header-global";

const feching = async (
  endPoint: string,
  cache: string = "no-store",
  metodo: string,
  body: any = null
) => {
  const headers = getHeadersGlobal();
  const url = `${process.env.API_BASE_URL}${endPoint}`;
  const data = await fetch(url, {
    method: metodo,
    cache: cache,
    headers: headers,
    body: JSON.stringify(body),
  }).then((res) => res.json());

  return data;
};

export default feching;

import getHeadersGlobal from "./header-global";

interface optionsClienteHttp {
  method?: string;
  cache?: RequestCache;
  headers?: any;
  body?: any;
}

const feching = async (
  endPoint: string,
  cache: RequestCache = "no-store",
  metodo: string,
  body: any = null
) => {
  const headers = getHeadersGlobal();
  const url = `${process.env.API_BASE_URL}${endPoint}`;
  const options: optionsClienteHttp = {};

  options.method = metodo;
  options.cache = cache;
  options.headers = headers;
  console.log("body", body);

  if (body) options.body = JSON.stringify(body);

  const data = await fetch(url, options).then((res) => res.json());

  return data;
};

export default feching;

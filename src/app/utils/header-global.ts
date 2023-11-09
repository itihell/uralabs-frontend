"use server";
const getHeadersGlobal = () => {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const headers = new Map();
  headers.set("Content-Type", "application/json");
  headers.set("api-key", apiKey);

  return headers;
};

export default getHeadersGlobal;

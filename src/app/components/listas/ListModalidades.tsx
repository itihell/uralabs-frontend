"use client";
import feching from "@/app/utils/cliente-http";
import SelectSearch from "../select/select";
import { useEffect, useState } from "react";

export default function ListModalidades() {
  const [modalidades, setModalidades] = useState([]);

  const searchData = async (buscar = "") => {
    const endPoind = `/catalogos/modalidades?buscar=${buscar}`;
    const datos = await feching(endPoind, "no-store", "GET");
    setModalidades(datos);
  };

  useEffect(() => {
    searchData("");
  }, []);

  return (
    <SelectSearch
      items={modalidades}
      label='modalidad'
      placeholder='Buscar Modalidades'
      search={searchData}
    />
  );
}

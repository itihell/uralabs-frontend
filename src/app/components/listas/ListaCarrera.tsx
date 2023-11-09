"use client";
import feching from "@/app/utils/cliente-http";
import SelectSearch from "../select/select";
import { useEffect, useState } from "react";

export default function ListCarrera() {
  const [areas, setCarrera] = useState([]);

  const searchData = async (buscar = "") => {
    const endPoind = `/catalogos/registro-carreras?buscar=${buscar}`;
    const datos = await feching(endPoind, "no-store", "GET");
    setCarrera(datos);
  };

  useEffect(() => {
    searchData("");
  }, []);

  return (
    <SelectSearch
      items={areas}
      label="nombre"
      placeholder="Buscar Carreras"
      search={searchData}
    />
  );
}
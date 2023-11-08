"use client";
import feching from "@/app/utils/cliente-http";
import SelectSearch from "../select/select";
import { useEffect, useState } from "react";

export default function ListCortePracticante() {
  const [CortePracticas, setCortePracticas] = useState([]);

  const searchData = async (buscar = "") => {
    const endPoind = `/catalogos/corte-practicas?buscar=${buscar}`;
    const datos = await feching(endPoind, "no-store", "GET");
    setCortePracticas(datos);
  };

  useEffect(() => {
    searchData("");
  }, []);

  return (
    <SelectSearch
      items={CortePracticas}
      label="fecha_corte"
      placeholder="Buscar Corte Practicas"
      search={searchData}
    />
  );
}


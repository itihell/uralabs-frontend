"use client";
import SelectSearch from "@/app/components/select/select";
import feching from "@/app/utils/cliente-http";
import { useEffect, useState } from "react";

export default function ListasPages() {
  const [roles, setRoles] = useState([]);

  const searchData = async (buscar = "") => {
    const endPoind = `/catalogos/roles?buscar=${buscar}`;
    const datos = await feching(endPoind, "no-store", "GET");
    setRoles(datos);
  };

  useEffect(() => {
    searchData("");
  }, []);

  return (
    <div className="min-h-screen flex-col items-center justify-between">
      <h1>Listas Pages</h1>

      <SelectSearch
        items={roles}
        label="role"
        placeholder="Buscar Roles"
        search={searchData}
      />
    </div>
  );
}

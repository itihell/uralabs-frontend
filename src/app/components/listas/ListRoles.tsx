"use client";
import feching from "@/app/utils/cliente-http";
import SelectSearch from "../select/select";
import { useEffect, useState } from "react";

export default function ListRoles() {
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
    <SelectSearch
      items={roles}
      label="role"
      placeholder="Buscar Roles"
      search={searchData}
    />
  );
}

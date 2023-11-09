"use client";
import feching from "@/app/utils/cliente-http";
import SelectSearch from "../select/select";
import { useEffect, useState } from "react";

interface ListRolesProps {
  selected: (e: Object) => void;
}
export default function ListRoles({ selected }: ListRolesProps) {
  const [roles, setRoles] = useState([]);

  const changeRol = (e: any) => {
    selected(e);
  };

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
      selectedItem={changeRol}
      label="role"
      placeholder="Buscar Roles"
      search={searchData}
    />
  );
}

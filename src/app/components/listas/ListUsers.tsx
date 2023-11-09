'use client';
import feching from "@/app/utils/cliente-http";
import { useEffect, useState } from "react";
import SelectSearch from "../select/select";

export default  function ListUsers() {
  const [users, setUsers] = useState([]);
  const searchData = async (buscar = "") => {
    const endPoind = `/catalogos/users?buscar=${buscar}`;
    const datos = await feching(endPoind, "no-store", "GET");
    setUsers(datos);
  }
  useEffect(() => {
    searchData("");
  }, []);
  return (
    <SelectSearch
      items={users}
      label="name"
      placeholder="Buscar Usuarios"
      search={searchData}
    />
  );
}

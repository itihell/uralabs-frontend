"use client";
import TableRoles from "../../components/tables/table-roles";
import BtnAddRole from "@/app/components/roles/btn-add-role";
import { Role } from "@/app/interfaces/roles-interfaces";
import { useRoles } from "@/app/hooks/use-roles";
import { useEffect, useState } from "react";
import SearchRoles from "./search-roles";

export default function RolesPage() {
  const { onShowAll } = useRoles();

  const [roles, setRoles] = useState<Role[]>([]);
  const [search, setSearch] = useState<string>("");
  const [rolesSearch, setRolesSearch] = useState<Role[]>([]);

  useEffect(() => {
    const getRoles = async () => {
      const { data } = await onShowAll("");
      console.log("data", data);

      setRoles(data);
      console.log("roles", roles);

      setRolesSearch(roles);
      console.log("busqueda", rolesSearch);
    };
    getRoles();
  }, []);

  const onSaved = async (rol: Role) => {
    const { data } = await onShowAll("");
    setRoles(data);
  };

  const onDeleted = async (rol: Role) => {
    const { data } = await onShowAll("");
    setRoles(data);
  };

  const onUpdated = async (rol: Role) => {
    const { data } = await onShowAll("");
    setRoles(data);
  };

  const onSearch = (buscar: string) => {
    const row = roles.filter((rol) => {
      const campo = rol.role.toUpperCase();
      const textSearch = buscar.toUpperCase();
      return campo.includes(textSearch);
    });
    setRolesSearch(row);
  };

  return (
    <div>
      <div className="min-h-screen">
        <h1 className="mb-3">Listado de roles</h1>
        <p>Buscando {search}</p>

        <div className="mb-3 flex content-end justify-items-end">
          <BtnAddRole onSaved={onSaved} />
          <SearchRoles
            search={search}
            setSearch={(e) => {
              setSearch(e);
              onSearch(e);
            }}
          />
        </div>

        <TableRoles
          roles={rolesSearch}
          onDeleted={onDeleted}
          onUpdated={onUpdated}
        />
      </div>
    </div>
  );
}

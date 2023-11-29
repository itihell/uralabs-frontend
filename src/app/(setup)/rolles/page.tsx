"use client";
import TableRoles from "../../components/tables/table-roles";
import BtnAddRole from "@/app/components/roles/btn-add-role";
import { Role } from "@/app/interfaces/roles-interfaces";
import { useRoles } from "@/app/hooks/use-roles";
import { useEffect, useState } from "react";
import SearchRoles from "../../components/roles/search-roles";

function RolesPage() {
  const { onShowAll, onStore } = useRoles();
  const [roles, setRoles] = useState<Role[]>([]);
  const [search, setSearch] = useState<string>("");
  const [rolesSearch, setRolesSearch] = useState<Role[]>([]);

  useEffect(() => {
    const loadRoles = async () => {
      await onShowAll("").then(({ data }) => {
        setRoles(() => {
          setRolesSearch(data);
          return data;
        });
      });
    };

    loadRoles();
  }, []);

  const setRolesAndSearch = (data: Role[]) => {
    setRoles(() => {
      setRolesSearch(data);
      return data;
    });
  };

  const onSaved = async (rol: Role) => {
    const { data } = await onShowAll("");
    setRolesAndSearch(data);
  };

  const onDeleted = async (rol: Role) => {
    const { data } = await onShowAll("");
    setRolesAndSearch(data);
  };

  const onUpdated = async (rol: Role) => {
    const { data } = await onShowAll("");
    setRolesAndSearch(data);
  };

  const onSearch = (buscar: string) => {
    const rows = roles.filter((rol) => {
      const campo = rol.role.toUpperCase();
      const textSearch = buscar.toUpperCase();
      return campo.includes(textSearch);
    });
    setRolesSearch(rows);
  };

  return (
    <div>
      <div className="min-h-screen">
        <h1 className="mb-3">Listado de roles</h1>

        <div className="flex justify-between mb-2">
          <SearchRoles
            search={search}
            setSearch={(e) => {
              setSearch(e);
              onSearch(e);
            }}
          />
          <BtnAddRole onSaved={onSaved} />
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

export default RolesPage;

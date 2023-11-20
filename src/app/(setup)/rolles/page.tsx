"use client";
import TableRoles from "../../components/tables/table-roles";
import BtnAddRole from "@/app/components/roles/btn-add-role";
import { Role } from "@/app/interfaces/roles-interfaces";
import { useRoles } from "@/app/hooks/use-roles";
import { useEffect, useState } from "react";

export default function RolesPage() {
  const { onShowAll } = useRoles();

  const [roles, setRoles] = useState<Role[]>([]);

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

  useEffect(() => {
    const getRoles = async () => {
      const { data } = await onShowAll("");
      setRoles(data);
    };
    getRoles();
  }, []);

  return (
    <div>
      <div className="min-h-screen">
        <h1 className="mb-3">Listado de roles</h1>

        <div className="mb-3 flex content-end justify-items-end">
          <BtnAddRole onSaved={onSaved} />
        </div>

        <TableRoles roles={roles} onDeleted={onDeleted} onUpdated={onUpdated} />
      </div>
    </div>
  );
}

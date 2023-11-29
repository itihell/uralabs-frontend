"use client";
import feching from "@/app/utils/cliente-http";
import { useEffect, useState } from "react";
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
import { Role } from "@/app/interfaces/roles-interfaces";

interface ListRolesProps {
  selected: (e: number) => void;
  datos: Role;
}
export default function ListRoles({ selected, datos }: ListRolesProps) {
  const [roles, setRoles] = useState<Role[]>([]);
  const [search, setSearch] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const onSearch = async (search: string) => {
    const endPoind = `/catalogos/roles?buscar=${search}`;
    setLoading(true);
    let res = await feching(endPoind, "no-store", "GET");
    setRoles(() => {
      setLoading(false);
      return [...res];
    });
  };

  useEffect(() => {
    const callLoadData = async () => {
      await onSearch("");
      setSearch(datos.role);
    };

    callLoadData();
  }, []);

  const changeRol = (e: any) => {
    selected(e);
  };

  const onChangeSelect = async (e: any) => {
    setSearch(e);
    setTimeout(async () => {
      await onSearch(e);
    }, 200);
  };

  return (
    <Autocomplete
      className="max-w-xs"
      inputValue={search}
      isLoading={loading}
      items={roles}
      label="Seleccione un role"
      placeholder="Escriba un role..."
      variant="bordered"
      onInputChange={async (e) => {
        await onChangeSelect(e);
      }}
      onSelectionChange={(e) => {
        console.log("escribiendo", e);

        changeRol(e);
      }}
    >
      {(item) => (
        <AutocompleteItem key={item.id} className="capitalize">
          {item.role}
        </AutocompleteItem>
      )}
    </Autocomplete>
  );
}

'use client';
import feching from "@/app/utils/cliente-http";
import { useEffect, useState } from "react";
import SelectSearch from "../select/select";
import { useAsyncList } from "@react-stately/data";
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
import { User } from "@/app/interfaces/user-interface";

interface ListUsersProps {
  selected: (e: Object) => void;
  datos: User;
}

export default  function ListUsers({ selected }: ListUsersProps) {
  const [users, setUsers] = useState<User[]>([]);
  const [search, setSearch]= useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const onSearch = async (search: string) => {
    const endPoind = `/catalogos/users?buscar=${search}`;
    setLoading(true);
    let res = await feching(endPoind, "no-store", "GET");
    setUsers(() => {
      setLoading(false);
      return [...res];
    });
  }

  useEffect(() => {
    const callLoadData = async () => {
      await onSearch("");
    };
    callLoadData();
  }, []);

  const changeUser= (e: any) => {
    selected(e);
  }

  const onChangeSelect = async (e: any) => {
    setSearch(e);
    setTimeout(async () => {
      await onSearch(e);
    }, 200);
  }
  return (
    <Autocomplete
      className="max-w-xs"
      inputValue={search}
      isLoading={loading}
      items={users}
      label="Seleccione un usuario"
      placeholder="Escriba un usuario..."
      variant="bordered"
      onInputChange={async (e) => {
        await onChangeSelect(e);
      }}
      onSelectionChange={(e) => {
        changeUser(e);
      }}
      >
      {(item: User) => (
        <AutocompleteItem key={item.id} className="capitalize">
          {item.name}
        </AutocompleteItem>
      )}
    </Autocomplete>
  );
}

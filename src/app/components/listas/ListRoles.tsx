"use client";
import feching from "@/app/utils/cliente-http";
import SelectSearch from "../select/select";
import { useEffect, useState } from "react";
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
import { useAsyncList } from "@react-stately/data";

interface ListRolesProps {
  selected: (e: number) => void;
}

type SWCharacter = {
  isActive: boolean;
  id: number;
  role: string;
  delete_at: string;
};
export default function ListRoles({ selected }: ListRolesProps) {
  let list = useAsyncList<SWCharacter>({
    async load({ signal, filterText }) {
      const endPoind = `/catalogos/roles?buscar=${filterText}`;
      let res = await feching(endPoind, "no-store", "GET");

      return {
        items: res,
      };
    },
  });

  const changeRol = (e: any) => {
    selected(e);
  };
  
  const onChangeSelect = async (e: any) => {
    setSearch(e);
    setTimeout(async () => {
      await onSearch(e);
    }, 200);
  };

  // probando git

  return (
    <Autocomplete
      className='max-w-xs'
      inputValue={list.filterText}
      isLoading={list.isLoading}
      items={list.items}
      label='Seleccione un role'
      placeholder='Escriba un role...'
      variant='bordered'
      onInputChange={list.setFilterText}
      onSelectionChange={(e) => {
        changeRol(e);
      }}
    >
      {(item) => (
        <AutocompleteItem key={item.id} className='capitalize'>
          {item.role}
        </AutocompleteItem>
      )}
    </Autocomplete>
  );
}

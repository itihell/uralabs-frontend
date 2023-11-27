// import feching from "@/app/utils/cliente-http";

// export default async function ListUsoLab() {
//   const getUselab = async () => {
//     const endPoind = "/catalogos/uselab";
//     const uselab = await feching(endPoind, "no-store", "GET");
//     return uselab;
//   };

//   const uselab = await getUselab();
//   return (
//    <div className="mt-8">
//     <h1>Uso de laboratorio</h1>
//     <select
//     className="mt-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//     >
//     <option key="default">usoLab</option>
//       {uselab.map((uselab: any) => {
//             return <option key={`uselab-${uselab.id}`}>{`El docente ${uselab.teacher} reservo el laboratorio`}</option>;
//       })}
//     </select>
//     </div>
//   );
// }
"use client";
import feching from "@/app/utils/cliente-http";
import SelectSearch from "../select/select";
import { useEffect, useState } from "react";
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
import { useAsyncList } from "@react-stately/data";

interface ListUsoLabProps {
  selected: (e: number) => void;
}

type SWCharacter = {
  isActive: boolean;
  id: number;
  teacher: string;
  delete_at: string;
};
export default function ListUsoLab({ selected }: ListUsoLabProps) {
  let list = useAsyncList<SWCharacter>({
    async load({ signal, filterText }) {
      const endPoind = `/catalogos/uselab?buscar=${filterText}`;
      let res = await feching(endPoind, "no-store", "GET");

      return {
        items: res,
      };
    },
  });

  const changeRol = (e: any) => {
    selected(e);
  };

  return (
    <Autocomplete
      className="max-w-xs"
      inputValue={list.filterText}
      isLoading={list.isLoading}
      items={list.items}
      label="Seleccione un docente"
      placeholder="Escriba un docente..."
      variant="bordered"
      onInputChange={list.setFilterText}
      onSelectionChange={(e) => {
        changeRol(e);
      }}
    >
      {(item) => (
        <AutocompleteItem key={item.id} className="capitalize">
          {item.teacher}
        </AutocompleteItem>
      )}
    </Autocomplete>
  );
}

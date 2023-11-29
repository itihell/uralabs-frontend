// import Link from "next/link";
// import TableLabUse from "./components/tables/table-labUse";

// export default function LabUsePage() {
//   return (
//     <div>
//       <div className='min-h-screen'>
//         <div className='mb-3'>
//         </div>
//         <TableLabUse />
//       </div>
//       <div className="mb-6 mt-10">
//         <div>
//           <Link className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" href="/laboratory-use/components/add">Agregar</Link>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";
import TableRoles from "../../components/tables/table-roles";
import BtnAddRole from "@/app/components/roles/btn-add-role";
import { useRoles } from "@/app/hooks/use-roles";
import { useEffect, useState } from "react";
import SearchRoles from "../../components/roles/search-roles";
import { UsoLab } from "@/app/interfaces/usoLab-interfaces";
import TableLabUse from "./components/tables/table-labUse";
import BtnAddUsoLab from "./usoLaboratorio/btn-add-usoLab";
import SearchUsoLab from "./usoLaboratorio/search-UsoLab";
import { useLaboratorio } from "@/app/hooks/uso-lab";

function LabUsePage() {
  const { onShowAll, onStore } = useLaboratorio();
  const [usoLaboratorio, setLaboratorio] = useState<UsoLab[]>([]);
  const [search, setSearch] = useState<string>("");
  const [usoLabSearch, setUsoLabSearch] = useState<UsoLab[]>([]);

  useEffect(() => {
    const loadUsoLab = async () => {
      await onShowAll(0).then(({ data }) => {
        setLaboratorio(() => {
          setUsoLabSearch(data);
          return data;
        });
      });
    };

    loadUsoLab();
  }, []);

  const setUsoLabAndSearch = (data: UsoLab[]) => {
    setLaboratorio(() => {
      setUsoLabSearch(data);
      return data;
    });
  };

  const onSaved = async (rol: UsoLab) => {
    const { data } = await onShowAll(0);
    setUsoLabAndSearch(data);
  };

  const onDeleted = async (rol: UsoLab) => {
    const { data } = await onShowAll(0);
    setUsoLabAndSearch(data);
  };

  const onUpdated = async (rol: UsoLab) => {
    const { data } = await onShowAll(0);
    setUsoLabAndSearch(data);
  };

  const onSearch = (buscar: string) => {
    const rows = usoLaboratorio.filter((usoLab) => {
      const campo = usoLab.className.nombre.toUpperCase();
      const textSearch = buscar.toUpperCase();
      return campo.includes(textSearch);
    });
    setUsoLabSearch(rows);
  };

  return (
    <div>
      <div className="min-h-screen">
        <h1 className="mb-3">Listado de los registros del uso del laboratrorio</h1>

        <div className="flex justify-between mb-2">
          <SearchUsoLab
            search={search}
            setSearch={(e) => {
              setSearch(e);
              onSearch(e);
            }}
          />
          <BtnAddUsoLab onSavedUsoLab={onSaved} />
        </div>

        <TableLabUse
          usoLaboratorio={usoLabSearch}
          onDeleted={onDeleted}
          onUpdated={onUpdated}
        />
      </div>
    </div>
  );
}

export default LabUsePage;

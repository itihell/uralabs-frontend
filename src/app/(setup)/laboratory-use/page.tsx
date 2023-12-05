
"use client";
import { useEffect, useState } from "react";
import { UsoLab } from "@/app/interfaces/usoLab-interfaces";

import { useLaboratorio } from "@/app/hooks/uso-lab";
import SearchUsoLab from "@/app/components/forms/usoLaboratorio/search-UsoLab";
import BtnAddUsoLab from "@/app/components/forms/usoLaboratorio/btn-add-usoLab";
import TableLabUse from "@/app/components/tables/table-labUse";

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

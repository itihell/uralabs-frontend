"use client";
import TableAsignatura from "@/app/components/tables/table-asignatura";
import BtnAddAsignatura from "@/app/components/asignatura/btn-add-asignatura";
import { Asignatura } from "@/app/interfaces/asignatura-interfaces";
import { useAsignatura } from "@/app/hooks/use-asignatura";
import { useEffect, useState } from "react";
import SearchAsignatura from "@/app/components/asignatura/search-asignatura";
import BtnFilterAsignatura from "@/app/components/asignatura/btn-filter-asignatura";
import useUtils from "@/app/hooks/use-utils";


function AsignaturaPage() {
  const { onShowAll } = useAsignatura();
  const [asignatura, setAsignatura] = useState<Asignatura[]>([]);
  const [search, setSearch] = useState<string>("");
  const [asignaturaSearch, setAsignaturaSearch] = useState<Asignatura[]>([]);
  const { getParams } = useUtils();

useEffect(() => {
  const loadAsignatura = async () => {
    await onShowAll("").then(({ data }) => {
        setAsignaturaAndSearch(data);
    });
  };

  loadAsignatura();
}, []);

const setAsignaturaAndSearch = (data: Asignatura[]) => {
  setAsignatura(() => {
    setAsignaturaSearch(data);
    return data;
  });
};

const onSaved = async (asignatura: Asignatura) => {
  const { data } = await onShowAll("");
  setAsignaturaAndSearch(data);
};

const onDeleted = async (asignatura: Asignatura) => {
  const { data } = await onShowAll("");
  setAsignaturaAndSearch(data);
};

const onUpdated = async (rol: Asignatura) => {
  const { data } = await onShowAll("");
  setAsignaturaAndSearch(data);
  
};

const onSearch = (buscar: string) => { 
  const rows = asignatura.filter((asignatura) => {
    const campo = asignatura.nombre.toUpperCase();
    const textSearch = buscar.toUpperCase();
    return campo.includes(textSearch);
  });
  setAsignaturaSearch(rows);
  
};

const onFilteredAsignatura = async (fields: Asignatura) => {
  // TODO: Obetener los parametros de busqueda
  const params = getParams(fields);

  // TODO: Filtrar las asignatura
  await onShowAll(params).then(({ data }) => {
    setAsignaturaAndSearch(data);
  });
};

return (
  <div>
    <div className="min-h-screen">
      <h1 className="mb-3">Listado de Asignatura</h1>

      <div className="flex justify-between mb-2">
        <BtnFilterAsignatura
          onFilteredAsignatura={(value: Asignatura) => {
            onFilteredAsignatura(value);
          }}
        />
        {/* <SearchAsignatura
          search={search}
          setSearch={(e) => {
            setSearch(e);
            onSearch(e);
          }}
          
        /> */}
        <BtnAddAsignatura onSaved={onSaved} />
      </div>

      <TableAsignatura
        asignaturas={asignaturaSearch}
        onDeleted={onDeleted}
        onUpdated={onUpdated}
      />
    </div>
  </div>
);
}


export default AsignaturaPage;
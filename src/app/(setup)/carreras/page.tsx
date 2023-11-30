"use client";

import BtnAddCarrera from "@/app/components/carreer/btn-add-carrrera";
import SearchCarreras from "@/app/components/carreer/search-carrera";
import TableCarreras from "@/app/components/tables/table-carreras";
import { UseCarreras } from "@/app/hooks/use-carreras";
import { Carrera } from "@/app/interfaces/carreras-interfaces";
import { useEffect, useState } from "react";

export default function CarrerasPage() {
  const {onShowAll} = UseCarreras()

  const [carrera, setCarreras] = useState<Carrera[]>([]);
  const [search, setSearch]= useState<String>("");
  const [carrerasSearch, setCarrerasSearch] = useState<Carrera[]>([]);

  useEffect(() => {
    const loadCarreras = async () => {
      await onShowAll("").then(({ data }) => {
        setCarreras(() => {
          setCarrerasSearch(data);
          return data;
        });
      });
    };

    loadCarreras();
  }, []);

  
  const setCarrerasAndSearch = (data: Carrera[]) => {
    setCarreras(() => {
      setCarrerasSearch(data);
      return data;
    });
  };

  const onSaved = async (carr: Carrera) => {
    const { data } = await onShowAll("");
    setCarrerasAndSearch(data);
  };

  const onDeleted = async (carr: Carrera) => {
    const { data } = await onShowAll("");
    setCarrerasAndSearch(data);
  };

  const onUpdated = async (carr: Carrera) => {
    const { data } = await onShowAll("");
    setCarrerasAndSearch(data);
  };

  const onSearch = (buscar: string) => {
    const rows = carrera.filter((carrera) => {
      const campo = carrera.nombre.toUpperCase();
      const textSearch = buscar.toUpperCase();
      return campo.includes(textSearch);
    });
    setCarrerasSearch(rows);
  };

  return (
    <div>
      <div className="min-h-screen">
        <h1 className="mb-3">Listado de Carreras</h1>
        <div className="flex justify-between mb-2">
          <SearchCarreras 
          search={search}
          setSearch={(e) => {
            setSearch(e);
            onSearch(e);
          }}
          />

          <BtnAddCarrera onSaved={onSaved}/>
        </div>
        <TableCarreras 
        carrera={carrerasSearch}
        onDeleted={onDeleted}
        onUpdated={onUpdated}
        />
      </div>
    </div>
  );
}

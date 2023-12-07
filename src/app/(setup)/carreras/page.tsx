'use client'
import BtnAddCarrera from "@/app/components/forms/carreras/btn-add-carreras";
import BtnFilterCarreras from "@/app/components/forms/carreras/btn-filter-carreras";
import SearchCarreras from "@/app/components/forms/carreras/search-carrreras";
import TableCarreras from "@/app/components/tables/table-carreras";
import { useCarreras } from "@/app/hooks/use-carrreras";
import useUtils from "@/app/hooks/use-utils";
import { Carrera } from "@/app/interfaces/carreras-interfaces";

import { useEffect, useState } from "react";

function CarrerasPage() {
  const { onShowAll } = useCarreras();
  const [carreras, setCarreras] = useState<Carrera[]>([]);
  const [search, setSearch] = useState<string>("");
  const [carerrasSearch, setCarrerasSearch] = useState<Carrera[]>([]);
  const { getParams } = useUtils();

  useEffect(() => {
    const loadCarreras = async () => {
      await onShowAll("").then(({ data }) => {
        setCarrerasAndSearch(data);
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

  const onSaved = async (car: Carrera) => {
    const { data } = await onShowAll("");
    setCarrerasAndSearch(data);
  };

  const onDeleted = async (car: Carrera) => {
    const { data } = await onShowAll("");
    setCarrerasAndSearch(data);
  };

  const onUpdated = async (rol: Carrera) => {
    const { data } = await onShowAll("");
    setCarrerasAndSearch(data);
  };

  const onSearch = (buscar: string) => {
    const rows = carreras.filter((car) => {
      const campo = car.carrera.toUpperCase();
      const textSearch = buscar.toUpperCase();
      return campo.includes(textSearch);
    });
    setCarrerasSearch(rows);
  };

  const onFilteredCarreras = async (fields: Carrera) => {
    // TODO: Obetener los parametros de busqueda
    const params = getParams(fields);

    // TODO: Filtrar las carreras
    await onShowAll(params).then(({ data }) => {
      setCarrerasAndSearch(data);
    });
  };

  return (
    <div>
      <div className="min-h-screen">
        <h1 className="mb-3">Listado de carreras</h1>

        <div className="flex justify-between mb-2">
          <BtnFilterCarreras
            onFilteredCarreras={(value: Carrera) => {
              onFilteredCarreras(value);
            }}
          />
          <SearchCarreras
            search={search}
            setSearch={(e) => {
              setSearch(e);
              onSearch(e);
            }}
          />
          <BtnAddCarrera onSaved={onSaved} />
        </div>

        <TableCarreras
          carreras={carerrasSearch}
          onDeleted={onDeleted}
          onUpdated={onUpdated}
        />
      </div>
    </div>
  );

}

export default CarrerasPage;
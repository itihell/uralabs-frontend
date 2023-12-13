"use client";
import BtnAddArea from "@/app/components/areas/btn-add-area";
import SearchAreas from "@/app/components/areas/search-areas";
import TableAreas from "@/app/components/tables/table-areas";
import { useAreas } from "@/app/hooks/use-area";
import { Area } from "@/app/interfaces/areas-interfaces";
import { useEffect, useState } from "react";

function AreasPage() {
  const { onShowAll, onStore } = useAreas();
  const [areas, setAreas] = useState<Area[]>([]);
  const [search, setSearch] = useState<string>("");
  const [areasSearch, setAreasSearch] = useState<Area[]>([]);

  useEffect(() => {
    const loadAreas = async () => {
      await onShowAll("").then(({ data }) => {
        setAreas(() => {
          setAreasSearch(data);
          return data;
        });
      });
    };

    loadAreas();
  }, []);

  const setAreasAndSearch = (data: Area[]) => {
    setAreas(() => {
      setAreasSearch(data);
      return data;
    });
  };

  const onSaved = async (rol: Area) => {
    const { data } = await onShowAll("");
    setAreasAndSearch(data);
  };

  const onDeleted = async (rol: Area) => {
    const { data } = await onShowAll("");
    setAreasAndSearch(data);
  };

  const onUpdated = async (rol: Area) => {
    const { data } = await onShowAll("");
    setAreasAndSearch(data);
  };

  const onSearch = (buscar: string) => {
    const rows = areas.filter((area) => {
      const campo = area.nombre.toUpperCase();
      const textSearch = buscar.toUpperCase();
      return campo.includes(textSearch);
    });
    setAreasSearch(rows);
  };

  return (
    <div>
      <div className="min-h-screen">
        <h1 className="mb-3">Listado de Areas</h1>

        <div className="flex justify-between mb-2">
          <SearchAreas
            search={search}
            setSearch={(e) => {
              setSearch(e);
              onSearch(e);
            }}
          />
          <BtnAddArea onSaved={onSaved} />
        </div>

        <TableAreas
          areas={areasSearch}
          onDeleted={onDeleted}
          onUpdated={onUpdated}
        />
      </div>
    </div>
  );
}

export default AreasPage;

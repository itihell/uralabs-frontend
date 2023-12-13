'use client';
import { useEffect, useState } from "react";
import { usePracticante } from "../hooks/use-practicante";
import CortePracticas from "../components/screens/forms/corte-practicas/interface/corte-practicas";
import TableCortePractica from "../components/screens/tables/table-corte-practica";
import SearchCortePracticas from "../components/cortePracticas/search-corte";

export default function CortePracticas() {
  const { onShowAll, onSave } = usePracticante();
  const [cortes, setCortes] = useState<CortePracticas[]>([]);
  const [search, setSearch] = useState<string>("");
  const [corteSearch, setCorteSearch] = useState<CortePracticas[]>([]);

  useEffect(() => {
    const loadCortes = async () => {
      await onShowAll("").then(({ data }) => {
        setCortes(() => {
          setCorteSearch(data);
          return data;
        });
      });
    };

    loadCortes();
  }, []);

  const setCortesAndSearch = (data: CortePracticas[]) => {
    setCortes(() => {
      setCorteSearch(data);
      return data;
    });
  };

  const onSaved = async (corte: CortePracticas) => {
    const { data } = await onShowAll("");
    setCortesAndSearch(data);
  };

  const onDeleted = async (corte: CortePracticas) => {
    const { data } = await onShowAll("");
    setCortesAndSearch(data);
  };

  const onUpdated = async (corte: CortePracticas) => {
    const { data } = await onShowAll("");
    setCortesAndSearch(data);
  };

  const onSearch = (buscar: string) => {
    const rows = cortes.filter((corte) => {
      const campo = corte.fecha_corte.toUpperCase();
      const textSearch = buscar.toUpperCase();
      return campo.includes(textSearch);
    });
    setCorteSearch(rows);
    return (
      <div>
        <div className="main-h-screen">
          <h1 className="text-center text-3xl font-bold">Corte Practicas</h1>
        </div>
        <div className="flex flex-col gap-2">
          <SearchCortePracticas
            search={search}
            setSearch={
              (e) => {
                setSearch(e);
                onSearch(e);
              }
            }
          />
          
        </div>
        <TableCortePractica
          corte={corteSearch}
          onDeleted={onDeleted}
          onUpdated={onUpdated}
        />
      </div>
    );
  };
}

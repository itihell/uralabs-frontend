"use client";
import { useEffect, useState } from "react";
import TablePracticante from "../components/screens/tables/tables-practicantes";
import { usePracticante } from "../hooks/use-practicante";
import Practicante from "../components/screens/forms/practicante/interface/practicante";
import SearchPracticante from '../components/practicante/search-practicante';
import BtnAddPracticante from "../components/practicante/btn-add-practicante";

export default function Practicante() {
  const {onShowAll, onStore} = usePracticante();
  const [practicantes, setPracticantes] = useState<Practicante[]>([]);
  const [search, setSearch] = useState<string>("");
  const [practicantesSearch, setPracticantesSearch] = useState<Practicante[]>([]);

  useEffect(() => {
    const loadPracticantes = async () => {
      await onShowAll("").then(({ data }) => {
        setPracticantes(() => {
          setPracticantesSearch(data);
          return data;
        });
      });
    };

    loadPracticantes();
  }, []);

  const setPracticantesAndSearch = (data: Practicante[]) => {
    setPracticantes(() => {
      setPracticantesSearch(data);
      return data;
    });
  };

  const onSaved = async (practicante: Practicante) => {
    const { data } = await onShowAll("");
    setPracticantesAndSearch(data);
  };

  const onDeleted = async (practicante: Practicante) => {
    const { data } = await onShowAll("");
    setPracticantesAndSearch(data);
  };

  const onUpdated = async (practicante: Practicante) => {
    const { data } = await onShowAll("");
    setPracticantesAndSearch(data);
  };

  const onSearch = (buscar: string) => {
    const rows = practicantes.filter((practicante) => {
      const campo = practicante.nombres.toUpperCase();
      const textSearch = buscar.toUpperCase();
      return campo.includes(textSearch);
    });
    setPracticantesSearch(rows);
  };
  return (
    <div>
      <div className="min-h-screen">
        <h1 className="text-center text-3xl font-bold">Practicantes</h1>
      <div className="flex justify-between mb-2">
          <SearchPracticante search={search} setSearch={
            (e)=>{
              setSearch(e);
              onSearch(e);
            }
          } />
          <BtnAddPracticante onSaved={onSaved} />
        </div>
        <TablePracticante
            practicante={practicantesSearch}
            onDeleted={onDeleted}
            onUpdated={onUpdated}
          />
      </div>
    </div>
  );
}

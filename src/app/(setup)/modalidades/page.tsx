"use client";

import { useModalidad } from "@/app/hooks/use-modalidadades";
import { Modalidad } from "@/app/interfaces/modalidades-interface";
import { useEffect, useState } from "react";
import SearchModalidad from "./search-Modalidad";
import BtnAddModalidad from "@/app/components/modalidad/btn-add-modalidad";
import TableModalidades from "@/app/components/tables/tables-modalidades";

export default function ModalidadesPage() {
  const { onShowAll } = useModalidad();

  const [modalidad, setModalidad] = useState<Modalidad[]>([]);
  const [search, setSearch] = useState<string>("");
  const [modalidadesSearch, setModalidadesSearch] = useState<Modalidad[]>([]);

  useEffect(() => {
    const getModalidades = async () => {
      const { data } = await onShowAll("");
      console.log("data", data);

      setModalidad([...data]);
      console.log("modalidad", modalidad);

      setModalidadesSearch(modalidad);
      console.log("busqueda", modalidadesSearch);
    };
    getModalidades();
  }, []);

  const onSaved = async (modal: Modalidad) => {
    const { data } = await onShowAll("");
    setModalidadesSearch(data);
    setModalidad(data);
  };

  const onDeleted = async (modal: Modalidad) => {
    const { data } = await onShowAll("");
  };

  const onUpdated = async (modal: Modalidad) => {
    const { data } = await onShowAll("");
    setModalidad(data);
  };

  const onSearch = (buscar: string) => {
    const filteredRows = modalidad.filter((modal) => {
      const campo = modal.modalidades?.toUpperCase() || "";
      const textSearch = buscar.toUpperCase();
      return campo.includes(textSearch);
    });

    console.log(filteredRows);
  };

  return (
    <div>
      <div className='min-h-screen'>
        <h1 className='mb-3'>Listado de modalidad</h1>
        <p>Buscando {search}</p>

        <div className='mb-3 flex content-end justify-items-end'>
          <BtnAddModalidad onSaved={onSaved} />
          <SearchModalidad
            search={search}
            setSearch={(e) => {
              setSearch(e);
              onSearch(e);
            }}
          />
        </div>

        <TableModalidades
          modalidades={modalidad}
          onDeleted={onDeleted}
          onUpdated={onUpdated}
        />
      </div>
    </div>
  );
}

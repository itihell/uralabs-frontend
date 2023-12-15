"use client";

import BtnFilterData from "@/app/components/filtros/btnFilterData";
import TablesReports from "@/app/components/filtros/tables-reports/tables-reports";
import useDocentesModalidades from "@/app/hooks/use-modalidade-docentes";
import useUtils from "@/app/hooks/use-utils";
import { DocentesModalidades } from "@/app/interfaces/docentes-modalidades";
import React, { use, useEffect, useState } from "react";

// Importaciones ...

export default function FiltrosPage() {
  const { onShowAll } = useDocentesModalidades();
  const [reports, setReports] = useState<DocentesModalidades[]>([]);
  const [search, setSearch] = useState<string>("");
  const [searchReport, setReportsSearch] = useState<DocentesModalidades[]>([]);

  const { getParams } = useUtils();

  useEffect(() => {
    const loadReports = async () => {
      try {
        const { data } = await onShowAll("");
        setReportsAndSearch(data);
        console.log(data);
      } catch (error) {
        console.error("Error loading reports:", error);
      }
    };
    loadReports();
  }, []);

  const setReportsAndSearch = (data: DocentesModalidades[]) => {
    setReportsSearch(() => {
      setReportsSearch(data);
      return data;
    });
    console.log(data);
  };

  const onSaved = async (report: DocentesModalidades) => {
    try {
      const { data } = await onShowAll("");
      setReportsAndSearch(data);
    } catch (error) {
      console.error("Error saving reports:", error);
    }
  };

  const handleDataChange = async () => {
    try {
      const { data } = await onShowAll("");
      setReportsAndSearch(data);
    } catch (error) {
      console.error("Error updating reports:", error);
    }
  };

  const onSearch = (buscar: string) => {
    const rows = reports.filter((report) => {
      const campo = report.carrera.toUpperCase();
      const textSearch = buscar.toUpperCase();
      return campo.includes(textSearch);
    });
    setReports(rows);
  };

  const onFilteredReports = async (fields: DocentesModalidades) => {
    const params = getParams(fields);

    await onShowAll(params).then(({ data }) => {
      setReportsAndSearch(data);
    });
  };

  return (
    <div>
      <div className='min-h-screen'>
        <h1 className='mb-3'>Filtros</h1>
        <div className='flex justify-between mb-2'>
          <BtnFilterData onFilteredData={onFilteredReports} />
        </div>
        <TablesReports
          reports={searchReport}
          onDeleted={handleDataChange}
          onUpdated={handleDataChange}
        />
      </div>
    </div>
  );
}

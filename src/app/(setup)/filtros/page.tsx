"use client";

import BtnFilterData from "@/app/components/filtros/btnFilterData";
import SearchData from "@/app/components/filtros/tables-reports/search-data";
import TablesReports from "@/app/components/filtros/tables-reports/tables-reports";
import useDocentesModalidades from "@/app/hooks/use-modalidade-docentes";
import useUtils from "@/app/hooks/use-utils";
import { DocentesModalidades } from "@/app/interfaces/docentes-modalidades";

import React, { use, useEffect, useState } from "react";

export default function FiltrosPage() {
  const { onShowAll } = useDocentesModalidades();
  const [reports, setReports] = useState<DocentesModalidades[]>([]);
  const [search, setSearch] = useState<string>("");
  const [searchReport, setReportsSearch] = useState<DocentesModalidades[]>([]);

  const { getParams } = useUtils();

  useEffect(() => {
    const loadReports = async () => {
      await onShowAll("").then(({ data }) => {
        setReportsAndSearch(data);
      });
      console.log("Probando", loadReports);
    };
    loadReports();
  }, []);

  const setReportsAndSearch = (data: DocentesModalidades[]) => {
    setReports(() => {
      setReportsSearch(data);
      return data;
    });
    console.log(data);
  };

  const onSaved = async (report: DocentesModalidades) => {
    const { data } = await onShowAll("");
    setReportsAndSearch(data);
  };

  const handleDataChange = async () => {
    try {
      const { data } = await onShowAll("");
      setReportsAndSearch(data);
    } catch (error) {
      console.error("Error updating reports:", error);
    }
  };

  const onFilteredReports = async (fields: DocentesModalidades) => {
    const params = getParams(fields);

    await onShowAll(params).then(({ data }) => {
      setReportsAndSearch(data);
    });
  };

  const onSearchChange = async (searchText: string) => {
    setSearch(searchText);

    const filteredData = reports.filter((report) =>
      report.docente.toLowerCase().includes(searchText.toLowerCase())
    );

    setReportsSearch(filteredData);
  };

  return (
    <div>
      <div className='min-h-screen'>
        <h1 className='mb-3'>Filtros</h1>
        <div className='flex justify-between mb-2'>
          {/* Renderiza el componente BtnFilterData aquí */}
          <BtnFilterData
            onFilteredReports={(value: DocentesModalidades) => {
              onFilteredReports(value);
            }}
          />

          <SearchData
            search={search}
            setSearch={(e) => {
              setSearch(e);
              onSearchChange(e);
            }}
          />
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

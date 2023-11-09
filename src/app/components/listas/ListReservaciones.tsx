"use client";
import React, { useEffect, useState } from "react";
import feching from "@/app/utils/cliente-http";
import SelectSearch from "../select/select";

interface Reservation {
  startTime: string;
}

const ListReservaciones = () => {
  const [reservations, setReservations] = useState<Reservation[]>([]);

  const searchData = async (buscar = "") => {
    const endPoind = `/reservations?buscar=${buscar}`;
    const response = await feching(endPoind, "no-store", "GET");

    // Verifica que la respuesta tenga la propiedad 'data' y es un array
    if (response && response.data && Array.isArray(response.data)) {
      setReservations(response.data);
    }
  };

  useEffect(() => {
    searchData("");
  }, []);

  const options = reservations.map((reservation) => ({
    value: reservation.startTime,
    label: reservation.startTime,
  }));

  return (
    <SelectSearch
      items={options}
      label="label"
      placeholder="Buscar Reservas"
      search={searchData}
      selectedItem={function (e: Object): void {
        throw new Error("Function not implemented.");
      }}
    />
  );
};

export default ListReservaciones;

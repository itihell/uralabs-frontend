import React from "react";
import ReservationsTable from "./components/ReservationTable";
import Reservations from "./components/Reservation";

export default function reservations() {
  return (
    <div>
      <Reservations />
      <ReservationsTable />
    </div>
  );
}

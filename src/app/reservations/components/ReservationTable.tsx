"use client";
import React, { useEffect, useState } from "react";
import {
  deleteReservation,
  getReservations,
  Reservation,
  Shift,
} from "../utils/api";

function ReservationsTable() {
  const [data, setData] = useState<Reservation[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const reservations = await getReservations();
        setData(reservations);
        setLoading(false);
      } catch (error) {
        console.error("Error al obtener reservas:", error);
      }
    };

    fetchData();
  }, []);

  const handleDeleteClick = async (reservationId: number) => {
    try {
      // Llama a la función de la API para eliminar la reserva
      await deleteReservation(reservationId);

      // Si la eliminación tiene éxito, actualiza el estado de las reservas
      const updatedData = data.filter(
        (reservation) => reservation.id !== reservationId
      );
      setData(updatedData);
    } catch (error) {
      // Maneja el error según tus necesidades
      console.error("Error al eliminar la reserva:", error);
    }
  };

  // Función para formatear las horas según el turno
  const formatTimeWithShift = (time: string, shift: Shift) => {
    // Define un objeto que mapea los turnos a sus respectivos formatos de hora
    const shiftTimeFormats = {
      [Shift.morning]: { label: "AM", format: "AM" },
      [Shift.afternoon]: { label: "PM", format: "PM" },
      [Shift.night]: { label: "PM", format: "PM" },
    };

    // Obtiene el formato de hora según el turno
    const timeFormat = shiftTimeFormats[shift];

    // Formatea la hora
    return `${time} ${timeFormat.label}`;
  };

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Reservas</h1>
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Fecha
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Hora de Inicio
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Hora de Finalización
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Turno
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Laboratorio
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Carrera
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Acciones
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((reservation) => (
            <tr key={reservation.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                {reservation.date.split("T")[0]}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {formatTimeWithShift(reservation.startTime, reservation.shift)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {formatTimeWithShift(reservation.endTime, reservation.shift)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {reservation.shift}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {reservation.laboratory.labName}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {reservation.carrera.nombre}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                  Editar
                </button>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handleDeleteClick(reservation.id)}
                >
                  Borrar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ReservationsTable;

import axios from "axios";

const API_URL = "http://localhost:5003"; // Reemplaza con la URL de tu API

export const getReservations = async () => {
  try {
    const response = await axios.get<{ data: Reservation[] }>(
      `${API_URL}/reservations`
    );
    return response.data.data; // Devolvemos solo la parte de datos de la respuesta
  } catch (error) {
    console.error("Error al obtener reservas:", error);
    throw error; // Puedes manejar el error según tus necesidades
  }
};

// En tu archivo de utilidades (por ejemplo, api.ts)

export async function deleteReservation(reservationId: number): Promise<void> {
  const apiUrl = `${API_URL}/reservations/${reservationId}`;
  const requestOptions: RequestInit = {
    method: "DELETE",
  };

  try {
    const response = await fetch(apiUrl, requestOptions);

    if (response.ok) {
      // Si la eliminación es exitosa, no es necesario devolver ningún dato.
    } else {
      // Maneja errores aquí para otros códigos de estado, si es necesario
      throw new Error("Error al eliminar la reserva");
    }
  } catch (error) {
    throw error; // Propaga el error para que pueda ser manejado en el componente que llama a esta función.
  }
}

export const addReservation = async (
  reservationData: ReservationFormData,
  authToken: string
) => {
  try {
    console.log("Datos de la reserva a enviar:", reservationData);

    const response = await axios.post<ReservationFormData>(
      `${API_URL}/reservations`,
      reservationData,
      {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      }
    );

    console.log("Respuesta del servidor:", response);

    if (response.status === 201) {
      console.log("Reserva creada con éxito:", response.data);
      return response.data; // Devolvemos los datos de la reserva creada
    } else {
      // Maneja cualquier otro código de estado aquí, si es necesario
      throw new Error(`Error al crear la reserva: ${response.status}`);
    }
  } catch (error: any) {
    // Aquí estamos utilizando ": any" para hacer una conversión explícita
    console.error("Error al crear la reserva:", error);

    if (error instanceof Error) {
      throw new Error(`Error al crear la reserva: ${error.message}`);
    } else {
      throw new Error(`Error al crear la reserva: ${error}`);
    }
  }
};

export async function getLaboratories() {
  try {
    const response = await axios.get<{ data: Laboratory[] }>(
      `${API_URL}/labregister`
    );

    const laboratoriesData = response.data;

    if (Array.isArray(laboratoriesData)) {
      return laboratoriesData; // Devolvemos solo la parte de datos de la respuesta
    } else {
      throw new Error("La respuesta de la API no es un arreglo válido.");
    }
  } catch (error) {
    console.error("Error al obtener laboratorios:", error);
    throw error;
  }
}

export async function getCareers() {
  try {
    const response = await axios.get<{ data: Carrera[] }>(
      `${API_URL}/registro-carreras`
    );
    return response.data.data; // Devolvemos solo la parte de datos de la respuesta
  } catch (error) {
    console.error("Error al obtener carreras:", error);
    throw error;
  }
}

export interface ReservationFormData {
  date: string;
  startTime: string;
  endTime: string;
  laboratoryId: number;
  userId: number;
  careerId: number;
  shift: Shift;
}

export enum Shift {
  morning = "matutino",
  afternoon = "vespertino",
  night = "nocturno",
}

export interface Reservation {
  id: number;
  date: string;
  startTime: string;
  endTime: string;
  laboratory: {
    id: number;
    labName: string;
    description: string;
    fundation: string;
    builder: string;
    isActive: boolean;
  };
  userId: {
    id: number;
    name: string;
    email: string;
    telefono: string;
    token: string | null;
    isActive: boolean;
  };
  carrera: {
    id: number;
    nombre: string;
  };
  shift: Shift; // Agregamos el campo 'shift' aquí
}

export interface Laboratory {
  id: number;
  labName: string;
  description: string;
  fundation: string;
  builder: string;
  isActive: boolean;
}

export interface Carrera {
  id: number;
  nombre: string;
}

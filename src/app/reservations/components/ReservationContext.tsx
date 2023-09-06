// ReservationContext.tsx

import React from "react";
import { Reservation } from "../utils/api";

export interface ReservationContextType {
  data: Reservation[];
  setData: React.Dispatch<React.SetStateAction<Reservation[]>>;
}

export const ReservationContext = React.createContext<
  ReservationContextType | undefined
>(undefined);

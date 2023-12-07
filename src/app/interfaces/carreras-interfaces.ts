export interface Carrera {
  id?: number;
  carrera: string;
  is_active: boolean;
  deleted_at?: string;
  area: {
    nombre: string;
  };
}
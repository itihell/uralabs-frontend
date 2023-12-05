
export interface UsoLab {
  id?: number;
  className?: {
    id: number;
  };
  carrera?: {
    id: number;
  };
  docente?: {
    id: number;
  };
  date?: string;
  modality?: {
    id: number;
  };
  shift?: string;
  year?: number;
  semester?: string;
  female?: number;
  male?: number;
  hours?: string;
  is_active?: boolean;
  deleted_at?: string;
  laboratorio?: {
    id: number;
  };

}

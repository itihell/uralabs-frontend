export interface UsoLab {
  id?: number;

  className?: number;
  carrera?: number;
  docente?: {
    id:number
    nombre:string,
    apellido:string
  };
  modality?: number;
  laboratorio?: number;
  shift?: number;
  year?: number;
  semester?: string;
  female?: number;
  male?: number;
  hours?: string;
 
  is_active?: boolean;
  deleted_at?: string;
}

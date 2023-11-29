export interface UsoLab {
    id?: number;
    className: {
    id: number;
    nombre: string;
  };
    carrera: {
        id: number;
        nombre: string;
        area:{
          nombre: string;
          id:number
        }
      };
    docente: {
        id: number;
        nombre: string;
        apellido: string;
      };
    date: string;
    modality: {
        id: number;
        modalidad: string;
      };
    shift: string;
    year?: number;
    semester: string;
    female: number;
    male: number;
    total: number;
    hours: string;
    laboratorio: {
        id: number;
        labName: string;
      };
    is_active: boolean;
    deleted_at?: string;
  }
  
"use client";
import ListAreas from "@/app/components/listas/ListAreas";
import ListCortePracticante from "@/app/components/listas/ListCortePracticante";
import ListModalidades from "@/app/components/listas/ListModalidades";
import ListPracticante from "@/app/components/listas/ListPracticante";
import ListRoles from "@/app/components/listas/ListRoles";
import ListUsers from "@/app/components/listas/ListUsers";
import ListCarrera from "@/app/components/listas/ListaCarrera";
import ListUsoLab from "@/app/components/listas/ListUsoLab";
import { useState } from "react";

export default function ListasPages() {
  const [fields, setFields] = useState<any>({});
  const changeRole = (e: any) => {
    setFields({ ...fields, role_id: e.id });
  };
  const changeUsolab = (e: any) => {
    setFields({ ...fields, uso_lab_id: e.id });
  };

  const changeArea = (e: any) => {
    setFields({ ...fields, area_id: e.id });
  };

  const changeUser = (e: any) => {
    setFields({ ...fields, user_id: e.id });
  };

  const changePracticante = (e: any) => {
    setFields({ ...fields, practicante_id: e.id });
  };

  const changeCarrea = (e: any) => {
    setFields({ ...fields, carrera_id: e.id });
  };

  return (
    <div className="min-h-screen flex-col items-center justify-between">
      <pre>{JSON.stringify(fields, null, 2)}</pre>
      <h1>Listas Pages</h1>
      <ListRoles selected={changeRole} />
      <hr />
      <h1>Modalidades</h1>
      <ListModalidades />
      <hr />
      <h1>Corte Practcas</h1>
      <ListCortePracticante />

      <h1>Uso del laboratorio</h1>
      <ListUsoLab selected={changeUsolab} />

      <h1>Listas de Areas</h1>
      <ListAreas selected={changeArea} />

      <h1>Lista de Practicante</h1>
      <ListPracticante selected={changePracticante} />

      <h1>Lista de Usuarios</h1>
      <ListUsers selected={changeUser} />

      <h1>Lista de Carreras</h1>
      <ListCarrera selected={changeCarrea} />
    </div>
  );
}

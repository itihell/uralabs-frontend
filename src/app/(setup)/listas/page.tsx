"use client";
import ListAreas from "@/app/components/listas/ListAreas";
import ListCortePracticante from "@/app/components/listas/ListCortePracticante";
import ListModalidades from "@/app/components/listas/ListModalidades";
import ListPracticante from "@/app/components/listas/ListPracticante";
import ListRoles from "@/app/components/listas/ListRoles";
import ListUsers from "@/app/components/listas/ListUsers";
import ListCarrera from "@/app/components/listas/ListaCarrera";
import ListUsoLab from "@/app/components/listas/ListUsoLab";

export default function ListasPages() {
  const changeRole = (e: any) => {
    console.log("desde la pagina ", e.id);
  };

  const changeArea = (e: any) => {
    console.log("desde la pagina ", e.id);
  };

  const changeUser = (e: any) => {
    console.log("desde la pagina ", e.id);
  }

  return (
    <div className="min-h-screen flex-col items-center justify-between">
      <h1>Listas Pages</h1>
      <ListRoles selected={changeRole} />
      <hr />
      <h1>Modalidades</h1>
      <ListModalidades />
      <hr />
      <h1>Corte Practcas</h1>
      <ListCortePracticante />

      <h1>Uso del laboratorio</h1>
      <ListUsoLab />

      <h1>Listas de Areas</h1>
      <ListAreas selected={changeArea}/>

      <h1>Lista de Practicante</h1>
      <ListPracticante />

      <h1>Lista de Usuarios</h1>
      <ListUsers selected={changeUser} />
      <h1>Lista de Carreras</h1>
      <ListCarrera />
    </div>
  );
}

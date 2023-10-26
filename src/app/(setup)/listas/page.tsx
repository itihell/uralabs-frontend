
import ListModalidades from "@/app/components/listas/ListModalidades";
import ListAreas from "@/app/components/listas/ListAreas";
import ListCortePracticante from "@/app/components/listas/ListCortePracticante";
import ListPracticante from "@/app/components/listas/ListPracticante";
import ListRoles from "@/app/components/listas/ListRoles";
import ListUseres from "@/app/components/listas/ListUsers";
import ListUsoLab from "@/app/components/listas/ListUsoLab";

export default function ListasPages() {
  return (
    <div className="min-h-screen flex-col items-center justify-between">
      <h1>Listas Pages</h1>
      <ListRoles />
      <ListModalidades />
      <ListAreas />
      <ListCortePracticante />
      <ListPracticante />
      <ListUseres/>
      <ListUsoLab/>
    </div>
  );
}


import ListModalidades from "@/app/components/listas/ListModalidades";
import ListAreas from "@/app/components/listas/ListAreas";
import ListCortePracticante from "@/app/components/listas/ListCortePracticante";
import ListPracticante from "@/app/components/listas/ListPracticante";
import ListRoles from "@/app/components/listas/ListRoles";
import ListUsoLab from "@/app/components/listas/ListUsoLab";

export default function ListasPages() {
  return (
    <div>
      <h1>Listas Pages</h1>
      <ListRoles />
      <ListModalidades />
      <ListAreas />
      <ListCortePracticante />
      <ListPracticante />
      <ListUsoLab/>
    </div>
  );
}

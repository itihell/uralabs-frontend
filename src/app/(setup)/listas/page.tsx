import ListAreas from "@/app/components/listas/ListAreas";
import ListCortePracticante from "@/app/components/listas/ListCortePracticante";

import ListPracticante from "@/app/components/listas/ListPracticante";
import ListRoles from "@/app/components/listas/ListRoles";
import ListLaboratory from "@/app/components/listas/ListLaboratory";

export default function ListasPages() {
  return (
    <div>
      <h1>Listas Pages</h1>
      <ListRoles />
      <ListAreas />
      <ListCortePracticante />
      <ListPracticante />
      <ListLaboratory />

    </div>
  );
}

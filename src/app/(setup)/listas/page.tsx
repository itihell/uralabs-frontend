import ListAreas from "@/app/components/listas/ListAreas";
import ListCortePracticante from "@/app/components/listas/ListCortePracticante copy";
import ListRoles from "@/app/components/listas/ListRoles";

export default function ListasPages() {
  return (
    <div>
      <h1>Listas Pages</h1>
      <ListRoles />
      <ListAreas/>
      <ListCortePracticante />
      
    </div>
  );
}

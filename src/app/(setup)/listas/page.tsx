import ListPracticante from "@/app/components/listas/ListPracticante";
import ListRoles from "@/app/components/listas/ListRoles";

export default function ListasPages() {
  return (
    <div>
      <h1>Listas Pages</h1>
      <ListRoles />
      <ListPracticante />
    </div>
  );
}

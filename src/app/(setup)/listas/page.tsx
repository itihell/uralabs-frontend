import ListCortePracticante from "@/app/components/listas/ListCortePracticante";
import ListModalidades from "@/app/components/listas/ListModalidades";
import ListRoles from "@/app/components/listas/ListRoles";

export default function ListasPages() {
  return (
    <div className='min-h-screen flex-col items-center justify-between'>
      <h1>Listas Pages</h1>
      <ListRoles />
      <hr />
      <h1>Modalidades</h1>
      <ListModalidades />
      <hr />
      <h1>Corte Practcas</h1>
      <ListCortePracticante />
    </div>
  );
}

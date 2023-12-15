import { Input } from "@nextui-org/react";

interface SearchAsignaturaProps {
  search: string;
  setSearch: (search: string) => void;
}
function SearchAsignatura({ search, setSearch }: SearchAsignaturaProps) {
  return (
    <div>
      <Input
        type="text"
        size="sm"
        defaultValue={search}
        onKeyUp={(e) => {
          e.key === "Enter" && setSearch(e.target.value);
        }}
        label="Buscar asignatura"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
    </div>
  );
}

export default SearchAsignatura;

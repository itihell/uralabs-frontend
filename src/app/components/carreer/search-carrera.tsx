import { Input } from "@nextui-org/react";

interface SearchCarrerasProps {
  search: string;
  setSearch: (search: string) => void;
}
function SearchCarreras({ search, setSearch }: SearchCarrerasProps) {
  return (
    <div>
      <Input
        type="text"
        size="sm"
        defaultValue={search}
        onKeyUp={(e) => {
          e.key === "Enter" && setSearch(e.target.value);
        }}
        label="Buscar Carreras"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
    </div>
  );
}

export default SearchCarreras;

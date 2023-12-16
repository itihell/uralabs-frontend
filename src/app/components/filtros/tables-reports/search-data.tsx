import { Input } from "@nextui-org/react";

interface SearchDataProps {
  search: string;
  setSearch: (search: string) => void;
}
function SearchData({ search, setSearch }: SearchDataProps) {
  return (
    <div>
      <Input
        type='text'
        size='sm'
        defaultValue={search}
        onKeyUp={(e) => {
          e.key === "Enter" && setSearch(e.target.value);
        }}
        label='Buscar por docente'
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
    </div>
  );
}

export default SearchData;

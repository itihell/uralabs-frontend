interface SearchModalidadProps {
  search: string;
  setSearch: (search: string) => void;
}

function SearchModalidad({ search, setSearch }: SearchModalidadProps) {
  return (
    <div>
      <input
        type='text'
        defaultValue={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
    </div>
  );
}

export default SearchModalidad;

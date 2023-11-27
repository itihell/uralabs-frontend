interface SearchRolesProps {
  search: string;
  setSearch: (search: string) => void;
}
function SearchRoles({ search, setSearch }: SearchRolesProps) {
  return (
    <div>
      <input
        type="text"
        defaultValue={search}
        onKeyUp={(e) => {
          e.key === "Enter" && setSearch(e.target.value);
        }}
      />
    </div>
  );
}

export default SearchRoles;

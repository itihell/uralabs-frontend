import { Input } from "@nextui-org/react";

interface SearchPracticanteProps {
    search: string;
    setSearch: (search: string) => void;
}

function SearchPracticante({ search, setSearch }: SearchPracticanteProps) {
    return (
        <div>
            <Input
                type="text"
                size="sm"
                defaultValue={search}
                onKeyUp={(e) => {
                    e.key === "Enter" && setSearch(e.target.value);
                }}
                label="Buscar practicante"
                onChange={(e) => {
                    setSearch(e.target.value);
                }}
            />
        </div>
    );
}

export default SearchPracticante;
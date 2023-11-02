"use client";
import { useState } from "react";
import SelectBtn from "./select-btn";
import SelectInput from "./select-input";
import SelectItem from "./select-item";
import SelectList from "./select-lists";
import { Selected } from "./interfaces/selected";
interface SelectSearchProps {
  items: any[];
  label: string;
  placeholder?: string;
  search: (buscar: string) => void;
}
export default function SelectSearch({
  items,
  label,
  placeholder,
  search,
}: SelectSearchProps) {
  const [texto, setTexto] = useState("");
  const [open, setOpen] = useState(false);
  const handleSearch = (buscar: string) => {
    search(buscar);
    setTexto(buscar);
  };

  const selectedItems = (e: Selected) => {
    console.log(e);
    setOpen(!open);
    setTexto(e.label);
  };

  return (
    <div>
      <div className="relative w-full">
        <SelectInput
          search={handleSearch}
          placeholder={placeholder}
          value={texto}
          focus={setOpen}
        />
        <SelectBtn />
      </div>
      {open && (
        <SelectList items={items} label={label} selected={selectedItems} />
      )}
    </div>
  );
}

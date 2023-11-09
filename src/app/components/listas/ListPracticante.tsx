"use client";
import feching from "@/app/utils/cliente-http";
import SelectSearch from "../select/select";
import { useEffect, useState } from "react";

interface ListPracticanteProps {
    selected: (e: Object) => void;
}

export default function ListPracticante({ selected }: ListPracticanteProps) {
    const [practicantes, setPracticantes] = useState([]);

    const changePracticante = (e: any) => {
        selected(e);
    };

    const searchData = async (buscar = "") => {
        const endPoind = `/catalogos/practicante?buscar=${buscar}`;
        const datos = await feching(endPoind, "no-store", "GET");
        setPracticantes(datos);
    };

    useEffect(() => {
        searchData("");
    }, []);

    return (
        <SelectSearch
            items={practicantes}
            selectedItem={changePracticante}
            label="nombre"
            placeholder="Buscar Practicante"
            search={searchData}
        />
    );
}

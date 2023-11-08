"use client";
import feching from "@/app/utils/cliente-http";
import SelectSearch from "../select/select";
import { useEffect, useState } from "react";

export default function ListPracticante() {
    const [practicantes, setPracticantes] = useState([]);

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
            label="nombre"
            placeholder="Buscar Practicante"
            search={searchData}
        />
    );
}

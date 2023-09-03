"use server";

import feching from "@/app/utils/cliente-http";

export async function saveLabUse(request: FormData) {
    const data = {
        className: request.get("className"),
        carrera: request.get("carrera"),
        teacher: request.get("teacher"),
        date: request.get("date"),
        modality: request.get("modality"),
        shift: request.get("shift"),
        year: request.get("year"),
        semester: request.get("semester"),
        female: request.get("female"),
        male: request.get("male"),
        total: request.get("total"),
        hours: request.get("hours"),
        laboratorio: request.get("laboratorio"),

    };
    const endPoind = `/uselab`;

    const registro = await feching(endPoind, "no-store", "POST", data);
    console.log(registro);

    if (!registro.data) {
        throw new Error(registro.error);
    }

    return registro.data;
}

export const updateLabUse = async (id: number, request: FormData) => {
    const data = {
        uselabs: request.get("uselabs"),
    };

    const endPoind = `/uselab/${id}`;

    const uselab = await feching(endPoind, "no-store", "PUT", data);

    if (!uselab.data) {
        const error = {
            error: uselab.error,
        };
        return error;
    }

    return uselab.data;
};

export const getLabUse = async (id: number) => {
    const endPoind = `/uselab/${id}`;

    const uselab = await feching(endPoind, "no-store", "GET");

    if (!uselab.data) {
        const error = {
            error: uselab.error,
        };
        return error;
    }

    return uselab.data;
};

export const deteleLabUseById = async (id: number) => {
    const endPoind = `/uselab/${id}`;

    const uselab = await feching(endPoind, "no-store", "DELETE");

    if (!uselab.data) {
        throw new Error(uselab);
        return uselab.data;
    }


};

export const getAllLabUse = async () => {
    const endPoind = `/uselab`;

    const labUse = await feching(endPoind, "no-store", "GET");

    if (!labUse.data) {
        throw new Error(labUse);
    }

    return labUse.data;
};

export const getAllCarreras = async () => {
    const endPoind = `/registro-carreras`;

    const carreras = await feching(endPoind, "no-store", "GET");

    if (!carreras.data) {
        throw new Error(carreras);
    }

    return carreras.data;
};

export const getAllModalidades = async () => {
    const endPoind = `/modalidades`;

    const modalidades = await feching(endPoind, "no-store", "GET");

    if (!modalidades.data) {
        throw new Error(modalidades);
    }

    return modalidades.data;
};

export const getAllLaboratorio = async () => {
    const endPoind = `/labregister`;

    const laboratorios = await feching(endPoind, "no-store", "GET");

    if (!laboratorios.data) {
        return [];
    }

    return laboratorios.data;
};
"use server";

import feching from "@/app/utils/cliente-http";

export async function saveLabs(request: FormData) {   
    const data = {
        lab: request.get("lab"),
    };
    const endPoind = `/labregister`;

    const labs = await feching(endPoind, "no-store", "POST", data); 

    if (!labs.data) {
        throw new Error(labs.error);
    }

    return labs.data;
    }

    export const updateLab = async (id: number, request: FormData) => {
        const data = {
        lab: request.get("lab"),
    };

    const endPoind = `/labregister/${id}`;

    const labs = await feching(endPoind, "no-store", "PUT", data);

    if (!labs.data) {
        const error = {
        error: labs.error,
    };
    return error;
    }

    return labs.data;
    };

    export const getLabs = async (id: number) => {
    const endPoind = `/labregister/${id}`;

    const labs = await feching(endPoind, "no-store", "GET");

    if (!labs.data) {
        const error = {
        error: labs.error,
    };
    return error;
    }

    return labs.data;
    };

    export const deteteLabById = async (id: number) => { 
    const endPoind = `/labregister/${id}`;

    const labs = await feching(endPoind, "no-store", "DELETE");

    if (!labs.data) {
        throw new Error(labs);
    }

    return labs.data;
    };

export const getAllLabs = async () => {
    const endPoind = `/labregister`;

    const labs = await feching(endPoind, "no-store", "GET");

    if (!labs.data) {
        throw new Error(labs);  //aqui segun esta el error
    }

    return labs.data;
    };

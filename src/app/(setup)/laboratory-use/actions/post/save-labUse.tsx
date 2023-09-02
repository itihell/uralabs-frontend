"use server";

import feching from "@/app/utils/cliente-http";

export async function saveLabUse(request: FormData) {
    const data = {
        role: request.get("role"),
    };
    const endPoind = `/roles`;

    const roles = await feching(endPoind, "no-store", "POST", data);

    if (!roles.data) {
        throw new Error(roles.error);
    }

    return roles.data;
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

"use client";
import { useState } from "react";

export default function FieldsLabUse({ fields }: { fields: any }) {
    const [field, setField] = useState(fields);

    const handlerChange = (e: any) => {
        const { name, value } = e.target;

        setField({
            ...field,
            [name]: value,
        });
    };

    return (
        <>
            <input type="hidden" id="id" name="id" defaultValue={fields?.id || ""} />

            <div>
                <label
                    htmlFor="role"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Roles
                </label>
            </div>
            <div className="mb-6">
                <input
                    type="text"
                    name="role"
                    id="role"
                    defaultValue={fields?.role || ""}
                    onChange={handlerChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
            </div>
            <div>
                <select id="underline_select" className="  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option selected>Seleccionar Carrera</option>
                    <option value="US">{ }</option>
                </select>
            </div>
            <div>
                <label htmlFor="teacher" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Docente</label>
            </div>
            <div className="mb-6">
                <input
                    type="text"
                    name="teacher"
                    id="teacher"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
            </div>
            <div>
                <label htmlFor="date" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-white">Fecha</label>
            </div>
            <div className="mb-6">
                <input
                    type="text"
                    name="date"
                    id="date"
                    className="appearance-none block bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                />
            </div>
            <div>
                <label htmlFor="modality" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-white">Modalidad</label>
            </div>
            <div className="mb-6">
                <input
                    type="text"
                    name="modality"
                    id="modality"
                    className="bappearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                />
            </div>
            <div>
                <label htmlFor="shift" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Turno</label>
            </div>
            <div className="mb-6">
                <input
                    type="text"
                    name="shift"
                    id="shift"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
            </div>
            <div>
                <label htmlFor="year" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Año</label>
            </div>
            <div className="mb-6">
                <input
                    type="text"
                    name="year"
                    id="year"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
            </div>
            <div>
                <label htmlFor="semester" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Semestre</label>
            </div>
            <div className="mb-6">
                <input
                    type="text"
                    name="semester"
                    id="semester"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
            </div>
            <div>
                <label htmlFor="total" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Cantidad</label>
            </div>
            <div className="mb-6">
                <input
                    type="text"
                    name="total"
                    id="total"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
            </div>
            <div>
                <label htmlFor="hours" className="bblock mb-2 text-sm font-medium text-gray-900 dark:text-white">Horas</label>
            </div>
            <div className="mb-6">
                <input
                    type="text"
                    name="hours"
                    id="hours"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
            </div>
        </>
    );
}
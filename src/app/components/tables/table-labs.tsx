import { revalidatePath } from "next/cache";
import OptionsLabs from "./options-labs";
import ButtonDeleteLab from "../../labs/button-delete-lab";
import ButtonEditLab from "../../labs/button-edit-lab";
import { ButtonGroup } from "@nextui-org/react";
import { getAllLabs } from "@/app/actions/post/save-labs";

const TableLabs = async () => { 
revalidatePath("/labregister");
const data = await getAllLabs();  

return (
    <div>
    <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
        <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400 sm:rounded-lg'>
        <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
            <tr>
            <th className='px-6 py-3'>ID</th>
            <th className='px-6 py-3'>Laboratorio</th>
            <th className='px-6 py-3'>Descripcion</th>
            </tr>
        </thead>
        <tbody className='bg-white border-b dark:bg-gray-900 dark:border-gray-700'>
            {Object.values(data).map((lab: any) => (
            <tr key={`labregister-${lab.id}`}>
                <td className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                    {lab.id}
                </td>
                <td className="px-6 py-4"> {lab.lab}</td>
                <td className="px-6 py-4">
                <div className="flex flex-row items-center justify-end">
                    <ButtonDeleteLab id={lab.id} />
                    <ButtonEditLab id={lab.id} />
                </div>
                </td>
            </tr>
            ))}
        </tbody>
        </table>
    </div>
    </div>
);
};
export default TableLabs ;

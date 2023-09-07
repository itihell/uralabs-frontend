// import MessageToast from "@/app/components/message-toast";
// import Link from "next/link";
import TableLabs from "../../components/tables/table-labs";
import FormLabs from "@/app/labs/form-labs";


export default function LabsPage() {
    return (
        <div>
        <div className='min-h-screen'>
            <h1 className='mb-3'>Listado de Laboratorios</h1>
            <div className='mb-3'>

            <h1>descripcion</h1>
            <div className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            </div>
            
            <div>
                <FormLabs/>  
            </div>
        </div>
                <TableLabs/>   
        </div>
        </div>
    );
}

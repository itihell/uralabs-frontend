import { deleteLabs } from "@/app/actions/delete/delete-labs";
import { revalidatePath, revalidateTag } from "next/cache";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function DeleteLabPage({
    params,
    }: {
    params: { delete: string };
    }) {
    const deleteLab = async () => {
        "use server";
        const id = parseInt(params.delete);
        const data = await deleteLabs(id);

        redirect("/labregister"); 
    };
    return (
        <div className='min-h-screen'>
        <h1>Desea eliminar laboratorio número {params.delete}</h1>
        <div className='flex justify-center'>
            <span className='pt-1'>
            <Link href='/labregister'>
                <span className='text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>
                NO
                </span>
            </Link>
            </span>
            <form action={deleteLab}>
            <button
                type='submit'
                className='text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'
            >
            SI
            </button>
            </form>
        </div>
        </div>
    );
}


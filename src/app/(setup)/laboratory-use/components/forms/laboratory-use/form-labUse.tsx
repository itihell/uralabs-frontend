// import { saveLabUse } from "@/app/laboratory-use/actions/post/save-labUse";
// import FieldsLabUse from "./fields-labUse";
// import { revalidatePath } from "next/cache";
// export default function FormRoles({ roleId = "" }) {
//     const crearRole = async (formData: FormData) => {
//         "use server";
//         const data = await saveLabUse(formData);

//         revalidatePath("/uselab");
//     };

//     return (
//         <form action={crearRole}>
//             <div>
//                 <FieldsLabUse />

//                 <div>
//                     <button
//                         type="submit"
//                         className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
//                         name="btn-guardar"
//                     >
//                         Guardar
//                     </button>
//                 </div>
//             </div>
//         </form>
//     );
// }

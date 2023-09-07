import { revalidatePath, revalidateTag } from "next/cache";
import { saveLabs } from "../actions/post/save-labs"; 
import FieldsLabs from "./fields-labs";
import { redirect } from "next/navigation";


export default function FormLabs({ labId = "" }) { 
  const crearLab = async (formData: FormData) => { 
    "use server";
    const data = await saveLabs(formData);

    revalidatePath("/labregirter"); 
  };

  return (
    
    <form action={crearLab}> 
      <div>
        {/* <FieldsLab /> */}
         <FieldsLabs fields={{ id: 1, lab: "admin" }} /> {/*  este se lo añadi  */}
        <div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            name="btn-guardar"
          >
            Guardar
          </button>
        </div>
      </div>

      <div></div>
    </form>
  );
}

import MessageToast from "@/app/components/message-toast";
import TableRoles from "../../components/tables/table-roles";
import Link from "next/link";
import FormRoles from "@/app/components/forms/roles/form-roles";

export default function RolesPage() {
  return (
    <div>
      <div className="min-h-screen">
        <h1 className="mb-3">Listado de roles</h1>
        <div className="mb-3">
          <div>
            <FormRoles />
          </div>
          {/* <div>
            <Link
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              href="/roles/add"
            >
              Agregar
            </Link>
          </div> */}
        </div>
        <TableRoles />
      </div>
    </div>
  );
}

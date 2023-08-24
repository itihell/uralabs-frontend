import MessageToast from "@/app/components/message-toast";
import TableRoles from "../../components/tables/table-roles";
import Link from "next/link";
import FormRoles from "@/app/components/forms/roles/form-roles";

export default function RolesPage() {
  return (
    <div className='min-h-screen'>
      <div className='flex flex-col items-center justify-center min-h-screen py-2'>
        <h1 className='mb-3'>Listado de roles</h1>
        <div className='mb-3'>
          <div>
            <FormRoles />
          </div>
        </div>
        <TableRoles />
      </div>
    </div>
  );
}

import { revalidatePath } from "next/cache";
import OptionsRoles from "./options-roles";
import { getAllRoles } from "@/app/actions/post/save-roles";
import ButtonDeleteRole from "../forms/roles/button-delete-role";
import ButtonEditRole from "../forms/roles/button-edit-role";
import { ButtonGroup } from "@nextui-org/react";

const TableRoles = async () => {
  revalidatePath("/roles");
  const data = await getAllRoles();

  return (
    <div>
      <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
        <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400 sm:rounded-lg'>
          <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
            <tr>
              <th className='px-6 py-3'>ID</th>
              <th className='px-6 py-3'>Role</th>
              <th className='px-6 py-3'>Config</th>
            </tr>
          </thead>
          <tbody className='bg-white border-b dark:bg-gray-900 dark:border-gray-700'>
            {Object.values(data).map((role: any) => (
              <tr key={`role-${role.id}`}>
                <td className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                  {role.id}
                </td>
                <td className='px-6 py-4'> {role.role}</td>
                <td className='px-6 py-4'>
                  <div className='flex flex-row items-center justify-end'>
                    <ButtonDeleteRole id={role.id} />
                    <ButtonEditRole id={role.id} />
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
export default TableRoles;

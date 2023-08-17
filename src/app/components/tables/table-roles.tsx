import getRolesUser from "@/app/actions/get/get-roles-user";
import MessageToast from "../message-toast";
import Link from "next/link";

const TableRoles = async () => {
  const error = true;
  try {
    const { data } = await getRolesUser();

    return (
      <div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 sm:rounded-lg">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th className="px-6 py-3">ID</th>
                <th className="px-6 py-3">Role</th>
                <th className="px-6 py-3">Config</th>
              </tr>
            </thead>
            <tbody className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              {Object.values(data).map((role: any) => (
                <tr key={`role-${role.id}`}>
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {role.id}
                  </td>
                  <td className="px-6 py-4"> {role.role}</td>
                  <td className="px-6 py-4">
                    <div>
                      <Link href={`/roles/delete/${role.id}`} >X</Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  } catch (error) {
    return <MessageToast message={error.message} show={true} />;
  }
};
export default TableRoles;

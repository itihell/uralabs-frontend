import feching from "@/app/utils/cliente-http";

export default async function ListUseres() {
  const getUsers = async () => {
    const endPoind = "/catalogos/users";
    const roles = await feching(endPoind, "no-store", "GET");
    return roles;
  };

  const users = await getUsers();
  return (
    <div>
      <h1>List users</h1>
      <select  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        {users.map((users: any) => {
          return (
            <option key={`users-${users.id}`}>
              {users.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}

import { getRoles } from "@/app/actions/post/save-roles";

export default async function FieldsRoles({ roleId = 0 }) {
  let fields: any = {};
  if (roleId > 0) {
    fields = await getRoles(roleId);
  }

  return (
    <>
      {/* <input type="number" id="id" name="id" defaultValue={fields.id || ""} /> */}
      <div>
        <label
          htmlFor="role"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Rol
        </label>
      </div>
      <div className="mb-6">
        <input
          type="text"
          name="role"
          id="role"
          defaultValue={fields.role || ""}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
    </>
  );
}

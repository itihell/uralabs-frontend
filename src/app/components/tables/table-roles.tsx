import getRolesUser from "@/app/actions/get/get-roles-user";

export default async function TableRoles() {
  const { data } = await getRolesUser();

  return (
    <table className="table-auto">
      <thead>
        <tr>
          <th>ID</th>
          <th>Role</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {Object.values(data).map((role: any) => (
          <tr key={`role-${role.id}`}>
            <td>{role.id}</td>
            <td>{role.role}</td>
          </tr>
        ))}
        <tr>
          <td>1</td>
          <td>Administrador</td>
          <td>Editar, Eliminar</td>
        </tr>
      </tbody>
    </table>
  );
}

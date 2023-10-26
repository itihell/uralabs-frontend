import feching from "@/app/utils/cliente-http";

export default async function ListRoles() {
  const getRoles = async () => {
    const endPoind = "/catalogos/roles";
    const roles = await feching(endPoind, "no-store", "GET");
    return roles;
  };

  const roles = await getRoles();
  return (
    <select>
      {roles.map((role: any) => {
        return <option key={`role-${role.id}`}>{role.role}</option>;
      })}
    </select>
  );
}
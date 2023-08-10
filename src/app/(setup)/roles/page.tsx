import MessageToast from "@/app/components/message-toast";
import TableRoles from "../../components/tables/table-roles";

export default function RolesPage() {
  return (
    <div>
      <div className="min-h-screen">
        <h1>Listado de roles</h1>
        <TableRoles />
      </div>
    </div>
  );
}

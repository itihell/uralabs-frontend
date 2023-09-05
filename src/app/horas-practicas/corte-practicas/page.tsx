import MessageToast from "@/app/components/message-toast";
import TableRoles from "../../components/tables/table-roles";
import Link from "next/link";
import FormRoles from "@/app/components/forms/roles/form-roles";

export default function CortePracticas() {
  return (
    <div>
      <div className="min-h-screen">
        <h1 className="mb-3">Listado de roles dentro desde corte practicas</h1>
        <div className="mb-3">
          <div>
            <FormRoles />
          </div>
        </div>
        <TableRoles />
      </div>
    </div>
  );
}

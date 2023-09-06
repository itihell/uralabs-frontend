import MessageToast from "@/app/components/message-toast";
import TableRoles from "../../components/tables/table-roles";
import Link from "next/link";
import FormRoles from "@/app/components/forms/roles/form-roles";

export default function CortePracticas() {
  return (
    <div>
      <div className="min-h-screen">
        <h1 className="text-4xl font-bold text-center text-indigo-700 mb-6">
          Corte FormPracticante
        </h1>
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

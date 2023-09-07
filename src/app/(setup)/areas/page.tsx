import FormAreas from "@/app/components/forms/areas/form-areas";
import TableAreas from "@/app/components/tables/table-areas";

export default function RolesPage() {
  return (
    <div>
      <div className="min-h-screen">
        <h1 className="mb-3">Listado de Areas</h1>
        <div className="mb-3">
          <div>
            <FormAreas />
          </div>
        </div>
        <TableAreas />
      </div>
    </div>
  );
}

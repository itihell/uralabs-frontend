import FormCortePracticas from "../components/screens/forms/corte-practicas/form-corte";
import TableCortePractica from "../components/screens/tables/table-corte-practica";

export default function CortePracticas() {
  return (
    <div>
      <div className="min-h-screen">
        <h1 className="text-4xl font-bold text-center text-indigo-700 mb-6">
          Corte Practicas
        </h1>
        <div className="mb-3">
          <FormCortePracticas />
        </div>
        <TableCortePractica />
      </div>
    </div>
  );
}

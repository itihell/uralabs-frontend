import TablePracticante from "@/app/components/screens/tables/tables-practicantes";
import FormPracticante from "@/app/components/screens/forms/horas-practicas/form-practicante";

export default function Practicante() {
  return (
    <div>
      <div className="min-h-screen">
        <h1 className="text-4xl font-bold text-center text-indigo-700 mb-6">
          Practicante
        </h1>
        <div className="mb-3">
          <FormPracticante />
        </div>
        <TablePracticante />
      </div>
    </div>
  );
}

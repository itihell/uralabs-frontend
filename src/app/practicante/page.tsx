import FormPracticante from "../components/screens/forms/practicante/form-practicante";
import TablePracticante from "../components/screens/tables/tables-practicantes";

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

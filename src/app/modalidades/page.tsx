import FormModalidades from "../components/screens/forms/form-modalidades";
import TablesModalidades from "../components/screens/tables/tables-modalidades";

export default function RolesPage() {
  return (
    <div>
      <div className='min-h-screen'>
        <h1 className='mb-3'>Listado de roles</h1>
        <div className='mb-3'>
          <div>
            <FormModalidades />
          </div>
        </div>
        <TablesModalidades />
      </div>
    </div>
  );
}

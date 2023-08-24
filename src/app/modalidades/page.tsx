import TablesModalidades from "../components/screens/tables/tables-modalidades";
import FormModalidades from "../components/screens/forms/form-modalidades";
export default function ModalidadesPage() {
  return (
    <div className='min-h-screen'>
      <div className='flex flex-col items-center justify-center min-h-screen py-2'>
        <h1 className='mb-3'>Listado de modalidades</h1>
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

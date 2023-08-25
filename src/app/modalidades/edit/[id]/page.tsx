import FormEditModalidades from "../../../components/screens/forms/form-edit-modalidades";

export default function EditModalidadPage({
  params,
}: {
  params: { id: number };
}) {
  return (
    <div className='min-h-screen'>
      <h1>desde la pagina {params.id}</h1>
      <FormEditModalidades modalidadId={params.id} />
    </div>
  );
}

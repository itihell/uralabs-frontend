import FormEditRole from "@/app/components/forms/roles/form-edit-role";

export default function EditRolePage({ params }: { params: { id: number } }) {
  return (
    <div className="min-h-screen">
      <h1>desde la pagina {params.id}</h1>
      <FormEditRole roleId={params.id} />
    </div>
  );
}

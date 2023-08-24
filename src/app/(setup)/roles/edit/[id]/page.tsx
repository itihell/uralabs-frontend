import FormEditRole from "@/app/components/forms/roles/form-edit-role";

export default function EditRolePage({ params }: { params: { id: number } }) {
  return (
    <div>
      <h1>Editando un registro {params.id}</h1>
      <FormEditRole roleId={params.id} />
    </div>
  );
}

import { deleteRoles } from "@/app/actions/delete/delete-roles";
import Link from "next/link";

export default function DeleteRolePage({
  params,
}: {
  params: { delete: string };
}) {
  return (
    <div className="min-h-screen">
      <h1>Desea eliminar el rol</h1>
      <Link href="/roles">No</Link>
      <form action={deleteRoles}>
        <input type="text" name="id" value={params.delete} />
        <button type="submit">Si</button>
      </form>
     
    </div>
  );
}

export default function DeleteRolePage({
  params,
}: {
  params: { delete: string };
}) {
  return (
    <div className="min-h-screen">
      <pre>{params.delete}</pre>
    </div>
  );
}

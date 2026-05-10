export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-6">
        <div className="h-14 w-14 animate-spin rounded-full border-4 border-slate-200 border-t-blue-600" />

        <p className="text-sm font-medium text-slate-500">
          Cargando DG Web Studio...
        </p>
      </div>
    </div>
  );
}
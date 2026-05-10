export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-10">
      <div className="container-custom flex flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex items-center gap-4">
          <img
            src="/logo.jpg"
            alt="DGWeb"
            className="h-12 w-auto"
          />

          <div>
            <p className="font-semibold text-slate-900">
              DG Web Studio
            </p>

            <p className="text-sm text-slate-500">
              Diseño web para negocios locales
            </p>
          </div>
        </div>

        <div className="text-sm text-slate-500">
          © 2026 DG Web Studio. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
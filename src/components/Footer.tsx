import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-14">
      <div className="container-custom">
        <div className="flex flex-col items-center justify-between gap-10 md:flex-row">
          {/* LEFT */}
          <div className="flex items-center gap-5">
            <Image
              src="/logo.jpg"
              alt="DG Web Studio"
              width={160}
              height={70}
              className="h-16 w-auto"
            />

            <div>
              <p className="text-lg font-bold text-slate-950">
                DG Web Studio
              </p>

              <p className="text-sm text-slate-500">
                Diseño web moderno para negocios locales
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col items-center gap-2 text-sm text-slate-500 md:items-end">
            <p>
              contacto@dg-webstudio.com
            </p>

            <p>
              +34 628 247 900
            </p>

            <p>
              © 2026 DG Web Studio
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
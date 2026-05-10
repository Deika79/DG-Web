"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 border-b border-white/30 bg-white/70 backdrop-blur-xl"
    >
      <div className="container-custom flex h-24 items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.jpg"
            alt="DG Web Studio"
            width={160}
            height={80}
            className="h-20 w-auto object-contain transition duration-300 hover:scale-105"
          />
        </Link>

        {/* DESKTOP */}
        <nav className="hidden items-center gap-10 md:flex">
          <a
            href="#servicios"
            className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
          >
            Servicios
          </a>

          <a
            href="#portfolio"
            className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
          >
            Proyectos
          </a>

          <a
            href="#contacto"
            className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
          >
            Contacto
          </a>
        </nav>

        {/* CTA DESKTOP */}
        <a
          href="#contacto"
          className="soft-shadow hidden rounded-2xl bg-blue-600 px-6 py-4 text-sm font-semibold text-white transition hover:scale-[1.02] hover:bg-blue-700 md:block"
        >
          Solicitar presupuesto
        </a>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white md:hidden"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="border-t border-slate-200 bg-white md:hidden"
          >
            <div className="container-custom flex flex-col gap-6 py-8">
              <a
                href="#servicios"
                onClick={() => setOpen(false)}
                className="text-lg font-medium text-slate-700"
              >
                Servicios
              </a>

              <a
                href="#portfolio"
                onClick={() => setOpen(false)}
                className="text-lg font-medium text-slate-700"
              >
                Proyectos
              </a>

              <a
                href="#contacto"
                onClick={() => setOpen(false)}
                className="text-lg font-medium text-slate-700"
              >
                Contacto
              </a>

              <a
                href="#contacto"
                onClick={() => setOpen(false)}
                className="rounded-2xl bg-blue-600 px-6 py-4 text-center font-semibold text-white"
              >
                Solicitar presupuesto
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="section-padding overflow-hidden bg-slate-950">
      <div className="container-custom relative">
        {/* GLOW */}
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/20 blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10 mx-auto max-w-4xl text-center"
        >
          <span className="mb-6 inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm font-medium text-blue-300">
            ¿Hablamos?
          </span>

          <h2 className="text-4xl font-black leading-tight text-white md:text-6xl">
            Tu negocio merece una web moderna y profesional
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-slate-300">
            Diseño páginas rápidas, visuales y optimizadas para ayudar
            a negocios locales a transmitir confianza y captar más clientes.
          </p>

          <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="#contacto"
              className="rounded-2xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:scale-[1.02] hover:bg-blue-700"
            >
              Solicitar presupuesto
            </a>

            <a
              href="https://wa.me/34628247900"
              target="_blank"
              className="rounded-2xl border border-white/20 bg-white/5 px-8 py-4 font-semibold text-white transition hover:bg-white/10"
            >
              Hablar por WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="section-padding bg-blue-600">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >
          <h2 className="text-4xl font-black leading-tight text-white md:text-6xl">
            Tu negocio merece una web moderna y profesional
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-blue-100">
            Si necesitas una página web clara, rápida y preparada para transmitir confianza,
            puedo ayudarte a crear una presencia online moderna sin complicaciones.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="#contacto"
              className="rounded-2xl bg-white px-8 py-4 text-sm font-bold text-blue-600 transition hover:scale-105"
            >
              Solicitar presupuesto
            </a>

            <a
              href="#portfolio"
              className="rounded-2xl border border-white/30 px-8 py-4 text-sm font-bold text-white transition hover:bg-white/10"
            >
              Ver proyectos
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
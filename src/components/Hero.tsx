"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="hero-grid relative overflow-hidden">
      {/* GLOW */}
      <div className="blue-glow left-0 top-0" />
      <div className="blue-glow bottom-0 right-0" />

      <div className="container-custom grid min-h-[92vh] items-center gap-20 py-20 lg:grid-cols-2">
        {/* TEXTO */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="mb-6 inline-flex rounded-full border border-blue-200 bg-white px-5 py-2 text-sm font-medium text-blue-700 shadow-sm">
              Diseño web moderno para negocios locales
            </span>

            <h1 className="max-w-2xl text-4xl font-black leading-[0.95] tracking-tight text-slate-950 sm:text-5xl md:text-7xl">
              Webs modernas que ayudan a tu negocio a{" "}
              <span className="gradient-text">
                transmitir confianza
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-relaxed md:text-xl text-slate-600">
              Diseño páginas web rápidas, elegantes y optimizadas para móvil,
              pensadas para negocios que quieren mejorar su imagen online
              y conseguir más clientes.
            </p>

            {/* BUTTONS */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#portfolio"
                className="soft-shadow rounded-2xl bg-blue-600 px-8 py-4 text-center text-sm font-semibold text-white transition hover:scale-[1.02] hover:bg-blue-700"
              >
                Ver proyectos
              </a>

              <a
                href="#contacto"
                className="rounded-2xl border border-slate-300 bg-white px-8 py-4 text-center text-sm font-semibold text-slate-700 transition hover:border-blue-600 hover:text-blue-600"
              >
                Solicitar presupuesto
              </a>
            </div>

            {/* FEATURES */}
            <div className="mt-10 flex flex-wrap gap-6 text-sm font-medium text-slate-600">
              <span>✓ Diseño responsive</span>
              <span>✓ SEO local básico</span>
              <span>✓ WhatsApp integrado</span>
              <span>✓ Soporte cercano</span>
            </div>
          </motion.div>
        </div>

        {/* FOTO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto w-full max-w-lg"
        >
          <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-blue-100 to-blue-300 opacity-40 blur-3xl" />

          <div className="soft-shadow relative overflow-hidden rounded-[2.5rem] border border-white/40 bg-white p-4">
            <Image
              src="/avatar.jpg"
              alt="DG Web Studio"
              width={700}
              height={900}
              className="h-[620px] w-full object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";
import {
  MonitorSmartphone,
  LayoutTemplate,
  RefreshCcw,
  Search,
  Wrench,
} from "lucide-react";

const services = [
  {
    icon: MonitorSmartphone,
    title: "Diseño web profesional",
    description:
      "Webs modernas, rápidas y adaptadas a móvil para transmitir confianza y mejorar la imagen de tu negocio.",
  },

  {
    icon: LayoutTemplate,
    title: "Landing pages",
    description:
      "Páginas optimizadas para captar clientes, promocionar servicios y mejorar conversiones.",
  },

  {
    icon: RefreshCcw,
    title: "Modernización de webs",
    description:
      "Renuevo páginas antiguas con un diseño moderno, mejor rendimiento y experiencia profesional.",
  },

  {
    icon: Search,
    title: "SEO local básico",
    description:
      "Optimización inicial para ayudarte a posicionarte mejor y captar clientes de tu zona.",
  },

  {
    icon: Wrench,
    title: "Soporte y mantenimiento",
    description:
      "Ayuda rápida para cambios, mejoras y mantenimiento continuo de tu web.",
  },
];

export default function Services() {
  return (
    <section
      id="servicios"
      className="section-padding section-fade bg-slate-50"
    >
      <div className="container-custom">
        {/* HEADER */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            Servicios
          </span>

          <h2 className="text-4xl font-black leading-tight text-slate-950 md:text-6xl">
            Todo lo que necesita un negocio local para destacar online
          </h2>

          <p className="mt-6 text-xl leading-relaxed text-slate-600">
            Diseño páginas modernas, rápidas y preparadas para transmitir
            confianza y facilitar el contacto con clientes.
          </p>
        </div>

        {/* GRID */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="group soft-shadow rounded-[2rem] border border-white/50 bg-white p-8 transition duration-500 hover:-translate-y-3"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 transition duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">
                  <Icon size={30} />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-slate-950">
                  {service.title}
                </h3>

                <p className="mt-4 leading-relaxed text-slate-600">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
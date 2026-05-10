"use client";

import { motion } from "framer-motion";

const plans = [
  {
    title: "Landing Page",
    price: "Desde 300€",
    description:
      "Ideal para pequeños negocios que necesitan presencia online rápida y profesional.",
  },

  {
    title: "Web Corporativa",
    price: "Desde 600€",
    description:
      "Página completa para mostrar servicios, contacto y mejorar la imagen del negocio.",
  },

  {
    title: "Rediseño Web",
    price: "Presupuesto personalizado",
    description:
      "Modernización de webs antiguas con diseño actual, móvil y mejor rendimiento.",
  },
];

export default function Pricing() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            Precios orientativos
          </span>

          <h2 className="text-4xl font-black text-slate-950 md:text-6xl">
            Soluciones adaptadas a pequeños negocios
          </h2>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              className="soft-shadow rounded-[2rem] border border-slate-200 bg-slate-50 p-8"
            >
              <h3 className="text-2xl font-bold text-slate-950">
                {plan.title}
              </h3>

              <p className="mt-6 text-4xl font-black text-blue-600">
                {plan.price}
              </p>

              <p className="mt-6 leading-relaxed text-slate-600">
                {plan.description}
              </p>

              <a
                href="#contacto"
                className="mt-8 inline-block rounded-2xl bg-blue-600 px-6 py-4 font-semibold text-white transition hover:bg-blue-700"
              >
                Solicitar información
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
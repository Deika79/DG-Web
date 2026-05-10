"use client";

import { motion } from "framer-motion";
import {
  Smartphone,
  Rocket,
  HeartHandshake,
  ShieldCheck,
  Gauge,
  MessageCircle,
} from "lucide-react";

const features = [
  {
    icon: Rocket,
    title: "Webs rápidas",
    description:
      "Páginas optimizadas para cargar rápido y ofrecer una experiencia profesional desde el primer segundo.",
  },

  {
    icon: Smartphone,
    title: "Diseño responsive",
    description:
      "Tu web se verá perfecta en móvil, tablet y ordenador. La mayoría de clientes visitan desde el teléfono.",
  },

  {
    icon: HeartHandshake,
    title: "Trato cercano",
    description:
      "Comunicación sencilla, sin tecnicismos ni procesos complicados. Hablo claro y me adapto a tu negocio.",
  },

  {
    icon: ShieldCheck,
    title: "Imagen profesional",
    description:
      "Diseños modernos que transmiten confianza y ayudan a mejorar la percepción de tu marca.",
  },

  {
    icon: Gauge,
    title: "Optimización móvil",
    description:
      "Experiencia fluida y rápida para que los usuarios encuentren fácilmente lo que necesitan.",
  },

  {
    icon: MessageCircle,
    title: "Soporte sencillo",
    description:
      "Ayuda rápida para cambios, dudas o mejoras. Sin tickets infinitos ni esperas innecesarias.",
  },
];

export default function WhyDGWeb() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container-custom">
        {/* HEADER */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            Por qué DGWeb
          </span>

          <h2 className="text-4xl font-black text-slate-900 md:text-5xl">
            Diseño web pensado para negocios locales
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Mi objetivo no es solo crear una web bonita, sino ayudarte a transmitir profesionalidad,
            facilitar el contacto con clientes y mejorar tu presencia online.
          </p>
        </div>

        {/* GRID */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
                  <Icon size={30} />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-relaxed text-slate-600">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
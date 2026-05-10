"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Laura Gómez",
    business: "Clínica dental",
    text: "La web transmite exactamente la imagen profesional que queríamos. El proceso fue rápido y muy sencillo.",
  },

  {
    name: "Carlos Martín",
    business: "Gimnasio local",
    text: "Ahora nuestros clientes encuentran toda la información fácilmente desde el móvil. Muy recomendable.",
  },

  {
    name: "Marina Torres",
    business: "Centro de estética",
    text: "Diseño moderno, rápido y con un trato muy cercano. Se nota mucho la diferencia respecto a nuestra antigua web.",
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* HEADER */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            Opiniones
          </span>

          <h2 className="text-4xl font-black text-slate-900 md:text-5xl">
            Negocios que ya han mejorado su presencia online
          </h2>
        </div>

        {/* CARDS */}
        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-8"
            >
              <p className="text-lg leading-relaxed text-slate-700">
                “{testimonial.text}”
              </p>

              <div className="mt-8">
                <h4 className="font-bold text-slate-900">
                  {testimonial.name}
                </h4>

                <p className="text-sm text-slate-500">
                  {testimonial.business}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
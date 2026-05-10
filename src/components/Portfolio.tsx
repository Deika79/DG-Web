"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../data/projects";

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="section-padding overflow-hidden bg-white"
    >
      <div className="container-custom">
        {/* HEADER */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            Portfolio
          </span>

          <h2 className="text-4xl font-black leading-tight text-slate-950 md:text-6xl">
            Proyectos diseñados para negocios reales
          </h2>

          <p className="mt-6 text-xl leading-relaxed text-slate-600">
            Webs modernas, rápidas y visualmente cuidadas para transmitir
            confianza y mejorar la presencia online de cada negocio.
          </p>
        </div>

        {/* PROJECTS */}
        <div className="mt-24 space-y-24">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className={`grid items-center gap-14 lg:grid-cols-2 ${
                index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* IMAGE */}
              <div className="group relative">
                {/* GLOW */}
                <div className="absolute -inset-6 rounded-[3rem] bg-blue-100 opacity-50 blur-3xl transition duration-500 group-hover:opacity-80" />

                <div className="soft-shadow relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-[420px] w-full object-cover object-top transition duration-700 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* CONTENT */}
              <div>
                <span className="inline-flex rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-600">
                  {project.category}
                </span>

                <h3 className="mt-6 text-4xl font-black leading-tight text-slate-950">
                  {project.title}
                </h3>

                <p className="mt-6 text-lg leading-relaxed text-slate-600">
                  {project.description}
                </p>

                <div className="mt-10">
                  <a
                    href={project.link}
                    target="_blank"
                    className="inline-flex items-center gap-3 rounded-2xl bg-blue-600 px-7 py-4 font-semibold text-white transition hover:gap-4 hover:bg-blue-700"
                  >
                    Ver proyecto
                    <ArrowUpRight size={20} />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
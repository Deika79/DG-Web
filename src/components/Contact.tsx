"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MessageCircle,
} from "lucide-react";

import { useState } from "react";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSuccess(true);

        setFormData({
          name: "",
          email: "",
          message: "",
        });
      }
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  }

  return (
    <section
      id="contacto"
      className="section-padding bg-slate-50"
    >
      <div className="container-custom">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* INFO */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
              Contacto
            </span>

            <h2 className="text-4xl font-black leading-tight text-slate-950 md:text-5xl">
              Hablemos sobre tu próxima web
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
              Si necesitas una web moderna, rápida y profesional
              para tu negocio, puedes escribirme sin compromiso.
            </p>

            {/* ITEMS */}
            <div className="mt-10 space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
                  <Mail size={24} />
                </div>

                <div>
                  <p className="text-sm text-slate-500">
                    Email
                  </p>

                  <a
                    href="mailto:contacto@dg-webstudio.com"
                    className="font-semibold text-slate-900"
                  >
                    contacto@dg-webstudio.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
                  <Phone size={24} />
                </div>

                <div>
                  <p className="text-sm text-slate-500">
                    Teléfono
                  </p>

                  <a
                    href="tel:+34628247900"
                    className="font-semibold text-slate-900"
                  >
                    +34 628 247 900
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-green-600">
                  <MessageCircle size={24} />
                </div>

                <div>
                  <p className="text-sm text-slate-500">
                    WhatsApp
                  </p>

                  <a
                    href="https://wa.me/34628247900"
                    target="_blank"
                    className="font-semibold text-slate-900"
                  >
                    Hablar por WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="soft-shadow rounded-[2rem] border border-white/50 bg-white p-8"
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Nombre
                </label>

                <input
                  type="text"
                  required
                  placeholder="Tu nombre"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      name: e.target.value,
                    })
                  }
                  className="w-full rounded-2xl border border-slate-200 px-5 py-4 outline-none transition focus:border-blue-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Email
                </label>

                <input
                  type="email"
                  required
                  placeholder="tu@email.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      email: e.target.value,
                    })
                  }
                  className="w-full rounded-2xl border border-slate-200 px-5 py-4 outline-none transition focus:border-blue-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Cuéntame sobre tu proyecto
                </label>

                <textarea
                  rows={6}
                  required
                  placeholder="Necesito una web para mi negocio..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      message: e.target.value,
                    })
                  }
                  className="w-full rounded-2xl border border-slate-200 px-5 py-4 outline-none transition focus:border-blue-500"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-2xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700 disabled:opacity-70"
              >
                {loading
                  ? "Enviando..."
                  : "Solicitar presupuesto"}
              </button>

              {success && (
                <div className="rounded-2xl bg-green-100 px-5 py-4 text-sm font-medium text-green-700">
                  ¡Mensaje enviado correctamente! Te responderé lo antes posible.
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dg-webstudio.com"),

  title: {
    default: "DG Web Studio | Diseño Web para Negocios Locales",
    template: "%s | DG Web Studio",
  },

  description:
    "Diseño páginas web modernas, rápidas y profesionales para negocios locales. Webs corporativas, landing pages, SEO local y modernización web.",

  keywords: [
    "diseño web madrid",
    "desarrollador web freelance madrid",
    "diseño web para negocios locales",
    "páginas web para empresas",
    "landing pages",
    "seo local",
    "modernización web",
    "diseño web profesional",
    "next.js developer",
    "diseñador web freelance",
    "webs para restaurantes",
    "webs para clínicas",
    "webs corporativas",
  ],

  authors: [
    {
      name: "David García",
    },
  ],

  creator: "David García",

  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://dg-webstudio.com",
    title: "DG Web Studio",
    description:
      "Diseño páginas web modernas para negocios locales.",
    siteName: "DG Web Studio",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DG Web Studio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "DG Web Studio",
    description:
      "Diseño páginas web modernas para negocios locales.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={geist.className}>
        {children}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",

              name: "DG Web Studio",

              image: "https://dg-webstudio.com/og-image.jpg",

              url: "https://dg-webstudio.com",

              telephone: "+34628247900",

              email: "contacto@dg-webstudio.com",

              areaServed: "España",

              address: {
                "@type": "PostalAddress",
                addressCountry: "ES",
              },

              description:
                "Diseño web moderno para negocios locales.",
            }),
          }}
        />

        <Analytics />
      </body>
    </html>
  );
}
import type { Metadata } from "next";
import { Geist } from "next/font/google";
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
    "diseño web",
    "desarrollador web freelance",
    "webs para negocios locales",
    "landing pages",
    "seo local",
    "diseño web madrid",
    "diseño web españa",
    "next.js",
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
      </body>
    </html>
  );
}
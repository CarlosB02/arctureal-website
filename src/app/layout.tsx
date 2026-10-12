import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArchitecturalRuler from "@/components/ArchitecturalRuler";
import { OrganizationJsonLd } from "@/components/JsonLd";
import { getSiteConfig } from "@/lib/content";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.arctureal.com"),
  title: {
    default: "ARCTUREAL — Marca-Mãe de Arquitetura",
    template: "%s | ARCTUREAL",
  },
  description:
    "Marca-mãe de arquitetura contemporânea agregando empresas especializadas em conceção espacial, interiores de autor, engenharia e estratégia territorial.",
  keywords: [
    "arquitetura lisboa",
    "marca-mãe de arquitetura",
    "atelier de arquitetura",
    "projetos de arquitetura portugal",
    "design de interiores luxo",
    "arctureal",
  ],
  authors: [{ name: "ARCTUREAL" }],
  creator: "ARCTUREAL",
  openGraph: {
    type: "website",
    locale: "pt_PT",
    url: "https://www.arctureal.com",
    siteName: "ARCTUREAL",
    title: "ARCTUREAL — Marca-Mãe de Arquitetura",
    description:
      "Ecossistema de arquitetura agregando ateliers especializados em conceção, interiores e estratégia espacial com sede em Lisboa.",
    images: [
      {
        url: "/images/projects/hero-architecture.svg",
        width: 1200,
        height: 750,
        alt: "ARCTUREAL — Marca-Mãe de Arquitetura",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ARCTUREAL — Marca-Mãe de Arquitetura",
    description:
      "Coletivo e marca-mãe de arquitetura contemporânea. Síntese, escala e intemporalidade.",
    images: ["/images/projects/hero-architecture.svg"],
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const site = getSiteConfig();

  return (
    <html lang="pt-PT" className={`${cormorant.variable} ${plusJakarta.variable}`}>
      <head>
        <OrganizationJsonLd />
      </head>
      <body>
        <div className="site-wrapper">
          <Header navigation={site.navigation} />
          <ArchitecturalRuler />
          <main id="main-content" className="site-main">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

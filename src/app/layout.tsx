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
    default: "Arctureal — Imobiliário, Hotelaria e Investimento",
    template: "%s | ARCTUREAL",
  },
  description:
    "Grupo de empresas com sede em Lisboa. Desenvolvimento imobiliário, hotelaria e investimento, com um só interlocutor do início ao fim.",
  keywords: [
    "imobiliário lisboa",
    "hotelaria portugal",
    "investimento imobiliário",
    "desenvolvimento imobiliário",
    "grupo arctureal",
    "projetos imobiliários",
    "arctureal",
  ],
  authors: [{ name: "ARCTUREAL" }],
  creator: "ARCTUREAL",
  openGraph: {
    type: "website",
    locale: "pt_PT",
    url: "https://www.arctureal.com",
    siteName: "ARCTUREAL",
    title: "Arctureal — Imobiliário, Hotelaria e Investimento",
    description:
      "Grupo de empresas com sede em Lisboa. Desenvolvimento imobiliário, hotelaria e investimento, com um só interlocutor do início ao fim.",
    images: [
      {
        url: "/images/projects/hero-architecture.svg",
        width: 1200,
        height: 750,
        alt: "Arctureal — Imobiliário, Hotelaria e Investimento",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arctureal — Imobiliário, Hotelaria e Investimento",
    description:
      "Grupo de empresas com sede em Lisboa. Desenvolvimento imobiliário, hotelaria e investimento, com um só interlocutor do início ao fim.",
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

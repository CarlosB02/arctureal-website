import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArchitecturalRuler from "@/components/ArchitecturalRuler";
import CookieBanner from "@/components/CookieBanner";
import Analytics from "@/components/Analytics";
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
    default: "Arctureal — Hotelaria, Gestão de Património, Promoção, Construção e Investimentos",
    template: "%s | ARCTUREAL",
  },
  description:
    "Grupo empresarial com sede em Lisboa. Atuação integrada em Hotelaria, Gestão de Património, Promoção, Construção e Investimentos, com um só interlocutor do início ao fim.",
  keywords: [
    "grupo arctureal",
    "hotelaria portugal",
    "gestão de património",
    "promoção",
    "construção",
    "investimentos",
    "arctureal lisboa",
    "arctureal",
  ],
  authors: [{ name: "ARCTUREAL" }],
  creator: "ARCTUREAL",
  openGraph: {
    type: "website",
    locale: "pt_PT",
    url: "https://www.arctureal.com",
    siteName: "ARCTUREAL",
    title: "Arctureal — Hotelaria, Gestão de Património, Promoção, Construção e Investimentos",
    description:
      "Grupo empresarial com sede em Lisboa. Atuação integrada em Hotelaria, Gestão de Património, Promoção, Construção e Investimentos, com um só interlocutor do início ao fim.",
    images: [
      {
        url: "/images/projects/hero-architecture.svg",
        width: 1200,
        height: 750,
        alt: "Arctureal — Hotelaria, Gestão de Património, Promoção, Construção e Investimentos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arctureal — Hotelaria, Gestão de Património, Promoção, Construção e Investimentos",
    description:
      "Grupo empresarial com sede em Lisboa. Atuação integrada em Hotelaria, Gestão de Património, Promoção, Construção e Investimentos, com um só interlocutor do início ao fim.",
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
        <CookieBanner />
        <Analytics gaId="G-MZ4JL5DR2X" />
      </body>
    </html>
  );
}


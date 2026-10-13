import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getGroupData } from "@/lib/content";
import GrupoAreas from "./GrupoAreas";
import { BreadcrumbsJsonLd } from "@/components/JsonLd";
import styles from "./Grupo.module.css";

export const metadata: Metadata = {
  title: "Quem Somos & O Grupo — ARCTUREAL",
  description:
    "Coletivo e ecossistema integrado em Lisboa: conceção arquitetónica de autor, hotelaria, investimento imobiliário, gestão de obras e projeção internacional.",
  alternates: {
    canonical: "/grupo",
  },
  openGraph: {
    title: "Quem Somos & O Grupo | ARCTUREAL",
    description:
      "Coletivo e ecossistema integrado em Lisboa: conceção arquitetónica de autor, hotelaria, investimento imobiliário, gestão de obras e projeção internacional.",
    url: "https://www.arctureal.com/grupo",
  },
};

export default function GrupoPage() {
  const group = getGroupData();

  const breadcrumbs = [
    { name: "Início", item: "https://www.arctureal.com" },
    { name: "Grupo", item: "https://www.arctureal.com/grupo" },
  ];

  const heroData = group.hero || {
    eyebrow: "O Coletivo & Estrutura",
    title: group.heading,
    subtitle: group.subheading,
    image: "/images/areas/visao-missao.webp",
  };

  const introData = group.intro || {
    eyebrow: "Sinergia & Especialização",
    title: "Autonomia técnica profunda. Visão estratégica integrada.",
    text: group.philosophy,
  };

  const areasHeader = group.areasSection || {
    eyebrow: "Áreas de Atuação",
    title: "Especialização Integrada",
    subtitle: "Uma abordagem transversal que articula conceção arquitetónica, estratégia de investimento e capacidade de execução em cinco pilares determinantes.",
  };

  const areasList = group.areas || [];

  const ctaData = group.cta || {
    title: "Tem um projeto em mente?",
    description: "Articulamos a equipa ideal para acompanhar o seu projeto do primeiro esboço à entrega final.",
    buttonText: "Falar com o Coletivo",
    buttonLink: "/contactos",
  };

  return (
    <>
      <BreadcrumbsJsonLd items={breadcrumbs} />

      {/* 1. Hero Section */}
      <section className={styles.hero} aria-labelledby="grupo-hero-title">
        <div className={styles.heroBackground}>
          <Image
            src={heroData.image}
            alt="Atelier e obras contemporâneas do ecossistema Arctureal"
            fill
            priority
            quality={90}
            sizes="100vw"
            className={styles.heroImage}
          />
        </div>

        <div className={styles.heroOverlay} />

        <div className="container" style={{ position: "relative", zIndex: 3, width: "100%" }}>
          <div className={`${styles.heroContent} animate-fade-in`}>
            <h1 id="grupo-hero-title" className={styles.heroTitle}>
              {heroData.title}
            </h1>
            <div className={styles.heroDivider} />
          </div>
        </div>
      </section>

      {/* 2. Intro Statement Section */}
      <section className={styles.introSection} aria-labelledby="grupo-intro-title">
        <div className="container">
          <div className={styles.introGrid}>
            <div className={styles.introLeft}>
              <span className={styles.introEyebrow}>{introData.eyebrow}</span>
              <h2 id="grupo-intro-title" className={styles.introTitle}>
                {introData.title}
              </h2>
            </div>
            <div className={styles.introRight}>
              <p className={styles.introText}>{introData.text}</p>
              <div className={styles.introDivider} />

              {introData.highlights && introData.highlights.length > 0 && (
                <div className={styles.highlightsGrid}>
                  {introData.highlights.map((item, idx) => (
                    <div key={idx} className={styles.highlightItem}>
                      <span className={styles.highlightValue}>{item.value}</span>
                      <span className={styles.highlightLabel}>{item.label}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Áreas de Atuação - Presentation Grid */}
      <section className={styles.areasSection} aria-labelledby="areas-title">
        <div className="container">
          <div className={styles.sectionHeader}>
            {areasHeader.eyebrow && (
              <span className={styles.sectionEyebrow}>{areasHeader.eyebrow}</span>
            )}
            <h2 id="areas-title" className={styles.sectionTitle}>
              {areasHeader.title}
            </h2>
            {areasHeader.subtitle && (
              <p className={styles.sectionSubtitle}>{areasHeader.subtitle}</p>
            )}
          </div>

          <GrupoAreas areasList={areasList} />
        </div>
      </section>

      {/* 4. Institutional CTA */}
      <section className={styles.ctaSection} aria-labelledby="grupo-cta-title">
        <div className="container">
          <div className={styles.ctaInner}>
            <h2 id="grupo-cta-title" className={styles.ctaTitle}>
              {ctaData.title}
            </h2>
            <p className={styles.ctaDesc}>{ctaData.description}</p>
            <Link
              href={ctaData.buttonLink}
              className="btn-primary"
              style={{
                backgroundColor: "var(--color-primary)",
                borderColor: "var(--color-primary)",
                color: "#FFFFFF",
              }}
            >
              {ctaData.buttonText}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

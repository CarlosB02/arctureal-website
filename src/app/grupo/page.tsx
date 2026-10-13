import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getGroupData } from "@/lib/content";
import { BreadcrumbsJsonLd } from "@/components/JsonLd";
import styles from "./Grupo.module.css";

export const metadata: Metadata = {
  title: "Quem Somos & O Grupo — ARCTUREAL",
  description:
    "A ARCTUREAL é uma marca-mãe de referência que integra a Arctureal Properties e empresas especializadas em arquitetura de autor, interiores, urbanismo e engenharia.",
  alternates: {
    canonical: "/grupo",
  },
  openGraph: {
    title: "Quem Somos & O Grupo | ARCTUREAL",
    description:
      "Descubra o ecossistema Arctureal: promoção imobiliária de autor e ateliers especializados com interlocutor único.",
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
    eyebrow: "Marca-Mãe & Estrutura",
    title: group.heading,
    subtitle: group.subheading,
    image: "/images/areas/visao-missao.jpg",
  };

  const introData = group.intro || {
    eyebrow: "Sinergia & Especialização",
    title: "Autonomia técnica profunda. Visão estratégica integrada.",
    text: group.philosophy,
  };

  const companiesHeader = group.companiesSection || {
    eyebrow: "Entidades Integradas",
    title: "Empresas Especializadas",
    subtitle: "Equipas dedicadas com mestria comprovada nas suas respetivas áreas de atuação.",
  };

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

      {/* 2. Intro Statement Section (Simple text below hero) */}
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

      {/* 3. Companies Presentation Grid with Images & KPIs */}
      <section className={styles.companiesSection} aria-labelledby="companies-title">
        <div className="container">
          <div className={styles.sectionHeader}>
            {companiesHeader.eyebrow && (
              <span className={styles.sectionEyebrow}>{companiesHeader.eyebrow}</span>
            )}
            <h2 id="companies-title" className={styles.sectionTitle}>
              {companiesHeader.title}
            </h2>
            {companiesHeader.subtitle && (
              <p className={styles.sectionSubtitle}>{companiesHeader.subtitle}</p>
            )}
          </div>

          <div className={styles.companiesGrid}>
            {group.companies.map((company, index) => (
              <article
                key={company.id}
                id={company.id}
                className={styles.companyCard}
                aria-labelledby={`company-title-${company.id}`}
              >
                {/* Image Banner */}
                <div className={styles.cardImageBox}>
                  <Image
                    src={company.image}
                    alt={`Atividade e projetos da ${company.name}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className={styles.cardImage}
                    priority={index < 2}
                  />
                  <div className={styles.cardImageScrim} />

                  <span className={styles.cardIndex}>
                    {company.index || `0${index + 1}`}
                  </span>

                  {company.badge && (
                    <span className={styles.cardBadge}>{company.badge}</span>
                  )}
                </div>

                {/* Card Content */}
                <div className={styles.cardBody}>
                  <div className={styles.cardHeader}>
                    <h3 id={`company-title-${company.id}`} className={styles.cardTitle}>
                      {company.name}
                    </h3>
                    {company.tagline && (
                      <span className={styles.cardTagline}>{company.tagline}</span>
                    )}
                  </div>

                  <p className={styles.cardDesc}>{company.description}</p>

                  {/* Compact KPI Indicators */}
                  {company.kpis && company.kpis.length > 0 && (
                    <div className={styles.kpiGrid}>
                      {company.kpis.map((kpi, kpiIdx) => (
                        <div key={kpiIdx} className={styles.kpiItem}>
                          <span className={styles.kpiValue}>{kpi.value}</span>
                          <span className={styles.kpiLabel}>{kpi.label}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Action Link (apenas se existir link no JSON) */}
                  {company.link && (
                    <div className={styles.cardFooter}>
                      <Link
                        href={company.link}
                        className={styles.cardLink}
                      >
                        {company.linkText || "Conhecer Projetos"} &rarr;
                      </Link>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
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

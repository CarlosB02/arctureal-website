import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getSiteConfig, getFeaturedProjects } from "@/lib/content";
import AreasShowcase from "@/components/AreasShowcase";
import styles from "./page.module.css";

export default function HomePage() {
  const site = getSiteConfig();
  const featuredProjects = getFeaturedProjects();

  return (
    <>
      {/* Hero Section - 100vh Architectural Fullscreen */}
      <section className={styles.hero} aria-labelledby="hero-heading">
        {/* Background Architectural Photography */}
        <div className={styles.heroBackground}>
          <Image
            src="/images/hero-architecture.webp"
            alt="Obra de arquitetura minimalista com pedra de calcário, betão aparente e espelho de água ao pôr do sol"
            fill
            priority
            quality={90}
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>

        {/* Contrast Scrim Overlay */}
        <div className={styles.heroOverlay} />

        {/* Minimal Hero Content */}
        <div className={`${styles.heroContent} animate-fade-in`}>
          <span className={styles.heroEyebrow}>GRUPO ARCTUREAL</span>
          <h1 id="hero-heading" className={styles.heroTitle}>
            ARCTUREAL
          </h1>
          <p className={styles.heroLead}>
            A síntese entre o espaço, a matéria e a permanência.
          </p>
          <div className={styles.heroButtons}>
            <Link href="/projetos" className={styles.heroBtnPrimary}>
              Ver Projetos
            </Link>
            <Link href="/grupo" className={styles.heroBtnOutline}>
              Conhecer o Grupo
            </Link>
          </div>
        </div>

        {/* Subtle Scroll Indicator */}
        <div className={styles.heroScrollHint}>
          <div className={styles.heroScrollLine} />
          <span>Explorar</span>
        </div>
      </section>

      {/* Manifesto / Statement Section */}
      <section className={`${styles.statementSection} section-spacing-sm`} aria-labelledby="statement-heading">
        <div className="container">
          <div className={styles.statementInner}>
            <h2 id="statement-heading" className={styles.statementLead}>
              Várias empresas. Um só interlocutor.
            </h2>
            <div className={styles.statementBody}>
              <p>
                A Arctureal reúne empresas de imobiliário, hotelaria, investimentos, gestão e serviços e internacionalização. Cada uma tem a sua equipa e a sua especialidade, e todas trabalham em conjunto quando o projeto o pede.
              </p>
              <Link href="/grupo" className="link-architectural" style={{ alignSelf: "flex-start" }}>
                Conhecer o grupo &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* Áreas de Atividade: Imobiliário, Hotelaria, Investimentos, Gestão e Serviços, Internacional */}
      <AreasShowcase />

      {/* Metrics Ribbon Section: Presença 5 Áreas / 3 Geografias / 1 Visão Comum / ∞ Horizonte */}
      <section className={styles.metricsRibbonSection} aria-label="Métricas de Escala e Dimensão do Coletivo">
        <div className="container">
          <div className={styles.metricsRibbonInner}>
            {/* +20 / Anos de Experiência */}
            <div className={styles.metricBlock}>
              <div className={styles.metricValueWrapper}>
                <span className={styles.metricValue}>+20</span>
              </div>
              <div className={styles.metricBottomRow}>
                <span className={styles.metricLabel}>Anos de Experiência</span>
              </div>
            </div>

            {/* 5 / Áreas */}
            <div className={styles.metricBlock}>
              <div className={styles.metricValueWrapper}>
                <span className={styles.metricValue}>5</span>
              </div>
              <div className={styles.metricBottomRow}>
                <span className={styles.metricLabel}>Áreas</span>
              </div>
            </div>

            {/* 3 / Geografias */}
            <div className={styles.metricBlock}>
              <div className={styles.metricValueWrapper}>
                <span className={styles.metricValue}>3</span>
              </div>
              <div className={styles.metricBottomRow}>
                <span className={styles.metricLabel}>Geografias</span>
              </div>
            </div>

            {/* 1 / Interlocutor */}
            <div className={styles.metricBlock}>
              <div className={styles.metricValueWrapper}>
                <span className={styles.metricValue}>1</span>
              </div>
              <div className={styles.metricBottomRow}>
                <span className={styles.metricLabel}>Interlocutor</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Institutional CTA & Dialogue Section */}
      <section className={`${styles.ctaSection} section-spacing`} aria-labelledby="cta-heading">
        <div className="container">
          <div className={styles.ctaInner}>
            <h2 id="cta-heading" className={styles.ctaTitle}>
              Tem um projeto em mente?
            </h2>
            <p className={styles.ctaDesc}>
              Uma casa, um hotel ou um empreendimento. Fale connosco e indicamos a equipa certa para o acompanhar.
            </p>
            <Link href="/contactos" className="btn-primary" style={{ backgroundColor: "var(--color-primary)", borderColor: "var(--color-primary)", color: "#FFFFFF" }}>
              Iniciar Conversa
            </Link>

            <div className={styles.ctaContactBox}>
              <span className={styles.ctaContactItem}>
                {site.contacts.address}
              </span>
              <span className={styles.ctaContactItem}>
                Telefone:{" "}
                <a href={`tel:${site.contacts.phoneRaw}`}>
                  {site.contacts.phone}
                </a>
              </span>
              <span className={styles.ctaContactItem}>
                Email:{" "}
                <a href={`mailto:${site.contacts.email}`}>
                  {site.contacts.email}
                </a>
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

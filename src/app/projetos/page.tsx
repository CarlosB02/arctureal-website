import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { getAllProjects } from "@/lib/content";
import ProjectsList from "./ProjectsList";
import { BreadcrumbsJsonLd } from "@/components/JsonLd";
import styles from "./Projects.module.css";

export const metadata: Metadata = {
  title: "Projetos — ARCTUREAL",
  description:
    "Explore o portfólio de arquitetura e projetos do grupo ARCTUREAL: habitação contemporânea, edifícios corporativos e hotelaria.",
  alternates: {
    canonical: "/projetos",
  },
  openGraph: {
    title: "Projetos | ARCTUREAL",
    description:
      "Portfólio de obras e projetos de arquitetura do coletivo ARCTUREAL em Portugal e internacionalmente.",
    url: "https://arctureal.pt/projetos",
  },
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  const breadcrumbs = [
    { name: "Início", item: "https://arctureal.pt" },
    { name: "Projetos", item: "https://arctureal.pt/projetos" },
  ];

  return (
    <>
      <BreadcrumbsJsonLd items={breadcrumbs} />

      {/* Hero Section */}
      <section className={styles.hero} aria-labelledby="projetos-title">
        <div className={styles.heroBackground}>
          <Image
            src="/images/hero-architecture.webp"
            alt="Projetos e obras de arquitetura de autor do Grupo Arctureal"
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
            <h1 id="projetos-title" className={styles.heroTitle}>
              Projetos
            </h1>
            <div className={styles.heroDivider} />
          </div>
        </div>
      </section>

      {/* Section: Parcerias & Estratégia - Criação de Valor em Todas as Atividades */}
      <section className={styles.investorSection} aria-labelledby="investor-overview-title">
        <div className="container">
          <div className={styles.investorGrid}>
            <div className={styles.investorContent}>
              <span className={styles.investorEyebrow}>PARCERIAS &amp; ESTRATÉGIA</span>
              <h2 id="investor-overview-title" className={styles.investorTitle}>
                Criação de Valor em Todas as Atividades
              </h2>
              <p className={styles.investorLead}>
                O Grupo Arctureal reúne empresas com atuação em hotelaria, gestão de património, promoção, construção e investimentos. Cada atividade é conduzida com rigor e visão de longo prazo, partilhando uma mesma cultura de exigência e um único interlocutor.
              </p>

              <div className={styles.investorPillarsList}>
                <div className={styles.investorPillarItem}>
                  <div className={styles.pillarDot} />
                  <div className={styles.pillarText}>
                    <strong>Visão de longo prazo:</strong> decisões orientadas para a criação e preservação de valor.
                  </div>
                </div>

                <div className={styles.investorPillarItem}>
                  <div className={styles.pillarDot} />
                  <div className={styles.pillarText}>
                    <strong>Risco controlado:</strong> análise rigorosa antes de cada decisão e acompanhamento próximo da execução.
                  </div>
                </div>

                <div className={styles.investorPillarItem}>
                  <div className={styles.pillarDot} />
                  <div className={styles.pillarText}>
                    <strong>Um só interlocutor:</strong> as empresas do Grupo colaboram entre si quando o projeto o exige.
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.investorImageWrapper}>
              <Image
                src="/images/areas/investimentos.webp"
                alt="Criação de valor em todas as atividades do Grupo Arctureal"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className={styles.investorImage}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Portfolio Section with Sticky 3D Parallax Background */}
      <section className={styles.projectsSection} aria-label="Portfólio de Projetos de Arquitetura">
        {/* Sticky Background Track & Canvas */}
        <div className={styles.stickyBackgroundTrack} aria-hidden="true">
          <div className={styles.stickyBackground}>
            <div className={styles.stickyMediaContainer}>
              <Image
                src="/images/hero-architecture.webp"
                alt=""
                fill
                sizes="100vw"
                quality={85}
                className={styles.stickyImage}
              />
              <div className={styles.stickyOverlay} />
              <div className={styles.stickyTopography} />
              <div className={styles.stickyAmbientGlow} />
            </div>
          </div>
        </div>

        {/* Foreground Content */}
        <div className={styles.projectsContent}>
          <div className="container">
            <div className={styles.projectsHeader}>
              <span className={styles.cycleEyebrow}>PORTFÓLIO DE PROJETOS</span>
              <h2 className={styles.projectsTitle}>Portfólio</h2>
              <p className={styles.projectsLead}>
                Uma seleção de estudos prévios, edifícios construídos e intervenções espaciais desenvolvidas com rigor e identidade pelo coletivo Arctureal.
              </p>
            </div>
            <ProjectsList projects={projects} />
          </div>
        </div>
      </section>
    </>
  );
}


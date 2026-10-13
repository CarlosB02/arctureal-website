import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { getAllProjects } from "@/lib/content";
import ProjectsList from "./ProjectsList";
import { BreadcrumbsJsonLd } from "@/components/JsonLd";
import styles from "./Projects.module.css";

export const metadata: Metadata = {
  title: "Projetos & Investimentos — ARCTUREAL",
  description:
    "Explore o portfólio de arquitetura e oportunidades de investimento imobiliário do grupo ARCTUREAL: habitação contemporânea, edifícios corporativos e hotelaria.",
  alternates: {
    canonical: "/projetos",
  },
  openGraph: {
    title: "Projetos & Investimentos | ARCTUREAL",
    description:
      "Portfólio de obras e estratégias integradas de investimento imobiliário do coletivo ARCTUREAL em Portugal e internacionalmente.",
    url: "https://www.arctureal.com/projetos",
  },
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  const breadcrumbs = [
    { name: "Início", item: "https://www.arctureal.com" },
    { name: "Investidores", item: "https://www.arctureal.com/projetos" },
  ];

  return (
    <>
      <BreadcrumbsJsonLd items={breadcrumbs} />

      {/* Hero Section */}
      <section className={styles.hero} aria-labelledby="projetos-title">
        <div className={styles.heroBackground}>
          <Image
            src="/images/hero-architecture.jpg"
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
              Projetos &amp; Investimentos
            </h1>
            <div className={styles.heroDivider} />
          </div>
        </div>
      </section>

      {/* Investor Overview Section */}
      <section className={styles.investorSection} aria-labelledby="investor-overview-title">
        <div className="container">
          <div className={styles.investorGrid}>
            <div className={styles.investorContent}>
              <span className={styles.investorEyebrow}>PARCERIAS &amp; ESTRATÉGIA</span>
              <h2 id="investor-overview-title" className={styles.investorTitle}>
                Estruturação Imobiliária &amp; Criação de Valor
              </h2>
              <p className={styles.investorLead}>
                Desenvolvemos oportunidades de copromoção e investimento direto para investidores privados, family offices e instituições. Acompanhamos cada ativo em todas as fases: aquisição, projeto, obra e exploração.
              </p>

              <div className={styles.investorPillarsList}>
                <div className={styles.investorPillarItem}>
                  <div className={styles.pillarDot} />
                  <div className={styles.pillarText}>
                    <strong>Localização:</strong> Ativos em zonas consolidadas, com potencial de valorização a médio e longo prazo.
                  </div>
                </div>

                <div className={styles.investorPillarItem}>
                  <div className={styles.pillarDot} />
                  <div className={styles.pillarText}>
                    <strong>Risco controlado:</strong> Análise jurídica e urbanística antes de investir, e acompanhamento rigoroso do orçamento.S
                  </div>
                </div>

                <div className={styles.investorPillarItem}>
                  <div className={styles.pillarDot} />
                  <div className={styles.pillarText}>
                    <strong>Eficiência Energética:</strong> Obras pensadas para reduzir os custos de operação no futuro.
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.investorImageWrapper}>
              <Image
                src="/images/areas/investimentos.jpg"
                alt="Estruturação de investimentos imobiliários e desenvolvimento de ativos Arctureal"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className={styles.investorImage}
              />
              <div className={styles.investorImageBadge}>
                <span className={styles.badgeValue}>Turnkey &amp; Co-Investimento</span>
                <span className={styles.badgeLabel}>Modelo Estruturado de Parceria</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrated Investment Cycle Section */}
      <section className={styles.cycleSection} aria-labelledby="cycle-title">
        <div className="container">
          <div className={styles.cycleHeader}>
            <span className={styles.cycleEyebrow}>METODOLOGIA INTEGRADA</span>
            <h2 id="cycle-title" className={styles.cycleTitle}>
              Ciclo de Valor para o Investidor
            </h2>
            <p className={styles.cycleLead}>
              Garantimos disciplina executiva e previsibilidade financeira através de um processo transparente estruturado em três fases fundamentais.
            </p>
          </div>

          <div className={styles.cycleGrid}>
            <div className={styles.cycleCard}>
              <div className={styles.cycleCardImageBox}>
                <Image
                  src="/images/areas/gestao-servicos.jpg"
                  alt="Originação e viabilidade de ativos"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className={styles.cycleCardImage}
                />
                <span className={styles.cycleCardIndex}>01</span>
              </div>
              <div className={styles.cycleCardBody}>
                <h3 className={styles.cycleCardTitle}>Análise e viabilidade</h3>
                <p className={styles.cycleCardDesc}>
                  Identificamos e analisamos oportunidades de investimento, avaliando o potencial, os riscos e a viabilidade de cada uma.
                </p>
                <span className={styles.cycleCardTag}>Análise</span>
              </div>
            </div>

            <div className={styles.cycleCard}>
              <div className={styles.cycleCardImageBox}>
                <Image
                  src="/images/areas/imobiliario.jpg"
                  alt="Conceção arquitetónica e licenciamento"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className={styles.cycleCardImage}
                />
                <span className={styles.cycleCardIndex}>02</span>
              </div>
              <div className={styles.cycleCardBody}>
                <h3 className={styles.cycleCardTitle}>Estruturação</h3>
                <p className={styles.cycleCardDesc}>
                  Definimos o plano de negócio, o modelo de investimento e os parceiros certos para cada projeto.
                </p>
                <span className={styles.cycleCardTag}>Estratégia</span>
              </div>
            </div>

            <div className={styles.cycleCard}>
              <div className={styles.cycleCardImageBox}>
                <Image
                  src="/images/areas/hotelaria.jpg"
                  alt="Execução, entrega e desinvestimento"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className={styles.cycleCardImage}
                />
                <span className={styles.cycleCardIndex}>03</span>
              </div>
              <div className={styles.cycleCardBody}>
                <h3 className={styles.cycleCardTitle}>Valorização e retorno</h3>
                <p className={styles.cycleCardDesc}>
                  Acompanhamos o ativo até ao fim, seja por venda, arrendamento ou exploração, com informação regular ao investidor.
                </p>
                <span className={styles.cycleCardTag}>Retorno</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Portfolio Section with Sticky 3D Parallax Background */}
      <section className={styles.projectsSection} aria-label="Arquivo de Obras e Projetos de Arquitetura">
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
              <h2 className={styles.projectsTitle}>Arquivo de Obras</h2>
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


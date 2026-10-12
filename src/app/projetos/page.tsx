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
            <span className={styles.heroEyebrow}>ARQUITETURA &amp; INVESTIMENTO</span>
            <h1 id="projetos-title" className={styles.heroTitle}>
              Projetos &amp; Investimentos
            </h1>
            <p className={styles.heroLead}>
              Conceção arquitetónica de excelência e originação de ativos imobiliários de alto valor. Unimos o rigor projetual à inteligência estratégica de capital.
            </p>
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
                Criamos oportunidades exclusivas de copromoção e investimento direto para capitais privados, family offices e entidades institucionais, assegurando uma gestão verticalizada de cada ativo desde o terreno até à sua exploração.
              </p>

              <div className={styles.investorPillarsList}>
                <div className={styles.investorPillarItem}>
                  <div className={styles.pillarDot} />
                  <div className={styles.pillarText}>
                    <strong>Localizações Prime &amp; Reabilitação:</strong> Seleção rigorosa de ativos em zonas consolidadas com elevado potencial de valorização a médio e longo prazo.
                  </div>
                </div>

                <div className={styles.investorPillarItem}>
                  <div className={styles.pillarDot} />
                  <div className={styles.pillarText}>
                    <strong>Mitigação Integral de Risco:</strong> Due diligence jurídica e urbanística minuciosa, controlo orçamental em tempo real e licenciamento célere.
                  </div>
                </div>

                <div className={styles.investorPillarItem}>
                  <div className={styles.pillarDot} />
                  <div className={styles.pillarText}>
                    <strong>Critérios ESG &amp; Eficiência Energética:</strong> Obras sustentáveis projetadas para obter certificações internacionais e otimizar custos operacionais futuros.
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
                <h3 className={styles.cycleCardTitle}>Originação &amp; Viabilidade</h3>
                <p className={styles.cycleCardDesc}>
                  Prospeção qualificada de oportunidades no mercado, auditoria urbanística exaustiva e montagem de planos de negócio com cenários de sensibilidade detalhados.
                </p>
                <span className={styles.cycleCardTag}>Due Diligence &amp; Capital</span>
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
                <h3 className={styles.cycleCardTitle}>Conceção &amp; Licenciamento</h3>
                <p className={styles.cycleCardDesc}>
                  Desenvolvimento de arquitetura autoral com otimização volumétrica e espacial, articulando os projetos com os municípios para assegurar aprovações céleres.
                </p>
                <span className={styles.cycleCardTag}>Arquitetura de Autor</span>
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
                <h3 className={styles.cycleCardTitle}>Execução &amp; Retorno</h3>
                <p className={styles.cycleCardDesc}>
                  Direção e fiscalização de obra com gestão de custos rigorosa, culminando na colocação no mercado ou transição para gestão de ativos patrimoniais.
                </p>
                <span className={styles.cycleCardTag}>Gestão &amp; Monetização</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Portfolio Section */}
      <section className={styles.projectsSection} aria-label="Arquivo de Obras e Projetos de Arquitetura">
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
      </section>
    </>
  );
}


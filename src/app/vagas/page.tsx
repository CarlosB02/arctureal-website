import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getJobsData, getSiteConfig } from "@/lib/content";
import { BreadcrumbsJsonLd } from "@/components/JsonLd";
import JobApplicationForm from "./JobApplicationForm";
import styles from "./Vagas.module.css";

export const metadata: Metadata = {
  title: "Vagas & Carreiras — Grupo Arctureal",
  description:
    "Oportunidades profissionais no Grupo Arctureal. Procuramos perfis com rigor, método e confidencialidade para integrar o nosso ecossistema empresarial.",
  alternates: {
    canonical: "/vagas",
  },
  openGraph: {
    title: "Vagas & Carreiras | ARCTUREAL",
    description:
      "Oportunidades profissionais no Grupo Arctureal em Lisboa: consulte os requisitos da vaga e submeta a sua candidatura.",
    url: "https://www.arctureal.com/vagas",
  },
};

export default function VagasPage() {
  const jobsData = getJobsData();
  const site = getSiteConfig();
  const currentJob = jobsData.jobs[0];

  const breadcrumbs = [
    { name: "Início", item: "https://www.arctureal.com" },
    { name: "Vagas", item: "https://www.arctureal.com/vagas" },
  ];

  return (
    <>
      <BreadcrumbsJsonLd items={breadcrumbs} />

      {/* 1. Hero Section */}
      <section className={styles.hero} aria-labelledby="vagas-hero-title">
        <div className={styles.heroBackground}>
          <Image
            src={jobsData.hero.image}
            alt="Ambiente de trabalho e atelier de gestão do Grupo Arctureal em Lisboa"
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
            <span className={styles.heroEyebrow}>{jobsData.hero.eyebrow}</span>
            <h1 id="vagas-hero-title" className={styles.heroTitle}>
              {jobsData.hero.title}
            </h1>
            <p className={styles.heroLead}>{jobsData.hero.subtitle}</p>
          </div>
        </div>
      </section>

      {/* 2. Intro Section */}
      <section className={styles.introSection} aria-labelledby="vagas-intro-title">
        <div className="container">
          <div className={styles.introGrid}>
            <div className={styles.introLeft}>
              <span className={styles.introEyebrow}>{jobsData.intro.eyebrow}</span>
              <h2 id="vagas-intro-title" className={styles.introTitle}>
                {jobsData.intro.title}
              </h2>
            </div>
            <div className={styles.introRight}>
              <p className={styles.introText}>{jobsData.intro.text}</p>
              <div className={styles.introDivider} />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Job Details Section */}
      {currentJob && (
        <section className={styles.jobSection} aria-labelledby={`job-title-${currentJob.id}`}>
          <div className="container">
            <article className={styles.jobCard}>
              {/* Header da Vaga */}
              <div className={styles.jobHeader}>
                <div className={styles.jobBadgesRow}>
                  <span className={styles.jobBadgePrimary}>{currentJob.badge || "Vaga Aberta"}</span>
                  <span className={styles.jobBadgeSecondary}>{currentJob.department}</span>
                  <span className={styles.jobBadgeSecondary}>{currentJob.type}</span>
                  <span className={styles.jobBadgeSecondary}>{currentJob.location}</span>
                  {currentJob.confidential && (
                    <span className={styles.jobBadgeSecondary}>Processo Confidencial</span>
                  )}
                </div>

                <h2 id={`job-title-${currentJob.id}`} className={styles.jobTitle}>
                  {currentJob.title}
                </h2>
                <span className={styles.jobTagline}>{currentJob.tagline}</span>
              </div>

              {/* Perfil da Oportunidade / Enquadramento */}
              <div className={styles.jobOverview}>
                <p>{currentJob.overview}</p>
              </div>

              {/* Conteúdo em Grelha: Missão, Responsabilidades e Perfil */}
              <div className={styles.jobContentGrid}>
                {/* Coluna Esquerda: Missão & O Dia a Dia */}
                <div>
                  <div style={{ marginBottom: "2.5rem" }}>
                    <h3 className={styles.blockTitle}>A Missão da Função</h3>
                    <p style={{ fontSize: "1rem", lineHeight: "1.7", color: "var(--color-text-main)" }}>
                      {currentJob.mission}
                    </p>
                  </div>

                  <div>
                    <h3 className={styles.blockTitle}>Responsabilidades Principais</h3>
                    <ul className={styles.bulletList}>
                      {currentJob.responsibilities.map((resp, idx) => (
                        <li key={idx} className={styles.bulletItem}>
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Coluna Direita: Quem Procuramos (Perfil Pretendido) */}
                <div>
                  <h3 className={styles.blockTitle}>Perfil Pretendido</h3>
                  <ul className={styles.bulletList}>
                    {currentJob.requirements.map((req, idx) => (
                      <li key={idx} className={styles.bulletItem}>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Destaque Diferenciador */}
              <div className={styles.traitCallout}>
                <span className={styles.traitCalloutTitle}>Critérios Diferenciadores no Grupo</span>
                <p className={styles.traitCalloutText}>
                  &ldquo;{currentJob.keyTraits}&rdquo;
                </p>
              </div>

              {/* Barra de Ação da Vaga */}
              <div className={styles.jobCtaBar}>
                <p className={styles.jobCtaPrompt}>
                  Revê-se neste perfil e procura um ambiente exigente e motivador?
                </p>
                <a
                  href="#candidatura"
                  className="btn-primary"
                  style={{
                    backgroundColor: "var(--color-primary)",
                    borderColor: "var(--color-primary)",
                    color: "#FFFFFF",
                  }}
                >
                  Candidatar-me a esta Oportunidade &darr;
                </a>
              </div>
            </article>
          </div>
        </section>
      )}

      {/* 4. Candidate Application Form Section */}
      <section className={styles.applicationSection} id="candidatura" aria-labelledby="form-heading">
        <div className="container">
          <div className={styles.applicationWrapper}>
            <div className={styles.appHeader}>
              <span className={styles.appEyebrow}>Processo de Recrutamento</span>
              <h2 id="form-heading" className={styles.appTitle}>
                Submissão de Candidatura
              </h2>
              <p className={styles.appSubtitle}>
                Preencha os dados abaixo e anexe o seu CV. Todas as candidaturas são tratadas com total sigilo e reserva pela administração do grupo.
              </p>
            </div>

            {/* Formulário Interativo */}
            <JobApplicationForm
              jobTitle={currentJob?.title || "Administrativo(a)"}
              jobId={currentJob?.id || "administrativo"}
            />

            {/* Contacto Alternativo por Email */}
            <div className={styles.directEmailCard}>
              <p className={styles.directEmailText}>
                <strong>Prefere submeter por correio eletrónico?</strong>
                <br />
                Pode enviar o seu CV acompanhado de breve apresentação para o nosso email com o assunto{" "}
                <em>[Candidatura: Administrativo(a)]</em>.
              </p>
              <a
                href={`mailto:${site.contacts.email}?subject=Candidatura%20-%20Administrativo(a)`}
                className={styles.directEmailLink}
              >
                Enviar via {site.contacts.email} &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

"use client";

import React, { useState } from "react";
import type { Job } from "@/lib/content";
import JobApplicationForm from "./JobApplicationForm";
import styles from "./Vagas.module.css";

interface JobsSectionProps {
  jobs: Job[];
  contactEmail: string;
}

export default function JobsSection({ jobs, contactEmail }: JobsSectionProps) {
  // Accordion begins CLOSED by default: "fechadas em accordion"
  const [openJobId, setOpenJobId] = useState<string | null>(null);

  // Selected job in the application form
  const [selectedJobId, setSelectedJobId] = useState<string>(
    jobs[0]?.id || "administrativo"
  );

  const toggleAccordion = (jobId: string) => {
    setOpenJobId((current) => (current === jobId ? null : jobId));
  };

  const handleSelectJobForForm = (jobId: string) => {
    setSelectedJobId(jobId);
    if (typeof window !== "undefined") {
      const formEl = document.getElementById("candidatura-card");
      if (formEl) {
        formEl.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  const handleSelectSpontaneous = () => {
    setSelectedJobId("futuras-vagas");
    if (typeof window !== "undefined") {
      const formEl = document.getElementById("candidatura-card");
      if (formEl) {
        formEl.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <section className={styles.splitSection} aria-label="Vagas e Candidatura" id="vagas-section">
      <div className="container">
        {/* Cabeçalho Global da Secção Dividida */}
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Integre a Equipa do Grupo</h2>
          <p className={styles.sectionLead}>
            Consulte as posições disponíveis em regime fechado ou registe o seu perfil para futuras oportunidades no ecossistema Arctureal.
          </p>
        </div>

        <div className={styles.splitGrid}>
          {/* =========================================
              COLUNA ESQUERDA: Vagas em Accordion + Nota
             ========================================= */}
          <div className={styles.jobsColumn}>
            {/* Título de Bloco das Vagas */}
            <div className={styles.columnMeta}>
              <span className={styles.columnMetaTitle}>Funções em Aberto</span>
              <span className={styles.columnMetaCount}>
                {jobs.length} {jobs.length === 1 ? "Vaga Disponível" : "Vagas Disponíveis"}
              </span>
            </div>

            {/* Accordion das Vagas (fechadas por defeito) */}
            <div className={styles.accordionContainer} role="region" aria-label="Lista de Vagas">
              {jobs.map((job) => {
                const isOpen = openJobId === job.id;
                const isSelectedInForm = selectedJobId === job.id;

                return (
                  <div
                    key={job.id}
                    className={`${styles.accordionItem} ${isOpen ? styles.accordionItemOpen : ""}`}
                  >
                    {/* Botão de Abertura/Fecho do Accordion */}
                    <button
                      type="button"
                      className={styles.accordionTrigger}
                      onClick={() => toggleAccordion(job.id)}
                      aria-expanded={isOpen}
                      aria-controls={`job-content-${job.id}`}
                    >
                      <div className={styles.triggerContent}>
                        {/* Badges de Topo */}
                        <div className={styles.triggerBadgesRow}>
                          <span className={styles.badgePrimary}>
                            {job.badge || "Vaga Aberta"}
                          </span>
                          <span className={styles.badgeSecondary}>{job.department}</span>
                          <span className={styles.badgeSecondary}>{job.location}</span>
                        </div>

                        {/* Título da Função */}
                        <h3 className={styles.triggerTitle}>{job.title}</h3>

                        {/* Subtexto / Regime */}
                        <div className={styles.triggerSubtext}>
                          <span>Regime: {job.type}</span>
                        </div>
                      </div>

                      {/* Ícone Indicador do Accordion */}
                      <div className={styles.accordionIconWrapper}>
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className={`${styles.accordionIcon} ${isOpen ? styles.accordionIconRotated : ""}`}
                        >
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </div>
                    </button>

                    {/* Conteúdo Expansível da Vaga */}
                    {isOpen && (
                      <div
                        id={`job-content-${job.id}`}
                        className={styles.accordionBody}
                        role="region"
                      >
                        {/* Enquadramento / Resumo */}
                        {job.overview && (
                          <div className={styles.jobOverviewBox}>
                            <p className={styles.jobOverviewText}>{job.overview}</p>
                          </div>
                        )}

                        {/* Grelha de Missão e Responsabilidades */}
                        <div className={styles.jobContentGrid}>
                          {/* Coluna 1: Missão e Responsabilidades */}
                          <div className={styles.jobSubColumn}>
                            {job.mission && (
                              <div className={styles.accordionBlock}>
                                <h4 className={styles.blockHeading}>A Missão da Função</h4>
                                <p className={styles.blockParagraph}>{job.mission}</p>
                              </div>
                            )}

                            {job.responsibilities && job.responsibilities.length > 0 && (
                              <div className={styles.accordionBlock}>
                                <h4 className={styles.blockHeading}>Responsabilidades Principais</h4>
                                <ul className={styles.styledList}>
                                  {job.responsibilities.map((resp, idx) => (
                                    <li key={idx} className={styles.styledListItem}>
                                      {resp}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>

                          {/* Coluna 2: Perfil Pretendido */}
                          <div className={styles.jobSubColumn}>
                            {job.requirements && job.requirements.length > 0 && (
                              <div className={styles.accordionBlock}>
                                <h4 className={styles.blockHeading}>Perfil Pretendido</h4>
                                <ul className={styles.styledList}>
                                  {job.requirements.map((req, idx) => (
                                    <li key={idx} className={styles.styledListItem}>
                                      {req}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Critérios Diferenciadores */}
                        {job.keyTraits && (
                          <div className={styles.traitBox}>
                            <span className={styles.traitBoxTag}>Critérios Diferenciadores no Grupo</span>
                            <blockquote className={styles.traitBoxQuote}>
                              &ldquo;{job.keyTraits}&rdquo;
                            </blockquote>
                          </div>
                        )}

                        {/* Barra de Ação */}
                        <div className={styles.accordionActionRow}>
                          <p className={styles.accordionActionText}>
                            Identifica-se com os requisitos desta posição?
                          </p>
                          <button
                            type="button"
                            className={styles.applyJobButton}
                            onClick={() => handleSelectJobForForm(job.id)}
                          >
                            {isSelectedInForm
                              ? "Selecionada no Formulário ✓"
                              : "Candidatar-me a esta Vaga →"}
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* =========================================
                NOTA: Deixar contacto para futuras vagas
               ========================================= */}
            <div className={styles.futureJobsCard}>
              <h3 className={styles.futureJobsTitle}>
                Deixar contacto para futuras vagas
              </h3>

              <p className={styles.futureJobsText}>
                Não encontrou a vaga certa? Envie-nos o seu currículo. Guardamos o seu contacto e falamos consigo quando surgir uma oportunidade adequada ao seu perfil.
              </p>

              <button
                type="button"
                className={styles.futureJobsBtn}
                onClick={handleSelectSpontaneous}
              >
                {selectedJobId === "futuras-vagas"
                  ? "Opção Ativa no Formulário"
                  : "Enviar candidatura →"}
              </button>
            </div>
          </div>

          {/* =========================================
              COLUNA DIREITA: Formulário de Candidatura
             ========================================= */}
          <div className={styles.formColumn} id="candidatura-card">
            <div className={styles.formCard}>
              <div className={styles.formCardHeader}>
                <h2 className={styles.formCardTitle}>Submissão de Candidatura</h2>
                <p className={styles.formCardSubtitle}>
                  Preencha os campos abaixo com os seus dados. O Grupo Arctureal garante total sigilo e reserva na apreciação das candidaturas.
                </p>
              </div>

              <JobApplicationForm
                jobs={jobs}
                selectedJobId={selectedJobId}
                onJobChange={setSelectedJobId}
                contactEmail={contactEmail}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

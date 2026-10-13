import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { getJobsData, getSiteConfig } from "@/lib/content";
import { BreadcrumbsJsonLd } from "@/components/JsonLd";
import JobsSection from "./JobsSection";
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
            <h1 id="vagas-hero-title" className={styles.heroTitle}>
              {jobsData.hero.title}
            </h1>
            <div className={styles.heroDivider} />
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

      {/* 3. Main Split Section: Accordion de Vagas à Esquerda & Forms à Direita */}
      <JobsSection
        jobs={jobsData.jobs}
        contactEmail={site.contacts.email}
      />
    </>
  );
}

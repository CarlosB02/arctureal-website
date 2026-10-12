import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllProjects, getProjectBySlug } from "@/lib/content";
import { BreadcrumbsJsonLd } from "@/components/JsonLd";
import styles from "../Projects.module.css";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Projeto não encontrado",
    };
  }

  return {
    title: project.title,
    description: project.summary,
    alternates: {
      canonical: `/projetos/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} | ARCTUREAL`,
      description: project.summary,
      url: `https://www.arctureal.com/projetos/${project.slug}`,
      images: [
        {
          url: project.image,
          width: 1200,
          height: 750,
          alt: project.title,
        },
      ],
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const breadcrumbs = [
    { name: "Início", item: "https://www.arctureal.com" },
    { name: "Projetos", item: "https://www.arctureal.com/projetos" },
    { name: project.title, item: `https://www.arctureal.com/projetos/${project.slug}` },
  ];

  return (
    <>
      <BreadcrumbsJsonLd items={breadcrumbs} />

      <article className="container">
        {/* Header */}
        <div className={styles.detailHeader}>
          <Link href="/projetos" className={styles.backLink}>
            &larr; Voltar a todos os projetos
          </Link>
          <span className="eyebrow">{project.category} &bull; {project.year}</span>
          <h1 className={styles.title}>{project.title}</h1>
          <p className={styles.lead}>{project.subtitle}</p>
        </div>

        {/* Featured Image */}
        <div className={styles.imageContainer} style={{ marginBottom: "3.5rem" }}>
          <Image
            src={project.image}
            alt={`Fotografia principal e composição técnica do projeto ${project.title}`}
            width={1200}
            height={750}
            priority
          />
        </div>

        {/* Details Grid */}
        <div className={styles.detailGrid}>
          <div className={styles.detailMainContent}>
            <div>
              <h2 style={{ fontSize: "1.75rem", marginBottom: "1.25rem" }}>Conceito & Filosofia do Espaço</h2>
              <p className={styles.detailDescription}>{project.description}</p>
            </div>

            <div>
              <h3 style={{ fontSize: "1.25rem", marginBottom: "0.75rem" }}>Enquadramento pelo Grupo</h3>
              <p style={{ color: "var(--color-text-muted)" }}>
                Este projeto foi concebido e coordenado por <strong>{project.company}</strong>,
                integrado na metodologia colaborativa da marca-mãe ARCTUREAL. Da conceção preliminar
                ao controlo construtivo, cada escolha material assegura conforto passivo e durabilidade.
              </p>
            </div>
          </div>

          {/* Technical Specs Sidebar */}
          <aside className={styles.specsBox} aria-label="Especificações Técnicas">
            <h3 className={styles.specsTitle}>Ficha Técnica</h3>
            <div className={styles.specRow}>
              <span className={styles.specLabel}>Localização</span>
              <span className={styles.specValue}>{project.location}</span>
            </div>
            <div className={styles.specRow}>
              <span className={styles.specLabel}>Área Bruta</span>
              <span className={styles.specValue}>{project.area}</span>
            </div>
            <div className={styles.specRow}>
              <span className={styles.specLabel}>Estado</span>
              <span className={styles.specValue}>{project.status}</span>
            </div>
            <div className={styles.specRow}>
              <span className={styles.specLabel}>Ano</span>
              <span className={styles.specValue}>{project.year}</span>
            </div>
            {project.specs.map((s, idx) => (
              <div key={idx} className={styles.specRow}>
                <span className={styles.specLabel}>{s.label}</span>
                <span className={styles.specValue}>{s.value}</span>
              </div>
            ))}
          </aside>
        </div>

        {/* Gallery Section */}
        {project.gallery && project.gallery.length > 1 && (
          <section className={styles.gallerySection} aria-label="Galeria de Pormenores">
            <span className="eyebrow">Perspetivas & Pormenores</span>
            <h2>Caderno Fotográfico</h2>
            <div className={styles.galleryGrid}>
              {project.gallery.slice(1).map((imgUrl, idx) => (
                <div key={idx} className={styles.galleryItem}>
                  <Image
                    src={imgUrl}
                    alt={`Pormenor técnico e vista ${idx + 2} da obra ${project.title}`}
                    width={1200}
                    height={750}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Provisional Content Notice & TODO */}
        <div className={styles.todoBanner}>
          <span className={styles.todoBadge}>PROVISÓRIO</span>
          <span>{project.todo}</span>
        </div>

        {/* Bottom CTA to Discuss Project */}
        <div style={{ textAlign: "center", padding: "5rem 0 3rem" }}>
          <p style={{ marginBottom: "1.5rem" }}>
            Interessado numa abordagem semelhante para o seu espaço?
          </p>
          <Link href="/contactos" className="btn-primary">
            Contactar Equipa Responsável
          </Link>
        </div>
      </article>
    </>
  );
}

"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/lib/content";
import styles from "./Projects.module.css";

interface ProjectsListProps {
  projects: Project[];
}

export default function ProjectsList({ projects }: ProjectsListProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");

  const categories = [
    "Todos",
    "Habitação",
    "Comercial",
    "Regeneração Urbana",
    "Hotelaria",
  ];

  const filteredProjects =
    selectedCategory === "Todos"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <div>
      {/* Category Filter */}
      <div className={styles.filterBar} role="tablist" aria-label="Filtrar por tipologia de projeto">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={isActive}
              className={`${styles.filterBtn} ${isActive ? styles.filterBtnActive : ""}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <div className={styles.projectsGrid}>
        {filteredProjects.map((project) => (
          <article key={project.slug} className={styles.projectCard}>
            <Link
              href={`/projetos/${project.slug}`}
              className={styles.imageContainer}
              tabIndex={-1}
              aria-hidden="true"
            >
              <Image
                src={project.image}
                alt={`Representação visual do projeto ${project.title} - ${project.location}`}
                width={1200}
                height={750}
                loading="lazy"
              />
            </Link>

            <div className={styles.cardBody}>
              <div className={styles.metaRow}>
                <span>{project.category}</span>
                <span>{project.year}</span>
              </div>

              <h2 className={styles.projectTitle}>
                <Link href={`/projetos/${project.slug}`}>
                  {project.title}
                </Link>
              </h2>

              <p className={styles.projectSubtitle}>{project.subtitle}</p>

              <div className={styles.cardFooter}>
                <span>{project.location} &bull; {project.area}</span>
                <span style={{ color: "var(--color-primary)" }}>{project.company}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

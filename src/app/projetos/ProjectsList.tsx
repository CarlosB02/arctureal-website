"use client";

import React, { useState } from "react";
import Image from "next/image";
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

      {/* Projects Grid (2 colunas em desktop, 1 a 1 em mobile) */}
      <div className={styles.projectsGrid}>
        {filteredProjects.map((project) => (
          <article key={project.slug} className={styles.projectCard}>
            <div className={styles.imageContainer}>
              <Image
                src={project.image}
                alt={`Representação visual do projeto ${project.title}`}
                width={1200}
                height={750}
                loading="lazy"
                unoptimized
              />
            </div>

            <div className={styles.cardBody}>
              <div className={styles.metaRow}>
                <span>{project.category}</span>
                <span>{project.year}</span>
              </div>

              <h3 className={styles.projectTitle}>
                {project.title}
              </h3>

              <p className={styles.projectSubtitle}>{project.subtitle}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

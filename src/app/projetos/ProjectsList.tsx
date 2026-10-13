"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import { Project } from "@/lib/content";
import styles from "./Projects.module.css";

interface ProjectsListProps {
  projects: Project[];
}

export default function ProjectsList({ projects }: ProjectsListProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");
  const [activeProjectIndex, setActiveProjectIndex] = useState<number>(0);
  const carouselRef = useRef<HTMLDivElement>(null);

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

  // Reset carousel position and index when category changes
  useEffect(() => {
    setActiveProjectIndex(0);
    if (carouselRef.current) {
      carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  }, [selectedCategory]);

  const handleScroll = useCallback(() => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    const slides = container.querySelectorAll<HTMLElement>(`.${styles.projectCarouselSlide}`);
    if (!slides.length) return;

    const scrollLeft = container.scrollLeft;
    const paddingLeft = parseFloat(window.getComputedStyle(container).paddingLeft || "0");
    const currentPos = scrollLeft + paddingLeft;

    let closestIndex = 0;
    let minDiff = Infinity;

    slides.forEach((slide, idx) => {
      const diff = Math.abs(slide.offsetLeft - currentPos);
      if (diff < minDiff) {
        minDiff = diff;
        closestIndex = idx;
      }
    });

    setActiveProjectIndex(closestIndex);
  }, []);

  const scrollToSlide = useCallback((index: number) => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    const slides = container.querySelectorAll<HTMLElement>(`.${styles.projectCarouselSlide}`);
    const targetSlide = slides[index];
    if (targetSlide) {
      const paddingLeft = parseFloat(window.getComputedStyle(container).paddingLeft || "0");
      const targetScroll = targetSlide.offsetLeft - paddingLeft;
      container.scrollTo({
        left: Math.max(0, targetScroll),
        behavior: "smooth",
      });
      setActiveProjectIndex(index);
    }
  }, []);

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

      {/* Desktop Projects Grid */}
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

      {/* Mobile Projects Carousel */}
      <div className={styles.projectsCarouselWrapper}>
        <div
          ref={carouselRef}
          className={styles.projectsCarouselTrack}
          onScroll={handleScroll}
          role="region"
          aria-label="Carrossel do Arquivo de Obras"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft") {
              scrollToSlide(Math.max(0, activeProjectIndex - 1));
            } else if (e.key === "ArrowRight") {
              scrollToSlide(Math.min(filteredProjects.length - 1, activeProjectIndex + 1));
            }
          }}
        >
          {filteredProjects.map((project, idx) => {
            const isActive = activeProjectIndex === idx;

            return (
              <article
                key={`mobile-${project.slug}`}
                className={`${styles.projectCarouselSlide} ${isActive ? styles.projectCarouselSlideActive : ""}`}
                role="group"
                aria-roledescription="slide"
                aria-label={`${idx + 1} de ${filteredProjects.length}: ${project.title}`}
              >
                <div className={styles.imageContainer}>
                  <Image
                    src={project.image}
                    alt={`Representação visual do projeto ${project.title}`}
                    width={1200}
                    height={750}
                    loading={idx === 0 ? "eager" : "lazy"}
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
            );
          })}
        </div>

        {/* Carousel Controls */}
        {filteredProjects.length > 0 && (
          <div className={styles.carouselControls}>
            <div className={styles.carouselCounter}>
              <span className={styles.counterCurrent}>
                {String(activeProjectIndex + 1).padStart(2, "0")}
              </span>
              <span className={styles.counterSep}>/</span>
              <span className={styles.counterTotal}>
                {String(filteredProjects.length).padStart(2, "0")}
              </span>
            </div>

            <div className={styles.carouselPagination} role="tablist" aria-label="Navegação dos projetos">
              {filteredProjects.map((project, idx) => (
                <button
                  key={`dot-${project.slug}`}
                  type="button"
                  role="tab"
                  aria-selected={idx === activeProjectIndex}
                  aria-label={`Ver projeto ${project.title}`}
                  className={`${styles.paginationBar} ${idx === activeProjectIndex ? styles.paginationBarActive : ""}`}
                  onClick={() => scrollToSlide(idx)}
                />
              ))}
            </div>

            <div className={styles.carouselArrows}>
              <button
                type="button"
                className={styles.arrowButton}
                onClick={() => scrollToSlide(Math.max(0, activeProjectIndex - 1))}
                disabled={activeProjectIndex === 0}
                aria-label="Obra anterior"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                type="button"
                className={styles.arrowButton}
                onClick={() => scrollToSlide(Math.min(filteredProjects.length - 1, activeProjectIndex + 1))}
                disabled={activeProjectIndex === filteredProjects.length - 1}
                aria-label="Próxima obra"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

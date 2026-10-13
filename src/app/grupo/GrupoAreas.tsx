"use client";

import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { GroupArea } from "@/lib/content";
import styles from "./Grupo.module.css";

interface GrupoAreasProps {
  areasList: GroupArea[];
}

export default function GrupoAreas({ areasList }: GrupoAreasProps) {
  const [activeAreaIndex, setActiveAreaIndex] = useState<number>(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(() => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    const slides = container.querySelectorAll<HTMLElement>(`.${styles.areaCarouselSlide}`);
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

    setActiveAreaIndex(closestIndex);
  }, []);

  const scrollToSlide = useCallback((index: number) => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    const slides = container.querySelectorAll<HTMLElement>(`.${styles.areaCarouselSlide}`);
    const targetSlide = slides[index];
    if (targetSlide) {
      const paddingLeft = parseFloat(window.getComputedStyle(container).paddingLeft || "0");
      const targetScroll = targetSlide.offsetLeft - paddingLeft;
      container.scrollTo({
        left: Math.max(0, targetScroll),
        behavior: "smooth",
      });
      setActiveAreaIndex(index);
    }
  }, []);

  return (
    <>
      {/* Desktop Grid */}
      <div className={styles.areasGrid}>
        {areasList.map((area, index) => {
          const isWide = index === 4; // Area 05 (Internacional)
          return (
            <article
              key={area.id}
              id={area.id}
              className={`${styles.areaCard} ${isWide ? styles.areaCardWide : ""}`}
              aria-labelledby={`area-title-${area.id}`}
            >
              {/* Image Banner */}
              <div className={styles.cardImageBox}>
                <Image
                  src={area.image}
                  alt={`Fotografia representativa da área ${area.title}`}
                  fill
                  sizes={isWide ? "100vw" : "(max-width: 768px) 100vw, 50vw"}
                  className={styles.cardImage}
                  priority={index < 2}
                />
                <div className={styles.cardImageScrim} />
                <span className={styles.cardIndex}>{area.index}</span>
              </div>

              {/* Card Body */}
              <div className={styles.cardBody}>
                <div className={styles.cardHeader}>
                  <h3 id={`area-title-${area.id}`} className={styles.cardTitle}>
                    {area.title}
                  </h3>
                  {area.tagline && (
                    <p className={styles.cardTagline}>{area.tagline}</p>
                  )}
                </div>

                <p className={styles.cardDesc}>{area.description}</p>

                {area.highlights && area.highlights.length > 0 && (
                  <ul className={styles.highlightsList}>
                    {area.highlights.map((point, pIdx) => (
                      <li key={pIdx} className={styles.highlightBullet}>
                        <span className={styles.bulletDot} />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className={styles.cardFooter}>
                  <Link href="/contactos" className={styles.cardAction}>
                    Consultar para {area.title} &rarr;
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Mobile Carousel */}
      <div className={styles.areasCarouselWrapper}>
        <div
          ref={carouselRef}
          className={styles.areasCarouselTrack}
          onScroll={handleScroll}
          role="region"
          aria-label="Carrossel de Especialização Integrada"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft") {
              scrollToSlide(Math.max(0, activeAreaIndex - 1));
            } else if (e.key === "ArrowRight") {
              scrollToSlide(Math.min(areasList.length - 1, activeAreaIndex + 1));
            }
          }}
        >
          {areasList.map((area, idx) => {
            const isActive = activeAreaIndex === idx;

            return (
              <article
                key={`mobile-${area.id}`}
                className={`${styles.areaCarouselSlide} ${isActive ? styles.areaCarouselSlideActive : ""}`}
                role="group"
                aria-roledescription="slide"
                aria-label={`${idx + 1} de ${areasList.length}: ${area.title}`}
              >
                {/* Image Banner */}
                <div className={styles.cardImageBox}>
                  <Image
                    src={area.image}
                    alt={`Fotografia representativa da área ${area.title}`}
                    fill
                    sizes="(max-width: 640px) 85vw, 420px"
                    className={styles.cardImage}
                    priority={idx === 0}
                  />
                  <div className={styles.cardImageScrim} />
                  <span className={styles.cardIndex}>{area.index}</span>
                </div>

                {/* Card Body */}
                <div className={styles.cardBody}>
                  <div className={styles.cardHeader}>
                    <h3 className={styles.cardTitle}>{area.title}</h3>
                    {area.tagline && (
                      <p className={styles.cardTagline}>{area.tagline}</p>
                    )}
                  </div>

                  <p className={styles.cardDesc}>{area.description}</p>

                  {area.highlights && area.highlights.length > 0 && (
                    <ul className={styles.highlightsList}>
                      {area.highlights.map((point, pIdx) => (
                        <li key={pIdx} className={styles.highlightBullet}>
                          <span className={styles.bulletDot} />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className={styles.cardFooter}>
                    <Link href="/contactos" className={styles.cardAction}>
                      Consultar para {area.title} &rarr;
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Carousel Controls */}
        <div className={styles.carouselControls}>
          <div className={styles.carouselCounter}>
            <span className={styles.counterCurrent}>
              {String(activeAreaIndex + 1).padStart(2, "0")}
            </span>
            <span className={styles.counterSep}>/</span>
            <span className={styles.counterTotal}>
              {String(areasList.length).padStart(2, "0")}
            </span>
          </div>

          <div className={styles.carouselPagination} role="tablist" aria-label="Navegação das áreas de especialização">
            {areasList.map((area, idx) => (
              <button
                key={`dot-${area.id}`}
                type="button"
                role="tab"
                aria-selected={idx === activeAreaIndex}
                aria-label={`Ver área ${area.title}`}
                className={`${styles.paginationBar} ${idx === activeAreaIndex ? styles.paginationBarActive : ""}`}
                onClick={() => scrollToSlide(idx)}
              />
            ))}
          </div>

          <div className={styles.carouselArrows}>
            <button
              type="button"
              className={styles.arrowButton}
              onClick={() => scrollToSlide(Math.max(0, activeAreaIndex - 1))}
              disabled={activeAreaIndex === 0}
              aria-label="Área anterior"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              className={styles.arrowButton}
              onClick={() => scrollToSlide(Math.min(areasList.length - 1, activeAreaIndex + 1))}
              disabled={activeAreaIndex === areasList.length - 1}
              aria-label="Próxima área"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

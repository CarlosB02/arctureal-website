"use client";

import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./AreasShowcase.module.css";

interface AreaItem {
  id: string;
  index: string;
  title: string;
  desc: string;
  image: string;
}

const areas: AreaItem[] = [
  {
    id: "hotelaria",
    index: "01",
    title: "Hotelaria",
    desc: "Hotéis boutique de charme, com identidade própria, atenção ao detalhe e uma experiência de hospitalidade personalizada.",
    image: "/images/areas/hotelaria.webp",
  },
  {
    id: "gestao-patrimonio",
    index: "02",
    title: "Gestão de Património",
    desc: "Análise de viabilidade de projetos e acompanhamento da gestão de ativos, com rigor e informação clara em cada fase de decisão.",
    image: "/images/areas/gestao-servicos.webp",
  },
  {
    id: "promocao",
    index: "03",
    title: "Promoção",
    desc: "Desenvolvimento e promoção de projetos de referência, combinando visão estratégica, inovação sustentável e criação de valor a longo prazo.",
    image: "/images/areas/imobiliario.webp",
  },
  {
    id: "construcao",
    index: "04",
    title: "Construção",
    desc: "Capacidade técnica e rigor executivo na construção e reabilitação, garantindo controlo de custos, cumprimento de prazos e excelência material.",
    image: "/images/areas/internacional-hub.webp",
  },
  {
    id: "investimentos",
    index: "05",
    title: "Investimentos",
    desc: "Gestão de um portfólio de ativos próprio, orientado para a geração de rendimento passivo, estável e recorrente a longo prazo.",
    image: "/images/areas/investimentos.webp",
  },
];

export default function AreasShowcase() {
  const [activeDesktopIndex, setActiveDesktopIndex] = useState<number>(0);
  const [activeMobileIndex, setActiveMobileIndex] = useState<number>(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(() => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    const slides = container.querySelectorAll<HTMLElement>(`.${styles.carouselSlide}`);
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

    setActiveMobileIndex(closestIndex);
  }, []);

  const scrollToSlide = useCallback((index: number) => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    const slides = container.querySelectorAll<HTMLElement>(`.${styles.carouselSlide}`);
    const targetSlide = slides[index];
    if (targetSlide) {
      const paddingLeft = parseFloat(window.getComputedStyle(container).paddingLeft || "0");
      const targetScroll = targetSlide.offsetLeft - paddingLeft;
      container.scrollTo({
        left: Math.max(0, targetScroll),
        behavior: "smooth",
      });
      setActiveMobileIndex(index);
    }
  }, []);

  return (
    <section className={styles.section} aria-labelledby="areas-heading">
      <div className="container">
        {/* Section Header */}
        <div className={styles.header}>
          <div className={styles.headerTitleGroup}>
            <h2 id="areas-heading" className={styles.headerTitle}>
              Áreas de Atividade
            </h2>
            <p className={styles.headerLead}>
              Uma abordagem transversal que articula conceção arquitetónica, estratégia de investimento
              e capacidade de execução em cinco pilares determinantes.
            </p>
          </div>
          <Link href="/grupo" className="link-architectural">
            Conhecer Metodologia Integrada &rarr;
          </Link>
        </div>

        {/* Desktop: 5 Expandable Architectural Louvers */}
        <div className={styles.panesContainer}>
          {areas.map((area, idx) => {
            const isActive = activeDesktopIndex === idx;

            return (
              <div
                key={`desktop-${area.id}`}
                className={`${styles.pane} ${isActive ? styles.paneActive : ""}`}
                onMouseEnter={() => setActiveDesktopIndex(idx)}
                onClick={() => setActiveDesktopIndex(idx)}
                role="region"
                aria-label={`Área de atividade: ${area.title}`}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    setActiveDesktopIndex(idx);
                  }
                }}
              >
                {/* Background Area Photography */}
                <Image
                  src={area.image}
                  alt={`Fotografia da área de atividade ${area.title}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className={styles.paneImage}
                  priority={idx < 2}
                />

                {/* Scrim Overlay */}
                <div className={styles.paneOverlay} />

                {/* Content Overlay */}
                <div className={styles.paneContent}>
                  <div className={styles.paneTop}>
                    <span className={styles.paneIndex}>{area.index}</span>
                  </div>

                  <div className={styles.paneBottom}>
                    <h3 className={styles.paneTitle}>{area.title}</h3>

                    <div className={styles.paneDetails}>
                      <p className={styles.paneDesc}>{area.desc}</p>
                      <Link href="/contactos" className={styles.paneAction}>
                        Consultar para {area.title} &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile: Architectural Carousel */}
        <div className={styles.carouselWrapper}>
          <div
            ref={carouselRef}
            className={styles.carouselTrack}
            onScroll={handleScroll}
            role="region"
            aria-label="Carrossel de Áreas de Atividade"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "ArrowLeft") {
                scrollToSlide(Math.max(0, activeMobileIndex - 1));
              } else if (e.key === "ArrowRight") {
                scrollToSlide(Math.min(areas.length - 1, activeMobileIndex + 1));
              }
            }}
          >
            {areas.map((area, idx) => {
              const isActive = activeMobileIndex === idx;

              return (
                <div
                  key={`mobile-${area.id}`}
                  className={`${styles.carouselSlide} ${isActive ? styles.carouselSlideActive : ""}`}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${idx + 1} de ${areas.length}: ${area.title}`}
                >
                  {/* Slide Background Image */}
                  <Image
                    src={area.image}
                    alt={`Fotografia da área de atividade ${area.title}`}
                    fill
                    sizes="(max-width: 640px) 85vw, 420px"
                    className={styles.slideImage}
                    priority={idx === 0}
                  />

                  {/* High-end Scrim Overlay */}
                  <div className={styles.slideOverlay} />

                  {/* Content Overlay */}
                  <div className={styles.slideContent}>
                    <div className={styles.slideTop}>
                      <span className={styles.slideIndex}>{area.index}</span>
                      <span className={styles.slideBadge}>Arctureal Group</span>
                    </div>

                    <div className={styles.slideBottom}>
                      <h3 className={styles.slideTitle}>{area.title}</h3>
                      <div className={styles.slideDivider} />
                      <p className={styles.slideDesc}>{area.desc}</p>
                      <Link href="/contactos" className={styles.slideAction}>
                        <span>Consultar para {area.title}</span>
                        <span className={styles.slideActionArrow} aria-hidden="true">&rarr;</span>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Carousel Navigation & Indicators */}
          <div className={styles.carouselControls}>
            {/* Slide Numeric Counter */}
            <div className={styles.carouselCounter}>
              <span className={styles.counterCurrent}>
                {String(activeMobileIndex + 1).padStart(2, "0")}
              </span>
              <span className={styles.counterSep}>/</span>
              <span className={styles.counterTotal}>
                {String(areas.length).padStart(2, "0")}
              </span>
            </div>

            {/* Segmented Architectural Pagination Bars */}
            <div className={styles.carouselPagination} role="tablist" aria-label="Navegação das áreas">
              {areas.map((area, idx) => (
                <button
                  key={`dot-${area.id}`}
                  type="button"
                  role="tab"
                  aria-selected={idx === activeMobileIndex}
                  aria-label={`Ver área ${area.title}`}
                  className={`${styles.paginationBar} ${idx === activeMobileIndex ? styles.paginationBarActive : ""}`}
                  onClick={() => scrollToSlide(idx)}
                />
              ))}
            </div>

            {/* Prev / Next Arrow Controls */}
            <div className={styles.carouselArrows}>
              <button
                type="button"
                className={styles.arrowButton}
                onClick={() => scrollToSlide(Math.max(0, activeMobileIndex - 1))}
                disabled={activeMobileIndex === 0}
                aria-label="Área anterior"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                type="button"
                className={styles.arrowButton}
                onClick={() => scrollToSlide(Math.min(areas.length - 1, activeMobileIndex + 1))}
                disabled={activeMobileIndex === areas.length - 1}
                aria-label="Próxima área"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";
import styles from "./Projects.module.css";

interface CycleStep {
  id: string;
  index: string;
  title: string;
  desc: string;
  tag: string;
  image: string;
  alt: string;
}

const cycleSteps: CycleStep[] = [
  {
    id: "analise",
    index: "01",
    title: "Análise e viabilidade",
    desc: "Identificamos e analisamos oportunidades de investimento, avaliando o potencial, os riscos e a viabilidade de cada uma.",
    tag: "Análise",
    image: "/images/areas/gestao-servicos.webp",
    alt: "Originação e viabilidade de ativos",
  },
  {
    id: "estruturacao",
    index: "02",
    title: "Estruturação",
    desc: "Definimos o plano de negócio, o modelo de investimento e os parceiros certos para cada projeto.",
    tag: "Estratégia",
    image: "/images/areas/imobiliario.webp",
    alt: "Conceção arquitetónica e licenciamento",
  },
  {
    id: "valorizacao",
    index: "03",
    title: "Valorização e retorno",
    desc: "Acompanhamos o ativo até ao fim, seja por venda, arrendamento ou exploração, com informação regular ao investidor.",
    tag: "Retorno",
    image: "/images/areas/hotelaria.webp",
    alt: "Execução, entrega e desinvestimento",
  },
];

export default function InvestmentCycle() {
  const [activeMobileIndex, setActiveMobileIndex] = useState<number>(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(() => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    const slides = container.querySelectorAll<HTMLElement>(`.${styles.cycleCarouselSlide}`);
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
    const slides = container.querySelectorAll<HTMLElement>(`.${styles.cycleCarouselSlide}`);
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
    <>
      {/* Desktop Grid */}
      <div className={styles.cycleGrid}>
        {cycleSteps.map((step) => (
          <div key={`desktop-${step.id}`} className={styles.cycleCard}>
            <div className={styles.cycleCardImageBox}>
              <Image
                src={step.image}
                alt={step.alt}
                fill
                sizes="(max-width: 1024px) 50vw, 33vw"
                className={styles.cycleCardImage}
              />
              <span className={styles.cycleCardIndex}>{step.index}</span>
            </div>
            <div className={styles.cycleCardBody}>
              <h3 className={styles.cycleCardTitle}>{step.title}</h3>
              <p className={styles.cycleCardDesc}>{step.desc}</p>
              <span className={styles.cycleCardTag}>{step.tag}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Carousel */}
      <div className={styles.cycleCarouselWrapper}>
        <div
          ref={carouselRef}
          className={styles.cycleCarouselTrack}
          onScroll={handleScroll}
          role="region"
          aria-label="Carrossel do Ciclo de Valor para o Investidor"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft") {
              scrollToSlide(Math.max(0, activeMobileIndex - 1));
            } else if (e.key === "ArrowRight") {
              scrollToSlide(Math.min(cycleSteps.length - 1, activeMobileIndex + 1));
            }
          }}
        >
          {cycleSteps.map((step, idx) => {
            const isActive = activeMobileIndex === idx;

            return (
              <div
                key={`mobile-${step.id}`}
                className={`${styles.cycleCarouselSlide} ${isActive ? styles.cycleCarouselSlideActive : ""}`}
                role="group"
                aria-roledescription="slide"
                aria-label={`${idx + 1} de ${cycleSteps.length}: ${step.title}`}
              >
                <div className={styles.cycleCardImageBox}>
                  <Image
                    src={step.image}
                    alt={step.alt}
                    fill
                    sizes="(max-width: 640px) 85vw, 400px"
                    className={styles.cycleCardImage}
                    priority={idx === 0}
                  />
                  <span className={styles.cycleCardIndex}>{step.index}</span>
                </div>
                <div className={styles.cycleCardBody}>
                  <h3 className={styles.cycleCardTitle}>{step.title}</h3>
                  <p className={styles.cycleCardDesc}>{step.desc}</p>
                  <span className={styles.cycleCardTag}>{step.tag}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel Controls */}
        <div className={styles.carouselControls}>
          <div className={styles.carouselCounter}>
            <span className={styles.counterCurrent}>
              {String(activeMobileIndex + 1).padStart(2, "0")}
            </span>
            <span className={styles.counterSep}>/</span>
            <span className={styles.counterTotal}>
              {String(cycleSteps.length).padStart(2, "0")}
            </span>
          </div>

          <div className={styles.carouselPagination} role="tablist" aria-label="Navegação das fases do ciclo de valor">
            {cycleSteps.map((step, idx) => (
              <button
                key={`dot-${step.id}`}
                type="button"
                role="tab"
                aria-selected={idx === activeMobileIndex}
                aria-label={`Ver fase ${step.title}`}
                className={`${styles.paginationBar} ${idx === activeMobileIndex ? styles.paginationBarActive : ""}`}
                onClick={() => scrollToSlide(idx)}
              />
            ))}
          </div>

          <div className={styles.carouselArrows}>
            <button
              type="button"
              className={styles.arrowButton}
              onClick={() => scrollToSlide(Math.max(0, activeMobileIndex - 1))}
              disabled={activeMobileIndex === 0}
              aria-label="Fase anterior"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              className={styles.arrowButton}
              onClick={() => scrollToSlide(Math.min(cycleSteps.length - 1, activeMobileIndex + 1))}
              disabled={activeMobileIndex === cycleSteps.length - 1}
              aria-label="Próxima fase"
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

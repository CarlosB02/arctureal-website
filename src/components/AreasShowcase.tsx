"use client";

import React, { useState } from "react";
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
    id: "imobiliario",
    index: "01",
    title: "Imobiliário",
    desc: "Desenvolvimento de habitação de autor e edifícios singulares que equilibram a nobreza dos materiais com o valor do lugar.",
    image: "/images/areas/imobiliario.jpg",
  },
  {
    id: "hotelaria",
    index: "02",
    title: "Hotelaria",
    desc: "Resorts de refúgio, boutique hotéis e espaços imersivos desenhados em simbiose com a paisagem natural e o património.",
    image: "/images/areas/hotelaria.jpg",
  },
  {
    id: "investimentos",
    index: "03",
    title: "Investimentos",
    desc: "Estruturação técnica e arquitetónica de ativos imobiliários com foco em valorização sustentável e liquidez a longo prazo.",
    image: "/images/areas/investimentos.jpg",
  },
  {
    id: "gestao-servicos",
    index: "04",
    title: "Gestão e Serviços",
    desc: "Acompanhamento rigoroso desde o estudo prévio à entrega de chave: fiscalização, controlo de custos e certificação bioclimática.",
    image: "/images/areas/gestao-servicos.jpg",
  },
  {
    id: "internacional",
    index: "05",
    title: "Internacional",
    desc: "Projeção do saber construtivo português em mercados globais através de parcerias estratégicas com promotores internacionais.",
    image: "/images/areas/internacional-hub.jpg",
  },
];

export default function AreasShowcase() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

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

        {/* 5 Expandable Architectural Louvers */}
        <div className={styles.panesContainer}>
          {areas.map((area, idx) => {
            const isActive = activeIndex === idx;

            return (
              <div
                key={area.id}
                className={`${styles.pane} ${isActive ? styles.paneActive : ""}`}
                onMouseEnter={() => setActiveIndex(idx)}
                onClick={() => setActiveIndex(idx)}
                role="region"
                aria-label={`Área de atividade: ${area.title}`}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    setActiveIndex(idx);
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
      </div>
    </section>
  );
}

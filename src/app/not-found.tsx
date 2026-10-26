import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import styles from "./not-found.module.css";

export const metadata: Metadata = {
  title: "Página Não Encontrada | ARCTUREAL",
  description: "A coordenada ou página que procura não foi localizada na estrutura do website da Arctureal.",
};

export default function NotFound() {
  return (
    <section className={styles.section} aria-labelledby="notfound-title">
      <div className="container">
        <div className={`${styles.card} animate-fade-in`}>
          {/* Architectural corner crosshairs */}
          <span className={styles.crosshairTopLeft}>+</span>
          <span className={styles.crosshairTopRight}>+</span>
          <span className={styles.crosshairBottomLeft}>+</span>
          <span className={styles.crosshairBottomRight}>+</span>

          {/* Visual 404 in main color */}
          <div className={styles.visualWrapper}>
            <h2 className={styles.errorCode} aria-hidden="true">
              404
            </h2>
          </div>

          {/* Main Copy */}
          <div className={styles.content}>
            <h1 id="notfound-title" className={styles.title}>
              Página não encontrada
            </h1>
            <p className={styles.description}>
              O endereço solicitado não corresponde a nenhuma página ou projeto da nossa
              estrutura. Poderá ter sido renomeado, transferido ou encontrar-se ainda em fase de
              estudo prévio.
            </p>

            {/* Main Action Buttons */}
            <div className={styles.actions}>
              <Link href="/" className={styles.primaryBtn}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <line x1="19" y1="12" x2="5" y2="12" />
                  <polyline points="12 19 5 12 12 5" />
                </svg>
                Regressar ao Início
              </Link>

              <Link href="/projetos" className={styles.secondaryBtn}>
                Ver Portfólio
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>

            {/* Quick architectural directory / directory shortcuts */}
            <div className={styles.directorySection}>
              <div className={styles.directoryLabel}>
                Rotas alternativas recomendadas
              </div>
              <div className={styles.directoryGrid}>
                <Link href="/projetos" className={styles.directoryCard}>
                  <span className={styles.directoryNumber}>01</span>
                  <div className={styles.directoryTitle}>
                    Projetos
                    <span className={styles.directoryArrow}>→</span>
                  </div>
                  <span className={styles.directorySub}>
                    Habitação, hotelaria e comercial
                  </span>
                </Link>

                <Link href="/grupo" className={styles.directoryCard}>
                  <span className={styles.directoryNumber}>02</span>
                  <div className={styles.directoryTitle}>
                    O Grupo
                    <span className={styles.directoryArrow}>→</span>
                  </div>
                  <span className={styles.directorySub}>
                    Estrutura e empresas integradas
                  </span>
                </Link>

                <Link href="/contactos" className={styles.directoryCard}>
                  <span className={styles.directoryNumber}>03</span>
                  <div className={styles.directoryTitle}>
                    Contactos
                    <span className={styles.directoryArrow}>→</span>
                  </div>
                  <span className={styles.directorySub}>
                    Sede em Lisboa e atendimento
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

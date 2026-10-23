"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./CookieBanner.module.css";
import {
  getStoredConsent,
  saveConsent,
  OPEN_COOKIE_MODAL_EVENT,
} from "@/lib/cookies";

export default function CookieBanner() {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = getStoredConsent();

    if (stored) {
      setAnalyticsEnabled(stored.analytics);
    } else {
      // Delay suave para a primeira renderização não ser intrusiva
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    // Permitir reabertura a partir do Footer ou de qualquer botão do site
    const handleOpenModal = () => {
      const stored = getStoredConsent();
      if (stored) {
        setAnalyticsEnabled(stored.analytics);
      }
      setShowPreferences(true);
      setIsVisible(true);
    };

    window.addEventListener(OPEN_COOKIE_MODAL_EVENT, handleOpenModal);
    return () => {
      window.removeEventListener(OPEN_COOKIE_MODAL_EVENT, handleOpenModal);
    };
  }, []);

  if (!mounted || !isVisible) {
    return null;
  }

  const handleAcceptAll = () => {
    saveConsent(true);
    setAnalyticsEnabled(true);
    setIsVisible(false);
    setShowPreferences(false);
  };

  const handleRejectOptional = () => {
    saveConsent(false);
    setAnalyticsEnabled(false);
    setIsVisible(false);
    setShowPreferences(false);
  };

  const handleSavePreferences = () => {
    saveConsent(analyticsEnabled);
    setIsVisible(false);
    setShowPreferences(false);
  };

  return (
    <aside
      className={styles.bannerWrapper}
      aria-label="Preferências de Cookies e Privacidade"
      role="region"
    >
      <div className={styles.bannerCard}>
        {/* Efeito de luz ambiente de topo */}
        <div className={styles.ambientGlow} />

        {/* Cabeçalho */}
        <div className={styles.headerRow}>
          <span className={styles.eyebrow}>Privacidade & Cookies</span>
          <div className={styles.badgeIcon} aria-hidden="true">
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </div>
        </div>

        <h2 className={styles.title}>Preferências de Navegação</h2>

        {!showPreferences ? (
          /* MODO SIMPLES / RESUMIDO */
          <>
            <p className={styles.description}>
              Utilizamos cookies essenciais para a estabilidade da plataforma e métricas analíticas discretas para aperfeiçoar a experiência digital da Arctureal. Saiba mais na nossa{" "}
              <Link href="/cookies" className={styles.textLink}>
                Política de Cookies
              </Link>{" "}
              e{" "}
              <Link href="/privacidade" className={styles.textLink}>
                Política de Privacidade
              </Link>.
            </p>

            <div className={styles.actionsRow}>
              <button
                type="button"
                onClick={handleAcceptAll}
                className={styles.btnAccept}
              >
                Aceitar Todos
              </button>
              <button
                type="button"
                onClick={handleRejectOptional}
                className={styles.btnEssential}
              >
                Apenas Essenciais
              </button>
              <button
                type="button"
                onClick={() => setShowPreferences(true)}
                className={styles.btnCustomize}
              >
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <line x1="4" y1="21" x2="4" y2="14" />
                  <line x1="4" y1="10" x2="4" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="12" />
                  <line x1="12" y1="8" x2="12" y2="3" />
                  <line x1="20" y1="21" x2="20" y2="16" />
                  <line x1="20" y1="12" x2="20" y2="3" />
                  <line x1="1" y1="14" x2="7" y2="14" />
                  <line x1="9" y1="8" x2="15" y2="8" />
                  <line x1="17" y1="16" x2="23" y2="16" />
                </svg>
                Personalizar Opções
              </button>
            </div>
          </>
        ) : (
          /* MODO DETALHADO / PREFERÊNCIAS GRANULARES */
          <>
            <p className={styles.description}>
              Escolha as categorias de cookies que autoriza durante a sua visita:
            </p>

            <div className={styles.preferencesList}>
              {/* Essenciais */}
              <div className={styles.prefCard}>
                <div className={styles.prefHeader}>
                  <span className={styles.prefLabel}>Cookies Essenciais</span>
                  <span className={styles.prefStatusPill}>Sempre Ativos</span>
                </div>
                <p className={styles.prefText}>
                  Estritamente indispensáveis para segurança de rede, navegação fluida e integridade das preferências. Não podem ser desativados.
                </p>
              </div>

              {/* Analíticos */}
              <div className={styles.prefCard}>
                <div className={styles.prefHeader}>
                  <label htmlFor="analytics-toggle" className={styles.prefLabel}>
                    Métricas & Analytics
                  </label>
                  <label className={styles.switchContainer}>
                    <input
                      id="analytics-toggle"
                      type="checkbox"
                      className={styles.switchInput}
                      checked={analyticsEnabled}
                      onChange={(e) => setAnalyticsEnabled(e.target.checked)}
                      aria-label="Ativar cookies de métricas e analytics"
                    />
                    <span className={styles.switchTrack} />
                  </label>
                </div>
                <p className={styles.prefText}>
                  Permitem-nos compreender de forma agregada e totalmente anónima como os visitantes navegam pelas páginas e projetos.
                </p>
              </div>
            </div>

            <div className={styles.prefActions}>
              <div className={styles.prefActionsRow}>
                <button
                  type="button"
                  onClick={handleSavePreferences}
                  className={styles.btnSave}
                >
                  Guardar Escolhas
                </button>
                <button
                  type="button"
                  onClick={handleAcceptAll}
                  className={styles.btnEssential}
                >
                  Aceitar Todos
                </button>
              </div>
              <button
                type="button"
                onClick={() => setShowPreferences(false)}
                className={styles.btnBack}
              >
                ← Voltar ao resumo
              </button>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}

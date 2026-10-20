"use client";

import React, { useState, useEffect } from "react";
import {
  getStoredConsent,
  openCookiePreferences,
  COOKIE_CONSENT_EVENT,
  CookiePreferences,
} from "@/lib/cookies";
import styles from "./Cookies.module.css";

export default function CookieManagerCard() {
  const [mounted, setMounted] = useState(false);
  const [consent, setConsent] = useState<CookiePreferences | null>(null);

  useEffect(() => {
    setMounted(true);
    setConsent(getStoredConsent());

    const handleConsentUpdate = (e: Event) => {
      const customEvent = e as CustomEvent<CookiePreferences>;
      if (customEvent.detail) {
        setConsent(customEvent.detail);
      } else {
        setConsent(getStoredConsent());
      }
    };

    window.addEventListener(COOKIE_CONSENT_EVENT, handleConsentUpdate);
    return () => {
      window.removeEventListener(COOKIE_CONSENT_EVENT, handleConsentUpdate);
    };
  }, []);

  if (!mounted) {
    return (
      <div className={styles.managerCard}>
        <div className={styles.managerHeader}>
          <div className={styles.managerInfo}>
            <span className={styles.managerEyebrow}>Configuração Atual</span>
            <h3 className={styles.managerTitle}>O Seu Consentimento</h3>
          </div>
        </div>
        <p className={styles.managerDesc}>A carregar preferências armazenadas...</p>
      </div>
    );
  }

  const analyticsAccepted = consent?.analytics === true;
  const lastUpdated = consent?.timestamp
    ? new Date(consent.timestamp).toLocaleDateString("pt-PT", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      })
    : null;

  return (
    <div className={styles.managerCard}>
      <div className={styles.managerHeader}>
        <div className={styles.managerInfo}>
          <span className={styles.managerEyebrow}>Configuração em Tempo Real</span>
          <h3 className={styles.managerTitle}>O Seu Painel de Consentimento</h3>
        </div>
        <button
          type="button"
          onClick={openCookiePreferences}
          className={styles.managerBtn}
          id="btn-open-cookie-panel"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
          Alterar Escolhas
        </button>
      </div>

      <p className={styles.managerDesc}>
        Pode rever, conceder ou revogar o seu consentimento para o tratamento de cookies analíticos a qualquer instante com efeito imediato.
      </p>

      <div className={styles.managerStatusGrid}>
        <div className={styles.managerStatusItem}>
          <div className={styles.managerStatusTop}>
            <span className={styles.managerStatusName}>Cookies Essenciais</span>
            <span className={styles.statusBadgeActive}>Sempre Ativo</span>
          </div>
          <span className={styles.managerStatusSub}>
            Indispensáveis para navegação segura e integridade do site.
          </span>
        </div>

        <div className={styles.managerStatusItem}>
          <div className={styles.managerStatusTop}>
            <span className={styles.managerStatusName}>Métricas & Desempenho</span>
            <span
              className={
                analyticsAccepted
                  ? styles.statusBadgeActive
                  : styles.statusBadgeDeclined
              }
            >
              {analyticsAccepted ? "Autorizado" : "Recusado"}
            </span>
          </div>
          <span className={styles.managerStatusSub}>
            {analyticsAccepted
              ? "Consentimento ativo para estatísticas agregadas anónimas."
              : "Desativado. Não recolhemos dados de desempenho no seu navegador."}
          </span>
        </div>
      </div>

      {lastUpdated && (
        <div className={styles.managerFooter}>
          <span className={styles.managerTimestamp}>
            Último registo de escolha: <strong>{lastUpdated}</strong>
          </span>
        </div>
      )}
    </div>
  );
}

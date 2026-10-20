"use client";

import { useEffect } from "react";
import Script from "next/script";
import { getStoredConsent, COOKIE_CONSENT_EVENT, type CookiePreferences } from "@/lib/cookies";

interface AnalyticsProps {
  /**
   * ID de medição do Google Analytics 4 (ex: G-XXXXXXXXXX).
   * Pode também ser obtido da variável de ambiente NEXT_PUBLIC_GA_ID.
   */
  gaId?: string;
}

export default function Analytics({ gaId }: AnalyticsProps) {
  const measurementId = gaId || process.env.NEXT_PUBLIC_GA_ID;

  useEffect(() => {
    // Configura o consentimento inicial do Google Consent Mode v2
    const stored = getStoredConsent();
    const analyticsGranted = stored?.analytics === true;

    const win = window as unknown as {
      dataLayer?: unknown[];
      gtag?: (...args: unknown[]) => void;
    };

    win.dataLayer = win.dataLayer || [];
    if (!win.gtag) {
      win.gtag = function () {
        win.dataLayer?.push(arguments);
      };
    }

    // Estado padrão antes de qualquer interação: negado por omissão (Privacy-First)
    win.gtag("consent", "default", {
      analytics_storage: analyticsGranted ? "granted" : "denied",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
      wait_for_update: 500,
    });

    // Ouve alterações dinâmicas de consentimento disparadas pelo banner
    const handleConsentChange = (e: Event) => {
      const customEvent = e as CustomEvent<CookiePreferences>;
      const isGranted = customEvent.detail?.analytics === true;
      if (win.gtag) {
        win.gtag("consent", "update", {
          analytics_storage: isGranted ? "granted" : "denied",
        });
      }
    };

    window.addEventListener(COOKIE_CONSENT_EVENT, handleConsentChange);
    return () => {
      window.removeEventListener(COOKIE_CONSENT_EVENT, handleConsentChange);
    };
  }, []);

  // Se o utilizador ainda não definiu o ID do Google Analytics, apenas mantém o consent mode ativo
  if (!measurementId) {
    return null;
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
      />
      <Script
        id="google-analytics-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${measurementId}', {
              page_path: window.location.pathname,
              anonymize_ip: true
            });
          `,
        }}
      />
    </>
  );
}

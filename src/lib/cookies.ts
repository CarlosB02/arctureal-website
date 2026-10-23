export interface CookiePreferences {
  essential: true;
  analytics: boolean;
  timestamp: string;
}

const STORAGE_KEY = "arctureal_cookie_consent_v1";
export const COOKIE_CONSENT_EVENT = "arctureal:cookie_consent_update";
export const OPEN_COOKIE_MODAL_EVENT = "arctureal:open_cookie_modal";

/**
 * Lê o consentimento guardado no localStorage.
 */
export function getStoredConsent(): CookiePreferences | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as CookiePreferences;
  } catch {
    return null;
  }
}

/**
 * Guarda o consentimento do utilizador e sincroniza eventos e o Google Consent Mode (se aplicável).
 */
export function saveConsent(analytics: boolean): CookiePreferences {
  const preferences: CookiePreferences = {
    essential: true,
    analytics,
    timestamp: new Date().toISOString(),
  };

  if (typeof window !== "undefined") {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));
      // Guardar também em cookie leve (duração de 365 dias)
      const maxAge = 60 * 60 * 24 * 365;
      document.cookie = `${STORAGE_KEY}=${analytics ? "analytics_accepted" : "analytics_declined"}; path=/; max-age=${maxAge}; SameSite=Lax`;
    } catch (e) {
      console.warn("Não foi possível persistir as preferências de cookies:", e);
    }

    // Atualizar Google Consent Mode v2 caso Google Tag Manager ou gtag esteja presente ou venha a ser injetado
    updateGoogleConsentMode(analytics);

    // Disparar evento customizado no window para outros componentes reagirem em tempo real
    window.dispatchEvent(
      new CustomEvent(COOKIE_CONSENT_EVENT, { detail: preferences })
    );
  }

  return preferences;
}

/**
 * Reinicializa e abre o banner/modal para o utilizador alterar as suas preferências.
 */
export function openCookiePreferences(): void {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent(OPEN_COOKIE_MODAL_EVENT));
  }
}

/**
 * Prepara ou atualiza o Google Consent Mode v2 de forma standard.
 * Mesmo que o Google Analytics só seja colocado depois, ao inicializar aqui,
 * o gtag já saberá o estado de consentimento no momento em que for adicionado.
 */
export function updateGoogleConsentMode(granted: boolean): void {
  if (typeof window === "undefined") return;

  const status = granted ? "granted" : "denied";

  // Garante que o dataLayer existe
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

  win.gtag("consent", "update", {
    analytics_storage: status,
    ad_storage: status,
    ad_user_data: status,
    ad_personalization: status,
  });
}

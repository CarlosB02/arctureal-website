"use client";

import React from "react";
import { openCookiePreferences } from "@/lib/cookies";
import styles from "./CookiePreferencesButton.module.css";

export default function CookiePreferencesButton() {
  return (
    <button
      type="button"
      onClick={openCookiePreferences}
      className={styles.button}
      aria-label="Gerir preferências de cookies"
    >
      Preferências de Cookies
    </button>
  );
}

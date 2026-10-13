"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";

interface HeaderProps {
  navigation: Array<{ label: string; href: string }>;
}

export default function Header({ navigation }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Start transparent at top and transition to dark on scroll across all pages
  const isProjectDetail = pathname.startsWith("/projetos/") && pathname !== "/projetos";
  const startsTransparent = !isProjectDetail;

  let headerClass = styles.header;
  if (startsTransparent && !isScrolled) {
    headerClass += ` ${styles.headerTop}`;
  } else {
    headerClass += ` ${styles.headerScrolled}`;
  }

  const isDarkTheme = true; // Off-white luxury typography across all header states

  return (
    <header className={headerClass}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.brand} aria-label="ARCTUREAL - Página Inicial">
          {!logoError ? (
            <Image
              src="/images/logo.webp"
              alt="ARCTUREAL"
              width={160}
              height={36}
              priority
              className={styles.brandLogo}
              onError={() => setLogoError(true)}
            />
          ) : (
            <span
              className={`${styles.brandName} ${
                isDarkTheme ? styles.brandNameLight : styles.brandNameDark
              }`}
            >
              ARCTUREAL
            </span>
          )}
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.nav} aria-label="Navegação Principal">
          {navigation.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            const linkThemeClass = isDarkTheme
              ? `${styles.navLinkLight} ${isActive ? styles.navLinkLightActive : ""}`
              : `${styles.navLinkDark} ${isActive ? styles.navLinkDarkActive : ""}`;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`${styles.navLink} ${linkThemeClass}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Header Action Button */}
        <div className={styles.actions}>
          <Link
            href="/contactos"
            className={`${styles.contactBtn} ${isDarkTheme ? styles.contactBtnLight : styles.contactBtnDark
              }`}
          >
            Contacto Direto
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className={`${styles.mobileToggle} ${isDarkTheme ? styles.mobileToggleLight : styles.mobileToggleDark
              }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={mobileOpen}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {mobileOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="4" y1="8" x2="20" y2="8" />
                  <line x1="4" y1="16" x2="20" y2="16" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`${styles.mobileDrawer} ${mobileOpen ? styles.mobileDrawerOpen : ""}`}
        aria-hidden={!mobileOpen}
      >
        <nav className={styles.mobileNav} aria-label="Menu móvel">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={styles.mobileNavLink}
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className={styles.mobileContactInfo}>
          <p className={styles.mobileContactText}>Estrada da Luz, 96-A, 1600-161 Lisboa</p>
          <p className={styles.mobileContactText}>(+351) 211 450 244</p>
          <p className={styles.mobileContactText}>geral@arctureal.com</p>
        </div>
      </div>
    </header>
  );
}

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getSiteConfig } from "@/lib/content";
import styles from "./Footer.module.css";

export default function Footer() {
  const site = getSiteConfig();

  return (
    <footer className={styles.footer} data-theme="dark">
      {/* Luz ambiente suave */}
      <div className={styles.ambientLight} />

      <div className={`container ${styles.inner}`}>
        {/* Secção de Informações */}
        <div className={styles.grid}>
          {/* Marca */}
          <div className={styles.colBrand}>
            <Link href="/" className={styles.brandLink} aria-label="ARCTUREAL - Início">
              <Image
                src="/images/logo.webp"
                alt={site.brand.name}
                width={170}
                height={38}
                className={styles.brandLogo}
              />
            </Link>
            <p className={styles.brandDesc}>{site.brand.tagline}</p>
            <div className={styles.brandGroup}>
              <span className={styles.brandGroupLine} />
              <span className={styles.brandGroupText}>Grupo Arctureal</span>
            </div>
          </div>

          {/* Navegação */}
          <div className={styles.colNav}>
            <h4 className={styles.colTitle}>Navegação</h4>
            <ul className={styles.linkList}>
              {site.navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={styles.linkItem}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contactos em blocos smooth */}
          <div className={styles.colContact}>
            <h4 className={styles.colTitle}>Contactos</h4>
            <div className={styles.contactList}>
              <div className={styles.contactBlock}>
                <span className={styles.contactLabel}>Email</span>
                <a href={`mailto:${site.contacts.email}`} className={styles.contactLink}>
                  {site.contacts.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Nome ARCTUREAL com animação de luz */}
        <div className={styles.monolithContainer} aria-hidden="true">
          <span className={styles.monolithText}>ARCTUREAL</span>
        </div>

        {/* Linha inferior */}
        <div className={styles.bottomBar}>
          <div className={styles.bottomLeft}>
            <p className={styles.legalText}>{site.footer.legal}</p>
            <div className={styles.legalNav}>
              <Link href="/privacidade" className={styles.legalLink}>
                Privacidade
              </Link>
              <span className={styles.legalDot} aria-hidden="true">
                ·
              </span>
              <Link href="/cookies" className={styles.legalLink}>
                Cookies
              </Link>
              <span className={styles.legalDot} aria-hidden="true">
                ·
              </span>
              <span className={styles.creditText}>
                Desenhado por{" "}
                <a
                  href="https://enimble.pt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.creditLink}
                >
                  Enimble
                </a>
              </span>
            </div>
          </div>
          <div className={styles.socialRow}>
            {site.socials.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

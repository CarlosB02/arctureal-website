import React from "react";
import Link from "next/link";
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
            <span className={styles.brandTitle}>{site.brand.name}</span>
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
                <span className={styles.contactLabel}>Morada</span>
                <p className={styles.contactValue}>{site.contacts.address}</p>
              </div>

              <div className={styles.contactBlock}>
                <span className={styles.contactLabel}>Linha Direta</span>
                <a href={`tel:${site.contacts.phoneRaw}`} className={styles.contactLink}>
                  {site.contacts.phone}
                </a>
              </div>

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
          <p className={styles.legalText}>{site.footer.legal}</p>
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

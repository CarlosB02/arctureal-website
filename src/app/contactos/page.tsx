import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { getSiteConfig } from "@/lib/content";
import ContactForm from "./ContactForm";
import { BreadcrumbsJsonLd } from "@/components/JsonLd";
import styles from "./Contactos.module.css";

export const metadata: Metadata = {
  title: "Contactos — Atelier Central Lisboa | ARCTUREAL",
  description:
    "Entre em contacto com o grupo ARCTUREAL. Sede: Estrada da Luz, 96-A, 1600-161 Lisboa. Telefone: (+351) 211 450 244. Email: geral@arctureal.com.",
  alternates: {
    canonical: "/contactos",
  },
  openGraph: {
    title: "Contactos | ARCTUREAL",
    description:
      "Atelier Central da ARCTUREAL na Estrada da Luz, Lisboa. Marque uma reunião com as nossas equipas de arquitetura e engenharia.",
    url: "https://www.arctureal.com/contactos",
  },
};

export default function ContactosPage() {
  const site = getSiteConfig();

  const breadcrumbs = [
    { name: "Início", item: "https://www.arctureal.com" },
    { name: "Contactos", item: "https://www.arctureal.com/contactos" },
  ];

  return (
    <>
      <BreadcrumbsJsonLd items={breadcrumbs} />

      {/* Hero Section */}
      <section className={styles.hero} aria-labelledby="contactos-title">
        <div className={styles.heroBackground}>
          <Image
            src="/images/contactos-hero.jpg"
            alt="Atelier e sede institucional da Arctureal na Estrada da Luz, Lisboa"
            fill
            priority
            quality={90}
            sizes="100vw"
            className={styles.heroImage}
          />
        </div>

        <div className={styles.heroOverlay} />

        <div className="container" style={{ position: "relative", zIndex: 3, width: "100%" }}>
          <div className={`${styles.heroContent} animate-fade-in`}>
            <h1 id="contactos-title" className={styles.heroTitle}>
              Contacte a ARCTUREAL
            </h1>
            <p className={styles.heroLead}>
              Um projeto, uma parceria ou uma simples pergunta. Teremos todo o gosto em ouvi-lo.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className={styles.contactSection}>
        <div className={`container ${styles.contactContainer}`}>
          <div className={styles.contactLayout}>
            {/* Info Column */}
            <div className={styles.infoColumn}>
              <div className={styles.infoCard}>
                <div className={styles.infoList}>
                  <div>
                    <div className={styles.infoItemTitle}>Morada Institucional</div>
                    <div className={styles.infoItemValue}>{site.contacts.address}</div>
                    <div style={{ marginTop: "0.25rem" }}>
                      <a
                        href={site.contacts.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-architectural"
                        style={{ fontSize: "0.75rem" }}
                      >
                        Abrir no Google Maps &rarr;
                      </a>
                    </div>
                  </div>

                  <div>
                    <div className={styles.infoItemTitle}>Contacto Telefónico</div>
                    <div className={styles.infoItemValue}>
                      <a href={`tel:${site.contacts.phoneRaw}`} className={styles.infoItemLink}>
                        {site.contacts.phone}
                      </a>
                    </div>
                  </div>

                  <div>
                    <div className={styles.infoItemTitle}>Correio Eletrónico Geral</div>
                    <div className={styles.infoItemValue}>
                      <a href={`mailto:${site.contacts.email}`} className={styles.infoItemLink}>
                        {site.contacts.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className={styles.formCard}>
              <h2 className={styles.formTitle}>Envie-nos uma mensagem</h2>
              <p className={styles.formSubtitle}>
                Conte-nos o que tem em mente e entraremos em contacto consigo o mais breve possível.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

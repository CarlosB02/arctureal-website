import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { getSiteConfig } from "@/lib/content";
import ContactForm from "./ContactForm";
import { BreadcrumbsJsonLd } from "@/components/JsonLd";
import styles from "./Contactos.module.css";

export const metadata: Metadata = {
  title: "Contactos | ARCTUREAL",
  description:
    "Entre em contacto com o grupo ARCTUREAL em Lisboa. Email: geral@arctureal.pt.",
  alternates: {
    canonical: "/contactos",
  },
  openGraph: {
    title: "Contactos | ARCTUREAL",
    description:
      "Entre em contacto com a ARCTUREAL. Marque uma reunião com as nossas equipas através de geral@arctureal.pt.",
    url: "https://arctureal.pt/contactos",
  },
};

export default function ContactosPage() {
  const site = getSiteConfig();

  const breadcrumbs = [
    { name: "Início", item: "https://arctureal.pt" },
    { name: "Contactos", item: "https://arctureal.pt/contactos" },
  ];

  return (
    <>
      <BreadcrumbsJsonLd items={breadcrumbs} />

      {/* Hero Section */}
      <section className={styles.hero} aria-labelledby="contactos-title">
        <div className={styles.heroBackground}>
          <Image
            src="/images/contactos-hero.webp"
            alt="Atelier e sede institucional da Arctureal em Lisboa"
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
                    <div className={styles.infoItemTitle}>Correio Eletrónico Geral</div>
                    <div className={styles.infoItemValue}>
                      <a href={`mailto:${site.contacts.email}`} className={styles.infoItemLink}>
                        {site.contacts.email}
                      </a>
                    </div>
                  </div>

                  <div>
                    <div className={styles.infoItemTitle}>Localização</div>
                    <div className={styles.infoItemValue}>Lisboa, Portugal</div>
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
              <ContactForm recipientEmail={site.contacts.email} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

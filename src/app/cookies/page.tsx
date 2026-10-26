import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { getSiteConfig } from "@/lib/content";
import { BreadcrumbsJsonLd } from "@/components/JsonLd";
import styles from "../privacidade/Legal.module.css";

export const metadata: Metadata = {
  title: "Política de Cookies — ARCTUREAL",
  description:
    "Saiba como o Grupo ARCTUREAL utiliza cookies e tecnologias semelhantes para garantir o funcionamento seguro e eficiente do nosso website.",
  alternates: {
    canonical: "/cookies",
  },
  openGraph: {
    title: "Política de Cookies | ARCTUREAL",
    description:
      "Informações sobre a utilização, categorias e gestão de cookies na plataforma digital do Grupo Arctureal.",
    url: "https://arctureal.pt/cookies",
  },
};

const tocItems = [
  { id: "o-que-sao", number: "01", title: "O que são Cookies?" },
  { id: "finalidade", number: "02", title: "Como e Porquê os Utilizamos" },
  { id: "categorias", number: "03", title: "Categorias de Cookies" },
  { id: "tabela-cookies", number: "04", title: "Cookies Utilizados no Website" },
  { id: "terceiros", number: "05", title: "Serviços e Cookies de Terceiros" },
  { id: "gestao-browsers", number: "06", title: "Como Gerir ou Desativar Cookies" },
  { id: "duvidas", number: "07", title: "Dúvidas e Contactos" },
];

export default function CookiesPage() {
  const site = getSiteConfig();

  const breadcrumbs = [
    { name: "Início", item: "https://arctureal.pt" },
    { name: "Política de Cookies", item: "https://arctureal.pt/cookies" },
  ];

  return (
    <>
      <BreadcrumbsJsonLd items={breadcrumbs} />

      {/* Hero Section */}
      <section className={styles.hero} aria-labelledby="cookies-hero-title">
        <div className={styles.heroAmbient} />
        <div className={styles.heroGridPattern} />

        <div className="container" style={{ position: "relative", zIndex: 3, width: "100%" }}>
          <div className={`${styles.heroContent} animate-fade-in`}>
            <div className={styles.heroEyebrow}>
              <span className={styles.heroEyebrowLine} />
              <span>Transparência Digital</span>
            </div>

            <h1 id="cookies-hero-title" className={styles.heroTitle}>
              Política de Cookies
            </h1>

            <p className={styles.heroSubtitle}>
              Explicamos com total clareza e detalhe de que modo a ARCTUREAL utiliza cookies e tecnologias análogas para proporcionar uma experiência de navegação segura, eficiente e personalizada.
            </p>

            {/* Alternador de abas */}
            <div className={styles.tabsContainer} role="tablist" aria-label="Documentos legais">
              <Link
                href="/privacidade"
                className={styles.tabLink}
                role="tab"
                aria-selected="false"
              >
                Política de Privacidade
              </Link>
              <Link
                href="/cookies"
                className={`${styles.tabLink} ${styles.tabLinkActive}`}
                role="tab"
                aria-selected="true"
              >
                Política de Cookies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className={styles.mainSection}>
        <div className={`container ${styles.legalGrid}`}>
          {/* Sidebar / Table of Contents */}
          <aside className={styles.sidebar} aria-label="Índice da página">
            <div className={styles.sidebarCard}>
              <h2 className={styles.sidebarTitle}>Navegação Rápida</h2>
              <ul className={styles.tocList}>
                {tocItems.map((item) => (
                  <li key={item.id}>
                    <a href={`#${item.id}`} className={styles.tocItem}>
                      <span className={styles.tocNumber}>{item.number}.</span>
                      <span>{item.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.sidebarMeta}>
              <span className={styles.metaLabel}>Última Revisão</span>
              <span className={styles.metaValue}>Outubro de 2026</span>
              <div style={{ marginTop: "0.75rem" }}>
                <span className={styles.metaLabel}>Diretiva</span>
                <span className={styles.metaValue}>ePrivacy &amp; RGPD (UE)</span>
              </div>
            </div>
          </aside>

          {/* Content Column */}
          <article className={styles.contentColumn}>
            <div className={styles.metaBadge}>
              <span className={styles.metaBadgeDot} />
              <span>Em conformidade com a Diretiva ePrivacy da UE e a Lei n.º 41/2004</span>
            </div>

            {/* 01. O que são Cookies? */}
            <section id="o-que-sao" className={styles.legalSection}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionNumber}>01</span>
                <h2 className={styles.sectionTitle}>O que são Cookies?</h2>
              </div>
              <p className={styles.paragraph}>
                Os cookies são pequenos ficheiros de texto contendo identificadores alfanuméricos que são descarregados e armazenados no seu computador, smartphone ou outro dispositivo de acesso à internet quando visita determinadas páginas web.
              </p>
              <p className={styles.paragraph}>
                Estes ficheiros permitem que o website reconheça o seu dispositivo em visitas futuras, memorize as suas preferências de navegação (como idioma ou definições de ecrã) e contribua para uma experiência mais fluida, rápida e segura.
              </p>
            </section>

            {/* 02. Como e Porquê os Utilizamos */}
            <section id="finalidade" className={styles.legalSection}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionNumber}>02</span>
                <h2 className={styles.sectionTitle}>Como e Porquê os Utilizamos</h2>
              </div>
              <p className={styles.paragraph}>
                A ARCTUREAL adota uma política de sobriedade e respeito estrito pela privacidade digital. Utilizamos apenas os cookies estritamente necessários ao funcionamento correto da plataforma e dados agregados e anonimizados de desempenho técnico, com as seguintes finalidades:
              </p>
              <ul className={styles.bulletList}>
                <li className={styles.bulletItem}>
                  <strong>Garantir a Estabilidade Operacional:</strong> Manter a integridade de sessões seguras e o correto carregamento de elementos arquitetónicos e de media.
                </li>
                <li className={styles.bulletItem}>
                  <strong>Segurança e Prevenção de Fraude:</strong> Proteger os formulários de contacto e recrutamento contra submissões maliciosas automatizadas (CSRF e bots).
                </li>
                <li className={styles.bulletItem}>
                  <strong>Otimização de Desempenho:</strong> Analisar metricas agregadas de tráfego sem identificação pessoal, assegurando carregamentos rápidos e elevada disponibilidade.
                </li>
              </ul>
            </section>

            {/* 03. Categorias de Cookies */}
            <section id="categorias" className={styles.legalSection}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionNumber}>03</span>
                <h2 className={styles.sectionTitle}>Categorias de Cookies</h2>
              </div>
              <p className={styles.paragraph}>
                Os cookies utilizados no nosso website distribuem-se pelas seguintes categorias:
              </p>

              <div className={styles.cardGrid}>
                <div className={styles.infoCard}>
                  <div className={styles.tagBadge}>Essenciais</div>
                  <h3 className={styles.infoCardTitle}>Cookies Técnicos</h3>
                  <p className={styles.infoCardText}>
                    Indispensáveis para a navegação no website e fruição das suas funcionalidades básicas. Não podem ser desativados nos nossos sistemas.
                  </p>
                </div>

                <div className={styles.infoCard}>
                  <div className={styles.tagBadge}>Analíticos</div>
                  <h3 className={styles.infoCardTitle}>Desempenho Anónimo</h3>
                  <p className={styles.infoCardText}>
                    Permitem compreender como os visitantes interagem com o website, calculando tempos de resposta e volumes de tráfego de forma totalmente agregada.
                  </p>
                </div>

                <div className={styles.infoCard}>
                  <div className={styles.tagBadge}>Preferências</div>
                  <h3 className={styles.infoCardTitle}>Funcionalidades</h3>
                  <p className={styles.infoCardText}>
                    Guardam definições temporárias de interface para garantir consistência visual ao longo da sessão do utilizador.
                  </p>
                </div>
              </div>
            </section>

            {/* 04. Tabela de Cookies */}
            <section id="tabela-cookies" className={styles.legalSection}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionNumber}>04</span>
                <h2 className={styles.sectionTitle}>Cookies Utilizados no Website</h2>
              </div>
              <p className={styles.paragraph}>
                A tabela seguinte discrimina os principais cookies e identificadores técnicos empregues nesta plataforma:
              </p>

              <div className={styles.tableWrapper}>
                <table className={styles.cookieTable}>
                  <thead>
                    <tr>
                      <th>Designação</th>
                      <th>Tipo</th>
                      <th>Finalidade</th>
                      <th>Duração</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <span className={styles.cookieCode}>__next_*</span>
                      </td>
                      <td>
                        <span className={styles.tagBadge}>Essencial</span>
                      </td>
                      <td>
                        Roteamento dinâmico de páginas, renderização rápida e pré-carregamento de componentes da aplicação Next.js.
                      </td>
                      <td>Sessão</td>
                    </tr>
                    <tr>
                      <td>
                        <span className={styles.cookieCode}>csrf_token</span>
                      </td>
                      <td>
                        <span className={styles.tagBadge}>Segurança</span>
                      </td>
                      <td>
                        Validação de pedidos nos formulários de contacto e de vagas, evitando ataques de Cross-Site Request Forgery.
                      </td>
                      <td>Sessão</td>
                    </tr>
                    <tr>
                      <td>
                        <span className={styles.cookieCode}>arc_cookie_consent</span>
                      </td>
                      <td>
                        <span className={styles.tagBadge}>Preferência</span>
                      </td>
                      <td>
                        Registo do estado de preferência relativamente ao aviso informativo de cookies da plataforma.
                      </td>
                      <td>12 meses</td>
                    </tr>
                    <tr>
                      <td>
                        <span className={styles.cookieCode}>_cfuvid / cdn_*</span>
                      </td>
                      <td>
                        <span className={styles.tagBadge}>Desempenho</span>
                      </td>
                      <td>
                        Otimização de entrega de imagens através de rede de distribuição de conteúdos (CDN) e balanceamento de carga.
                      </td>
                      <td>Sessão / 30 dias</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 05. Serviços e Cookies de Terceiros */}
            <section id="terceiros" className={styles.legalSection}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionNumber}>05</span>
                <h2 className={styles.sectionTitle}>Serviços e Cookies de Terceiros</h2>
              </div>
              <p className={styles.paragraph}>
                Alguns recursos externos integrados ou ligados a partir do nosso website (tais como ligações para as redes sociais como o LinkedIn ou ligações de localização geográfica) são fornecidos por entidades terceiras independentes.
              </p>
              <p className={styles.paragraph}>
                A ARCTUREAL não controla a recolha de cookies efetuada por essas entidades ao clicar nessas hiperligações externas. Recomendamos que consulte as respetivas políticas de privacidade e cookies dessas plataformas ao aceder aos seus serviços.
              </p>
            </section>

            {/* 06. Como Gerir ou Desativar Cookies */}
            <section id="gestao-browsers" className={styles.legalSection}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionNumber}>06</span>
                <h2 className={styles.sectionTitle}>Como Gerir ou Desativar Cookies</h2>
              </div>
              <p className={styles.paragraph}>
                O utilizador pode, a qualquer instante, configurar o seu navegador de internet para aceitar, recusar ou apagar cookies previamente instalados. Note que a desativação de cookies essenciais poderá impedir o carregamento integral ou o correto funcionamento de algumas secções do website.
              </p>
              <p className={styles.paragraph}>
                Consulte as instruções específicas disponibilizadas pelo fabricante do seu navegador:
              </p>

              <div className={styles.cardGrid}>
                <div className={styles.infoCard}>
                  <h3 className={styles.infoCardTitle}>Google Chrome</h3>
                  <p className={styles.infoCardText}>
                    Definições &gt; Privacidade e Segurança &gt; Cookies e outros dados do site.
                  </p>
                  <a
                    href="https://support.google.com/chrome/answer/95647"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.browserLink}
                  >
                    Guia oficial do Chrome &rarr;
                  </a>
                </div>

                <div className={styles.infoCard}>
                  <h3 className={styles.infoCardTitle}>Apple Safari</h3>
                  <p className={styles.infoCardText}>
                    Preferências &gt; Privacidade &gt; Gerir dados de websites ou Bloquear todos os cookies.
                  </p>
                  <a
                    href="https://support.apple.com/pt-pt/guide/safari/sfri11471/mac"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.browserLink}
                  >
                    Guia oficial do Safari &rarr;
                  </a>
                </div>

                <div className={styles.infoCard}>
                  <h3 className={styles.infoCardTitle}>Mozilla Firefox</h3>
                  <p className={styles.infoCardText}>
                    Opções &gt; Privacidade e Segurança &gt; Cookies e Dados de Sites.
                  </p>
                  <a
                    href="https://support.mozilla.org/pt-PT/kb/cookies-informacao-websites-guardam-no-computador"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.browserLink}
                  >
                    Guia oficial do Firefox &rarr;
                  </a>
                </div>

                <div className={styles.infoCard}>
                  <h3 className={styles.infoCardTitle}>Microsoft Edge</h3>
                  <p className={styles.infoCardText}>
                    Definições &gt; Cookies e permissões do site &gt; Gerir e eliminar cookies e dados do site.
                  </p>
                  <a
                    href="https://support.microsoft.com/pt-pt/microsoft-edge/eliminar-cookies-no-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.browserLink}
                  >
                    Guia oficial do Edge &rarr;
                  </a>
                </div>
              </div>
            </section>

            {/* 07. Dúvidas e Contactos */}
            <section id="duvidas" className={styles.legalSection}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionNumber}>07</span>
                <h2 className={styles.sectionTitle}>Dúvidas e Contactos</h2>
              </div>
              <p className={styles.paragraph}>
                Caso subsista qualquer questão sobre como utilizamos cookies ou caso pretenda informações adicionais sobre o tratamento dos seus dados, entre em contacto connosco:
              </p>

              <div className={styles.callout}>
                <h3 className={styles.calloutTitle}>ARCTUREAL</h3>
                <p className={styles.calloutText}>
                  Email:{" "}
                  <a href={`mailto:${site.contacts.email}`}>{site.contacts.email}</a>
                  <br />
                  Sede: Estrada da Luz, 96-A, 1600-161 Lisboa, Portugal
                  <br />
                  Consulte também a nossa{" "}
                  <Link href="/privacidade" style={{ color: "var(--color-primary)", fontWeight: 600 }}>
                    Política de Privacidade
                  </Link>
                  .
                </p>
              </div>
            </section>
          </article>
        </div>
      </section>
    </>
  );
}

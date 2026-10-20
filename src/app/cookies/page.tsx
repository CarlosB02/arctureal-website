import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getSiteConfig } from "@/lib/content";
import { BreadcrumbsJsonLd } from "@/components/JsonLd";
import CookieManagerCard from "./CookieManagerCard";
import styles from "./Cookies.module.css";

export const metadata: Metadata = {
  title: "Política de Cookies — ARCTUREAL",
  description:
    "Política de Cookies da ARCTUREAL. Conheça as tecnologias utilizadas, as finalidades de cada cookie e saiba como gerir as suas preferências a qualquer momento.",
  alternates: {
    canonical: "/cookies",
  },
  openGraph: {
    title: "Política de Cookies | ARCTUREAL",
    description:
      "Transparência e controlo: saiba como utilizamos cookies essenciais e analíticos na plataforma da ARCTUREAL.",
    url: "https://www.arctureal.com/cookies",
  },
};

export default function CookiesPage() {
  const site = getSiteConfig();

  const breadcrumbs = [
    { name: "Início", item: "https://www.arctureal.com" },
    { name: "Política de Cookies", item: "https://www.arctureal.com/cookies" },
  ];

  return (
    <>
      <BreadcrumbsJsonLd items={breadcrumbs} />

      {/* Hero Institucional */}
      <section className={styles.hero} aria-labelledby="cookies-title">
        <div className={styles.heroBackground}>
          <Image
            src="/images/contactos-hero.webp"
            alt="Atelier e espaço de arquitetura do Grupo Arctureal"
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
            <span className={styles.heroEyebrow}>Transparência & Gestão Digital</span>
            <h1 id="cookies-title" className={styles.heroTitle}>
              Política de Cookies
            </h1>
            <p className={styles.heroLead}>
              Privilegiamos uma abordagem minimalista e respeitadora da sua privacidade. Conheça as tecnologias que utilizamos para assegurar a navegabilidade e desempenho da plataforma.
            </p>
            <div className={styles.heroMeta}>
              <div className={styles.heroMetaItem}>
                <span className={styles.heroMetaIcon}>●</span>
                <span>Última revisão: Março de 2026</span>
              </div>
              <div className={styles.heroMetaItem}>
                <span className={styles.heroMetaIcon}>●</span>
                <span>Diretiva e-Privacy & RGPD</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Section */}
      <section className={styles.mainSection}>
        <div className={`container ${styles.layoutGrid}`}>
          {/* Navegação Rápida Lateral */}
          <aside className={styles.sidebar} aria-label="Índice da Política de Cookies">
            <div className={styles.indexCard}>
              <div className={styles.indexTitle}>
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
                  <line x1="8" y1="6" x2="21" y2="6" />
                  <line x1="8" y1="12" x2="21" y2="12" />
                  <line x1="8" y1="18" x2="21" y2="18" />
                  <line x1="3" y1="6" x2="3.01" y2="6" />
                  <line x1="3" y1="12" x2="3.01" y2="12" />
                  <line x1="3" y1="18" x2="3.01" y2="18" />
                </svg>
                Índice de Secções
              </div>
              <ul className={styles.indexList}>
                <li>
                  <a href="#gestao" className={styles.indexLink}>
                    <span className={styles.indexLinkNumber}>01.</span> Painel de Preferências
                  </a>
                </li>
                <li>
                  <a href="#o-que-sao" className={styles.indexLink}>
                    <span className={styles.indexLinkNumber}>02.</span> O Que São Cookies
                  </a>
                </li>
                <li>
                  <a href="#categorias" className={styles.indexLink}>
                    <span className={styles.indexLinkNumber}>03.</span> Categorias Utilizadas
                  </a>
                </li>
                <li>
                  <a href="#tabela" className={styles.indexLink}>
                    <span className={styles.indexLinkNumber}>04.</span> Relação de Cookies
                  </a>
                </li>
                <li>
                  <a href="#navegadores" className={styles.indexLink}>
                    <span className={styles.indexLinkNumber}>05.</span> Gestão no Navegador
                  </a>
                </li>
                <li>
                  <a href="#atualizacoes" className={styles.indexLink}>
                    <span className={styles.indexLinkNumber}>06.</span> Atualizações & Contacto
                  </a>
                </li>
              </ul>
            </div>

            <div className={styles.supportCard}>
              <span className={styles.supportTitle}>Dúvidas sobre Cookies?</span>
              <p className={styles.supportText}>
                Estamos disponíveis para responder a qualquer questão sobre a nossa gestão de dados e privacidade:
              </p>
              <a href={`mailto:${site.contacts.email}`} className={styles.supportEmail}>
                {site.contacts.email}
              </a>
            </div>
          </aside>

          {/* Conteúdo Principal */}
          <article className={styles.contentArea}>
            {/* 01. Painel de Gestão Direto */}
            <section id="gestao" className={styles.legalSection}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionNumber}>01</span>
                <h2 className={styles.sectionTitle}>Gestão Imediata das Suas Preferências</h2>
              </div>
              <p className={styles.paragraph}>
                Na Arctureal, o controlo sobre a sua experiência digital pertence-lhe por inteiro. Utilize o painel interativo abaixo para verificar o estado atual do seu consentimento ou para abrir a janela de personalização de cookies:
              </p>

              {/* Interactive Card */}
              <CookieManagerCard />
            </section>

            {/* 02. O Que São Cookies */}
            <section id="o-que-sao" className={styles.legalSection}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionNumber}>02</span>
                <h2 className={styles.sectionTitle}>O Que São Cookies e Tecnologias Conexas?</h2>
              </div>
              <p className={styles.paragraph}>
                Os <em>cookies</em> são pequenos ficheiros de texto contendo identificadores pontuais que são descarregados para o seu computador, dispositivo móvel ou tablet através do navegador de internet (browser) quando visita determinadas páginas web.
              </p>
              <p className={styles.paragraph}>
                Estas tecnologias permitem que a plataforma reconheça o seu dispositivo em visitas subsequentes, mantenha as suas preferências de visualização (como a seleção de não apresentação reiterada de avisos) e garanta a integridade operacional dos serviços.
              </p>
              <p className={styles.paragraphMuted}>
                A Arctureal não utiliza quaisquer cookies com a finalidade de construir perfis comerciais invasivos, nem procede ao rastreio de hábitos de consumo em sítios de terceiros para colocação de publicidade comportamental.
              </p>
            </section>

            {/* 03. Categorias Utilizadas */}
            <section id="categorias" className={styles.legalSection}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionNumber}>03</span>
                <h2 className={styles.sectionTitle}>Categorias de Cookies Utilizadas no Nosso Website</h2>
              </div>
              <p className={styles.paragraph}>
                De acordo com a sua finalidade funcional e com a legislação aplicável (Diretiva 2002/58/CE e Lei n.º 41/2004 com as alterações da Lei n.º 46/2012), agrupamos as tecnologias do nosso website em duas categorias distintas:
              </p>

              <ul className={styles.bulletList}>
                <li className={styles.bulletItem}>
                  <strong className={styles.bulletStrong}>1. Cookies Estritamente Necessários (Técnicos):</strong> São imprescindíveis para o funcionamento do website e para permitir que navegue pelas páginas, aceda a áreas seguras e memorize a sua aceitação ou recusa das preferências de privacidade. Por serem tecnicamente indispensáveis à prestação do serviço por si solicitado, estes cookies não requerem o seu consentimento prévio e estão permanentemente ativos.
                </li>
                <li className={styles.bulletItem}>
                  <strong className={styles.bulletStrong}>2. Cookies de Desempenho e Métricas (Analytics):</strong> Permitem-nos compreender, de modo puramente estatístico e anónimo, como os visitantes interagem com as diferentes páginas e projetos da Arctureal (por exemplo, contagem agregada de visitas, páginas mais consultadas e taxas de erro). Estes cookies <strong>apenas são depositados caso manifeste o seu consentimento explícito</strong> através do nosso banner ou painel de preferências, operando em conformidade com o Google Consent Mode v2 com mascaramento do endereço IP.
                </li>
              </ul>
            </section>

            {/* 04. Tabela de Cookies */}
            <section id="tabela" className={styles.legalSection}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionNumber}>04</span>
                <h2 className={styles.sectionTitle}>Relação Detalhada de Cookies</h2>
              </div>
              <p className={styles.paragraph}>
                Apresentamos de forma integral e transparente o inventário de cookies e armazenamento local que podem ser acionados durante a sua visita a <strong>arctureal.com</strong>:
              </p>

              <div className={styles.tableContainer}>
                <table className={styles.cookieTable}>
                  <thead className={styles.tableHeader}>
                    <tr>
                      <th className={styles.tableTh}>Identificador</th>
                      <th className={styles.tableTh}>Origem</th>
                      <th className={styles.tableTh}>Finalidade</th>
                      <th className={styles.tableTh}>Duração</th>
                      <th className={styles.tableTh}>Categoria</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className={styles.tableTd}>
                        <code className={styles.tableTdCode}>arctureal_cookie_consent_v1</code>
                      </td>
                      <td className={styles.tableTd}>Próprio (Arctureal)</td>
                      <td className={styles.tableTd}>
                        Armazena a escolha de consentimento formulada pelo visitante (aceitação ou recusa das categorias de cookies).
                      </td>
                      <td className={styles.tableTd}>365 dias</td>
                      <td className={styles.tableTd}>
                        <span className={`${styles.tableCategoryPill} ${styles.catEssential}`}>
                          Necessário
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className={styles.tableTd}>
                        <code className={styles.tableTdCode}>_ga</code>
                      </td>
                      <td className={styles.tableTd}>Google Analytics</td>
                      <td className={styles.tableTd}>
                        Utilizado para distinguir utilizadores de forma anonimizada e recolher métricas agregadas de audiência.
                      </td>
                      <td className={styles.tableTd}>Até 2 anos</td>
                      <td className={styles.tableTd}>
                        <span className={`${styles.tableCategoryPill} ${styles.catAnalytics}`}>
                          Métricas (Opcional)
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className={styles.tableTd}>
                        <code className={styles.tableTdCode}>_ga_*</code>
                      </td>
                      <td className={styles.tableTd}>Google Analytics</td>
                      <td className={styles.tableTd}>
                        Mantém o estado da sessão de visita para fins de análise agregada de fluxo entre páginas.
                      </td>
                      <td className={styles.tableTd}>Até 2 anos</td>
                      <td className={styles.tableTd}>
                        <span className={`${styles.tableCategoryPill} ${styles.catAnalytics}`}>
                          Métricas (Opcional)
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className={styles.paragraphMuted}>
                Nota: O nosso sistema valida rigorosamente a preferência do utilizador antes de autorizar o envio de qualquer informação ao serviço analítico. Na ausência de consentimento prévio, o armazenamento analítico permanece desativado.
              </p>
            </section>

            {/* 05. Gestão no Navegador */}
            <section id="navegadores" className={styles.legalSection}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionNumber}>05</span>
                <h2 className={styles.sectionTitle}>Como Desativar ou Limpar Cookies no Seu Navegador</h2>
              </div>
              <p className={styles.paragraph}>
                Além das opções disponíveis no nosso painel de consentimento, qualquer utilizador pode configurar, bloquear ou eliminar os cookies instalados no seu computador através da parametrização das opções do seu navegador de internet:
              </p>

              <div className={styles.browserGrid}>
                <div className={styles.browserCard}>
                  <span className={styles.browserTitle}>Google Chrome</span>
                  <p className={styles.browserInstructions}>
                    Aceda a Definições &rarr; Privacidade e Segurança &rarr; Cookies de terceiros e dados de sites.
                  </p>
                  <a
                    href="https://support.google.com/chrome/answer/95647"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.browserLink}
                  >
                    Guia Oficial &rarr;
                  </a>
                </div>

                <div className={styles.browserCard}>
                  <span className={styles.browserTitle}>Apple Safari</span>
                  <p className={styles.browserInstructions}>
                    Aceda a Preferências &rarr; Privacidade &rarr; Gerir Dados de Sites / Bloquear todos os cookies.
                  </p>
                  <a
                    href="https://support.apple.com/pt-pt/guide/safari/sfri11471/mac"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.browserLink}
                  >
                    Guia Oficial &rarr;
                  </a>
                </div>

                <div className={styles.browserCard}>
                  <span className={styles.browserTitle}>Mozilla Firefox</span>
                  <p className={styles.browserInstructions}>
                    Aceda a Opções &rarr; Privacidade e Segurança &rarr; Cookies e Dados de Sites.
                  </p>
                  <a
                    href="https://support.mozilla.org/pt-PT/kb/protecao-contra-rastreio-melhorada-no-firefox"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.browserLink}
                  >
                    Guia Oficial &rarr;
                  </a>
                </div>

                <div className={styles.browserCard}>
                  <span className={styles.browserTitle}>Microsoft Edge</span>
                  <p className={styles.browserInstructions}>
                    Aceda a Definições &rarr; Permissões de sites &rarr; Cookies e dados armazenados.
                  </p>
                  <a
                    href="https://support.microsoft.com/pt-pt/microsoft-edge/eliminar-cookies-no-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.browserLink}
                  >
                    Guia Oficial &rarr;
                  </a>
                </div>
              </div>

              <p className={styles.paragraphMuted} style={{ marginTop: "1rem" }}>
                Tenha em consideração que a desativação integral de cookies técnicos nas opções do navegador pode degradar funcionalidades basilares ou impedir a gravação das suas escolhas nesta plataforma.
              </p>
            </section>

            {/* 06. Atualizações & Contacto */}
            <section id="atualizacoes" className={styles.legalSection}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionNumber}>06</span>
                <h2 className={styles.sectionTitle}>Atualizações e Contactos</h2>
              </div>
              <p className={styles.paragraph}>
                Esta Política de Cookies pode ser revista ocasionalmente para acomodar novos requisitos regulamentares ou alterações funcionais na plataforma. Todas as revisões serão prontamente refletidas nesta página.
              </p>
              <p className={styles.paragraphMuted}>
                Para qualquer esclarecimento sobre a utilização de cookies ou tratamento dos seus dados, entre em contacto connosco através de <strong>{site.contacts.email}</strong>.
              </p>

              {/* Banner de Ligação à Política de Privacidade */}
              <div className={styles.crossLinkBanner}>
                <div className={styles.crossLinkInfo}>
                  <h3 className={styles.crossLinkTitle}>Consulte a nossa Política de Privacidade</h3>
                  <p className={styles.crossLinkText}>
                    Saiba como o Grupo Arctureal salvaguarda os seus dados pessoais, os direitos garantidos pelo RGPD e as medidas de segurança adotadas.
                  </p>
                </div>
                <Link href="/privacidade" className={styles.crossLinkBtn}>
                  Ver Política de Privacidade &rarr;
                </Link>
              </div>
            </section>
          </article>
        </div>
      </section>
    </>
  );
}

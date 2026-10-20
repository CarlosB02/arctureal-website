import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getSiteConfig } from "@/lib/content";
import { BreadcrumbsJsonLd } from "@/components/JsonLd";
import styles from "./Privacidade.module.css";

export const metadata: Metadata = {
  title: "Política de Privacidade — ARCTUREAL",
  description:
    "Política de Privacidade e Proteção de Dados Pessoais do Grupo ARCTUREAL. Saiba como recolhemos, tratamos e protegemos os seus dados ao abrigo do RGPD.",
  alternates: {
    canonical: "/privacidade",
  },
  openGraph: {
    title: "Política de Privacidade | ARCTUREAL",
    description:
      "Compromisso de transparência, integridade e confidencialidade no tratamento de dados pessoais do Grupo ARCTUREAL.",
    url: "https://www.arctureal.com/privacidade",
  },
};

export default function PrivacidadePage() {
  const site = getSiteConfig();

  const breadcrumbs = [
    { name: "Início", item: "https://www.arctureal.com" },
    { name: "Política de Privacidade", item: "https://www.arctureal.com/privacidade" },
  ];

  return (
    <>
      <BreadcrumbsJsonLd items={breadcrumbs} />

      {/* Hero Institucional */}
      <section className={styles.hero} aria-labelledby="privacidade-title">
        <div className={styles.heroBackground}>
          <Image
            src="/images/hero-architecture.webp"
            alt="Atelier e estrutura empresarial da Arctureal"
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
            <span className={styles.heroEyebrow}>Rigor & Transparência Institucional</span>
            <h1 id="privacidade-title" className={styles.heroTitle}>
              Política de Privacidade
            </h1>
            <p className={styles.heroLead}>
              A salvaguarda da confidencialidade, integridade e segurança dos dados pessoais é um compromisso basilar em todas as operações e serviços do Grupo ARCTUREAL.
            </p>
            <div className={styles.heroMeta}>
              <div className={styles.heroMetaItem}>
                <span className={styles.heroMetaIcon}>●</span>
                <span>Última revisão: Março de 2026</span>
              </div>
              <div className={styles.heroMetaItem}>
                <span className={styles.heroMetaIcon}>●</span>
                <span>Regulamento (UE) 2016/679 (RGPD)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Section */}
      <section className={styles.mainSection}>
        <div className={`container ${styles.layoutGrid}`}>
          {/* Navegação Rápida Lateral */}
          <aside className={styles.sidebar} aria-label="Índice da Política de Privacidade">
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
                  <a href="#responsavel" className={styles.indexLink}>
                    <span className={styles.indexLinkNumber}>01.</span> Responsável pelo Tratamento
                  </a>
                </li>
                <li>
                  <a href="#dados-recolhidos" className={styles.indexLink}>
                    <span className={styles.indexLinkNumber}>02.</span> Dados Recolhidos
                  </a>
                </li>
                <li>
                  <a href="#finalidades" className={styles.indexLink}>
                    <span className={styles.indexLinkNumber}>03.</span> Finalidades & Fundamentos
                  </a>
                </li>
                <li>
                  <a href="#conservacao" className={styles.indexLink}>
                    <span className={styles.indexLinkNumber}>04.</span> Prazo de Conservação
                  </a>
                </li>
                <li>
                  <a href="#partilha" className={styles.indexLink}>
                    <span className={styles.indexLinkNumber}>05.</span> Partilha de Dados
                  </a>
                </li>
                <li>
                  <a href="#direitos" className={styles.indexLink}>
                    <span className={styles.indexLinkNumber}>06.</span> Direitos dos Titulares
                  </a>
                </li>
                <li>
                  <a href="#seguranca" className={styles.indexLink}>
                    <span className={styles.indexLinkNumber}>07.</span> Segurança da Informação
                  </a>
                </li>
                <li>
                  <a href="#alteracoes" className={styles.indexLink}>
                    <span className={styles.indexLinkNumber}>08.</span> Atualizações & Contacto
                  </a>
                </li>
              </ul>
            </div>

            <div className={styles.supportCard}>
              <span className={styles.supportTitle}>Dúvidas sobre Privacidade?</span>
              <p className={styles.supportText}>
                O nosso canal de proteção de dados está ao seu dispor para esclarecimentos e exercício de direitos:
              </p>
              <a href={`mailto:${site.contacts.email}`} className={styles.supportEmail}>
                {site.contacts.email}
              </a>
            </div>
          </aside>

          {/* Conteúdo Principal */}
          <article className={styles.contentArea}>
            {/* 01. Responsável pelo Tratamento */}
            <section id="responsavel" className={styles.legalSection}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionNumber}>01</span>
                <h2 className={styles.sectionTitle}>Identificação do Responsável pelo Tratamento</h2>
              </div>
              <p className={styles.paragraph}>
                O presente documento rege o tratamento de dados pessoais no âmbito da utilização da plataforma digital <strong>ARCTUREAL</strong> e da interação institucional com as sociedades e marcas que compõem o ecossistema empresarial do Grupo Arctureal.
              </p>
              <div className={styles.highlightBox}>
                <div className={styles.highlightRow}>
                  <span className={styles.highlightLabel}>Entidade:</span>
                  <span className={styles.highlightValue}>ARCTUREAL — Sociedade Gestora de Arquitetura, Lda.</span>
                </div>
                <div className={styles.highlightRow}>
                  <span className={styles.highlightLabel}>Sede:</span>
                  <span className={styles.highlightValue}>{site.contacts.address}</span>
                </div>
                <div className={styles.highlightRow}>
                  <span className={styles.highlightLabel}>Contacto Oficial:</span>
                  <span className={styles.highlightValue}>
                    <a href={`mailto:${site.contacts.email}`} className={styles.supportEmail}>
                      {site.contacts.email}
                    </a>
                  </span>
                </div>
                <div className={styles.highlightRow}>
                  <span className={styles.highlightLabel}>Telefone:</span>
                  <span className={styles.highlightValue}>{site.contacts.phone}</span>
                </div>
              </div>
              <p className={styles.paragraphMuted}>
                A Arctureal atua em plena conformidade com as disposições do Regulamento (UE) 2016/679 do Parlamento Europeu e do Conselho, de 27 de abril de 2016 (RGPD), com a Lei n.º 58/2019, de 8 de agosto, e demais legislação conexa em vigor na República Portuguesa.
              </p>
            </section>

            {/* 02. Dados Recolhidos */}
            <section id="dados-recolhidos" className={styles.legalSection}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionNumber}>02</span>
                <h2 className={styles.sectionTitle}>Que Dados Recolhemos e Origem</h2>
              </div>
              <p className={styles.paragraph}>
                Tratamos apenas os dados estritamente necessários para satisfazer finalidades legítimas e transparentes. Os dados pessoais podem ser recolhidos através das seguintes vias:
              </p>
              <ul className={styles.bulletList}>
                <li className={styles.bulletItem}>
                  <strong className={styles.bulletStrong}>Formulários de Contacto e Correspondência Direta:</strong> Nome completo, endereço de correio eletrónico, número de telefone, assunto e o conteúdo da mensagem por si redigida com vista a estabelecer contacto comercial ou institucional.
                </li>
                <li className={styles.bulletItem}>
                  <strong className={styles.bulletStrong}>Recrutamento e Candidaturas (Secção de Vagas):</strong> Nome, email, telefone, currículo vitae (CV), portfólio profissional, formação académica, percurso profissional e quaisquer elementos complementares facultados voluntariamente na candidatura.
                </li>
                <li className={styles.bulletItem}>
                  <strong className={styles.bulletStrong}>Navegação e Métricas Técnicas:</strong> Dados estritamente técnicos gerados durante a navegação (endereço IP anonimizado, tipo de navegador, sistema operativo, resolução de ecrã e páginas visitadas), recolhidos de forma agregada para garantir a estabilidade do sítio e, quando consentido, métricas de desempenho.
                </li>
              </ul>
              <p className={styles.paragraphMuted}>
                A Arctureal não recolhe conscientemente dados relativos a categorias especiais (dados sensíveis de saúde, convicções religiosas, filiação política ou dados genéticos) através dos canais digitais do website.
              </p>
            </section>

            {/* 03. Finalidades & Fundamentos */}
            <section id="finalidades" className={styles.legalSection}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionNumber}>03</span>
                <h2 className={styles.sectionTitle}>Finalidades e Fundamentos Jurídicos</h2>
              </div>
              <p className={styles.paragraph}>
                Todo o tratamento de dados pessoais realizado pela Arctureal assenta em fundamentos legais expressos no Artigo 6.º do RGPD:
              </p>
              <ul className={styles.bulletList}>
                <li className={styles.bulletItem}>
                  <strong className={styles.bulletStrong}>Gestão de Contactos e Parcerias:</strong> Tratamento baseado no <em>interesse legítimo</em> da Arctureal em responder aos pedidos de esclarecimento, orçamentação ou reuniões submetidos por clientes, fornecedores e parceiros, bem como nas <em>diligências pré-contratuais</em> a pedido do titular.
                </li>
                <li className={styles.bulletItem}>
                  <strong className={styles.bulletStrong}>Seleção e Recrutamento:</strong> Tratamento fundamentado na execução de <em>diligências pré-contratuais</em> e no <em>consentimento</em> prestado pelo candidato ao submeter a sua candidatura a posições abertas ou espontâneas.
                </li>
                <li className={styles.bulletItem}>
                  <strong className={styles.bulletStrong}>Segurança e Prevenção de Abusos:</strong> Tratamento necessário para o <em>interesse legítimo</em> de assegurar a integridade dos servidores, prevenir fraudes, mitigar ataques cibernéticos e gerir a autenticidade das comunicações.
                </li>
                <li className={styles.bulletItem}>
                  <strong className={styles.bulletStrong}>Métricas Analíticas do Website:</strong> Baseado no <em>consentimento explícito</em> concedido pelo utilizador através do banner de preferências de cookies.
                </li>
              </ul>
            </section>

            {/* 04. Conservação */}
            <section id="conservacao" className={styles.legalSection}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionNumber}>04</span>
                <h2 className={styles.sectionTitle}>Prazos de Conservação dos Dados</h2>
              </div>
              <p className={styles.paragraph}>
                Os dados pessoais são conservados exclusivamente durante o período estritamente necessário à prossecução das finalidades que motivaram a sua recolha, ou até ao exercício válido do direito de oposição ou eliminação, ressalvadas as obrigações legais de conservação de documentos:
              </p>
              <ul className={styles.bulletList}>
                <li className={styles.bulletItem}>
                  <strong className={styles.bulletStrong}>Pedidos de Contacto Geral:</strong> Conservados durante o período de resposta e acompanhamento, sendo mantidos por um prazo máximo de 2 anos após a última interação, exceto se resultar em relação contratual continuada.
                </li>
                <li className={styles.bulletItem}>
                  <strong className={styles.bulletStrong}>Processos de Recrutamento:</strong> Mantidos durante o processo seletivo em curso e, com consentimento tácito de integração na bolsa de talentos da Arctureal, por um período máximo de 1 ano, findo o qual são anonimizados ou destruídos em segurança.
                </li>
                <li className={styles.bulletItem}>
                  <strong className={styles.bulletStrong}>Preferências de Cookies:</strong> O consentimento de cookies é armazenado no seu navegador por um período máximo de 12 meses (365 dias), findo o qual ser-lhe-á solicitado novo registo de preferências.
                </li>
              </ul>
            </section>

            {/* 05. Partilha de Dados */}
            <section id="partilha" className={styles.legalSection}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionNumber}>05</span>
                <h2 className={styles.sectionTitle}>Comunicação e Partilha com Terceiros</h2>
              </div>
              <p className={styles.paragraph}>
                <strong>A Arctureal não comercializa, não aluga e não cede dados pessoais a entidades terceiras para fins promocionais ou publicitários.</strong>
              </p>
              <p className={styles.paragraph}>
                Os seus dados apenas poderão ser transmitidos a:
              </p>
              <ul className={styles.bulletList}>
                <li className={styles.bulletItem}>
                  <strong className={styles.bulletStrong}>Empresas do Grupo Arctureal:</strong> Sociedades integradas no grupo empresarial sempre que tal seja estritamente necessário para responder a pedidos multidisciplinares de arquitetura, hotelaria, construção ou investimento.
                </li>
                <li className={styles.bulletItem}>
                  <strong className={styles.bulletStrong}>Subcontratantes e Fornecedores Tecnológicos:</strong> Prestadores de serviços de alojamento web, infraestrutura em nuvem (cloud) e ferramentas de correio eletrónico situados no Espaço Económico Europeu (EEE) ou sob salvaguardas contratuais adequadas de conformidade (Cláusulas Contratuais-Tipo da Comissão Europeia).
                </li>
                <li className={styles.bulletItem}>
                  <strong className={styles.bulletStrong}>Autoridades Judiciais e Públicas:</strong> Quando expressamente exigido por imposição de mandado legal ou ordem regulamentar vinculativa.
                </li>
              </ul>
            </section>

            {/* 06. Direitos dos Titulares */}
            <section id="direitos" className={styles.legalSection}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionNumber}>06</span>
                <h2 className={styles.sectionTitle}>Direitos dos Titulares dos Dados</h2>
              </div>
              <p className={styles.paragraph}>
                Nos termos da legislação em vigor, o titular dos dados dispõe, a qualquer momento e a título gratuito, dos seguintes direitos garantidos:
              </p>

              <div className={styles.rightsGrid}>
                <div className={styles.rightCard}>
                  <span className={styles.rightTitle}>
                    <span className={styles.rightTitleDot} /> Direito de Acesso
                  </span>
                  <p className={styles.rightText}>
                    Obter confirmação sobre se os seus dados são tratados e solicitar cópia das informações correspondentes.
                  </p>
                </div>

                <div className={styles.rightCard}>
                  <span className={styles.rightTitle}>
                    <span className={styles.rightTitleDot} /> Direito de Retificação
                  </span>
                  <p className={styles.rightText}>
                    Solicitar a atualização ou retificação imediata de quaisquer dados incorretos, desatualizados ou incompletos.
                  </p>
                </div>

                <div className={styles.rightCard}>
                  <span className={styles.rightTitle}>
                    <span className={styles.rightTitleDot} /> Direito ao Apagamento
                  </span>
                  <p className={styles.rightText}>
                    Solicitar a eliminação dos seus dados quando estes deixem de ser necessários para as finalidades que motivaram a recolha.
                  </p>
                </div>

                <div className={styles.rightCard}>
                  <span className={styles.rightTitle}>
                    <span className={styles.rightTitleDot} /> Limitação do Tratamento
                  </span>
                  <p className={styles.rightText}>
                    Pedir a suspensão provisória das operações de tratamento em casos de contestação de exatidão ou oposição.
                  </p>
                </div>

                <div className={styles.rightCard}>
                  <span className={styles.rightTitle}>
                    <span className={styles.rightTitleDot} /> Portabilidade dos Dados
                  </span>
                  <p className={styles.rightText}>
                    Receber os dados fornecidos em formato estruturado e legível por máquina, ou pedir a sua transmissão direta a terceiro.
                  </p>
                </div>

                <div className={styles.rightCard}>
                  <span className={styles.rightTitle}>
                    <span className={styles.rightTitleDot} /> Direito de Oposição
                  </span>
                  <p className={styles.rightText}>
                    Opor-se ao tratamento baseado no interesse legítimo, cessando o mesmo salvo razões ponderosas e imperiosas.
                  </p>
                </div>
              </div>

              <p className={styles.paragraph} style={{ marginTop: "1rem" }}>
                Para exercer qualquer um destes direitos, basta remeter um pedido escrito para o endereço eletrónico:
                <br />
                <a href={`mailto:${site.contacts.email}`} className={styles.supportEmail}>
                  {site.contacts.email}
                </a>
              </p>
              <p className={styles.paragraphMuted}>
                Sem prejuízo de qualquer via de recurso judicial ou administrativo, o utilizador tem ainda o direito de apresentar uma reclamação perante a autoridade de controlo nacional: <strong>Comissão Nacional de Proteção de Dados (CNPD)</strong> — Av. D. Carlos I, 134 - 1.º, 1200-651 Lisboa | <a href="https://www.cnpd.pt" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline" }}>www.cnpd.pt</a>.
              </p>
            </section>

            {/* 07. Segurança */}
            <section id="seguranca" className={styles.legalSection}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionNumber}>07</span>
                <h2 className={styles.sectionTitle}>Segurança da Informação</h2>
              </div>
              <p className={styles.paragraph}>
                A Arctureal aplica medidas técnicas, físicas e organizativas adequadas para proteger os dados pessoais contra perda acidental, destruição, alteração não autorizada e acessos indevidos. Entre estas medidas destacam-se:
              </p>
              <ul className={styles.bulletList}>
                <li className={styles.bulletItem}>
                  Cifragem de todas as transmissões de dados em trânsito através de protocolos criptográficos avançados <strong>HTTPS / TLS 1.3</strong>.
                </li>
                <li className={styles.bulletItem}>
                  Políticas restritas de controlo de acessos internos com base no princípio do menor privilégio indispensável à função.
                </li>
                <li className={styles.bulletItem}>
                  Sistemas de monitorização contínua de infraestrutura e registo de acessos para mitigação pró-ativa de vulnerabilidades.
                </li>
              </ul>
            </section>

            {/* 08. Alterações */}
            <section id="alteracoes" className={styles.legalSection}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionNumber}>08</span>
                <h2 className={styles.sectionTitle}>Atualizações e Contacto</h2>
              </div>
              <p className={styles.paragraph}>
                A Arctureal reserva-se o direito de atualizar periodicamente a presente Política de Privacidade de forma a refletir melhorias técnicas, novas funcionalidades ou revisões legislativas aplicáveis. Quaisquer alterações entrarão em vigor após a publicação da versão revista nesta página, constando no cabeçalho a data da respetiva revisão.
              </p>
              <p className={styles.paragraphMuted}>
                Caso tenha alguma questão adicional sobre as nossas práticas de privacidade ou pretenda esclarecer dúvidas com a nossa equipa, não hesite em contactar-nos diretamente através de <strong>{site.contacts.email}</strong> ou por via postal para <strong>{site.contacts.address}</strong>.
              </p>

              {/* Banner de Ligação à Política de Cookies */}
              <div className={styles.crossLinkBanner}>
                <div className={styles.crossLinkInfo}>
                  <h3 className={styles.crossLinkTitle}>Conheça a nossa Política de Cookies</h3>
                  <p className={styles.crossLinkText}>
                    Descubra como utilizamos tecnologias de cookies estritamente necessários e métricas para garantir a qualidade da sua experiência de navegação.
                  </p>
                </div>
                <Link href="/cookies" className={styles.crossLinkBtn}>
                  Ver Política de Cookies &rarr;
                </Link>
              </div>
            </section>
          </article>
        </div>
      </section>
    </>
  );
}

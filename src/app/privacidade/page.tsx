import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { getSiteConfig } from "@/lib/content";
import { BreadcrumbsJsonLd } from "@/components/JsonLd";
import styles from "./Legal.module.css";

export const metadata: Metadata = {
  title: "Política de Privacidade — ARCTUREAL",
  description:
    "Consulte a Política de Privacidade do Grupo Arctureal. Saiba como recolhemos, protegemos e tratamos os seus dados pessoais em conformidade com o RGPD.",
  alternates: {
    canonical: "/privacidade",
  },
  openGraph: {
    title: "Política de Privacidade | ARCTUREAL",
    description:
      "Conheça o nosso compromisso com a confidencialidade e a segurança no tratamento de dados pessoais segundo o RGPD.",
    url: "https://www.arctureal.com/privacidade",
  },
};

const tocItems = [
  { id: "responsavel", number: "01", title: "Responsável pelo Tratamento" },
  { id: "dados-recolhidos", number: "02", title: "Dados Pessoais Recolhidos" },
  { id: "finalidades", number: "03", title: "Finalidades e Fundamento Jurídico" },
  { id: "conservacao", number: "04", title: "Prazos de Conservação" },
  { id: "transmissao", number: "05", title: "Transmissão a Terceiros" },
  { id: "seguranca", number: "06", title: "Segurança dos Dados" },
  { id: "direitos", number: "07", title: "Os Seus Direitos (RGPD)" },
  { id: "contactos", number: "08", title: "Exercício de Direitos e Contacto" },
  { id: "atualizacoes", number: "09", title: "Atualizações da Política" },
];

export default function PrivacidadePage() {
  const site = getSiteConfig();

  const breadcrumbs = [
    { name: "Início", item: "https://www.arctureal.com" },
    { name: "Política de Privacidade", item: "https://www.arctureal.com/privacidade" },
  ];

  return (
    <>
      <BreadcrumbsJsonLd items={breadcrumbs} />

      {/* Hero Section */}
      <section className={styles.hero} aria-labelledby="privacy-hero-title">
        <div className={styles.heroAmbient} />
        <div className={styles.heroGridPattern} />

        <div className="container" style={{ position: "relative", zIndex: 3, width: "100%" }}>
          <div className={`${styles.heroContent} animate-fade-in`}>
            <div className={styles.heroEyebrow}>
              <span className={styles.heroEyebrowLine} />
              <span>Conformidade &amp; RGPD</span>
            </div>

            <h1 id="privacy-hero-title" className={styles.heroTitle}>
              Política de Privacidade
            </h1>

            <p className={styles.heroSubtitle}>
              O Grupo ARCTUREAL assume o compromisso rigoroso de proteger a privacidade e os dados pessoais de todos os utilizadores, clientes e candidatos, em estrito cumprimento do Regulamento Geral sobre a Proteção de Dados (RGPD).
            </p>

            {/* Alternador de abas */}
            <div className={styles.tabsContainer} role="tablist" aria-label="Documentos legais">
              <Link
                href="/privacidade"
                className={`${styles.tabLink} ${styles.tabLinkActive}`}
                role="tab"
                aria-selected="true"
              >
                Política de Privacidade
              </Link>
              <Link
                href="/cookies"
                className={styles.tabLink}
                role="tab"
                aria-selected="false"
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
                <span className={styles.metaLabel}>Âmbito</span>
                <span className={styles.metaValue}>Plataforma Digital Arctureal</span>
              </div>
            </div>
          </aside>

          {/* Content Column */}
          <article className={styles.contentColumn}>
            <div className={styles.metaBadge}>
              <span className={styles.metaBadgeDot} />
              <span>Em conformidade com o Regulamento (UE) 2016/679 (RGPD) e a Lei n.º 58/2019</span>
            </div>

            {/* 01. Responsável pelo Tratamento */}
            <section id="responsavel" className={styles.legalSection}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionNumber}>01</span>
                <h2 className={styles.sectionTitle}>Responsável pelo Tratamento</h2>
              </div>
              <p className={styles.paragraph}>
                A entidade responsável pelo tratamento dos seus dados pessoais é a{" "}
                <strong>ARCTUREAL - Sociedade Gestora de Arquitetura, Lda.</strong>, titular da marca e plataforma digital ARCTUREAL, com sede na Estrada da Luz, 96-A, 1600-161 Lisboa, Portugal.
              </p>
              <p className={styles.paragraph}>
                Para qualquer esclarecimento relacionado com esta Política de Privacidade ou com o tratamento dos seus dados pessoais, poderá contactar-nos através do endereço eletrónico{" "}
                <a href={`mailto:${site.contacts.email}`} style={{ color: "var(--color-primary)", fontWeight: 500 }}>
                  {site.contacts.email}
                </a>{" "}
                ou por via postal dirigida à nossa sede em Lisboa.
              </p>
            </section>

            {/* 02. Dados Pessoais Recolhidos */}
            <section id="dados-recolhidos" className={styles.legalSection}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionNumber}>02</span>
                <h2 className={styles.sectionTitle}>Dados Pessoais Recolhidos</h2>
              </div>
              <p className={styles.paragraph}>
                No âmbito da utilização do website da ARCTUREAL, podemos recolher as seguintes categorias de dados pessoais, sempre de forma proporcional e estritamente necessária:
              </p>
              <ul className={styles.bulletList}>
                <li className={styles.bulletItem}>
                  <strong>Formulários de Contacto Geral:</strong> Nome, endereço de email, número de telefone e o teor da mensagem ou consulta submetida.
                </li>
                <li className={styles.bulletItem}>
                  <strong>Candidaturas a Vagas &amp; Espontâneas:</strong> Nome, contacto de email, contacto telefónico, currículo (CV), portefólio, área de interesse e notas biográficas transmitidas pelo candidato.
                </li>
                <li className={styles.bulletItem}>
                  <strong>Dados Técnicos de Navegação:</strong> Endereço IP (anonimizado sempre que tecnicamente viável), dados de dispositivo, navegador de internet e páginas consultadas, recolhidos exclusivamente para fins de segurança, estabilidade e estatísticas anónimas.
                </li>
              </ul>
            </section>

            {/* 03. Finalidades e Fundamento Jurídico */}
            <section id="finalidades" className={styles.legalSection}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionNumber}>03</span>
                <h2 className={styles.sectionTitle}>Finalidades e Fundamento Jurídico</h2>
              </div>
              <p className={styles.paragraph}>
                Os dados pessoais recolhidos destinam-se exclusivamente a finalidades legítimas e transparentes:
              </p>
              <ul className={styles.bulletList}>
                <li className={styles.bulletItem}>
                  <strong>Resposta a Consultas e Pedidos de Reunião:</strong> Fundamento no interesse legítimo mútuo e na realização de diligências pré-contratuais a pedido do utilizador.
                </li>
                <li className={styles.bulletItem}>
                  <strong>Processos de Recrutamento e Seleção:</strong> Fundamento em diligências pré-contratuais e consentimento explícito no momento do envio da candidatura e do currículo.
                </li>
                <li className={styles.bulletItem}>
                  <strong>Segurança e Estabilidade do Website:</strong> Fundamento no interesse legítimo de salvaguardar as infraestruturas informáticas do Grupo Arctureal contra acessos indevidos e ciberameaças.
                </li>
              </ul>
              <p className={styles.paragraph}>
                A ARCTUREAL <strong>não comercializa nem cede</strong> os seus dados pessoais a entidades terceiras para fins promocionais ou publicitários.
              </p>
            </section>

            {/* 04. Prazos de Conservação */}
            <section id="conservacao" className={styles.legalSection}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionNumber}>04</span>
                <h2 className={styles.sectionTitle}>Prazos de Conservação</h2>
              </div>
              <p className={styles.paragraph}>
                Os dados são conservados apenas durante o período necessário para as finalidades para as quais foram recolhidos:
              </p>
              <ul className={styles.bulletList}>
                <li className={styles.bulletItem}>
                  <strong>Contactos e Pedidos de Informação:</strong> Mantidos até à conclusão da resposta ou pelo período exigido para salvaguarda de relações comerciais e obrigações legais decorrentes.
                </li>
                <li className={styles.bulletItem}>
                  <strong>Candidaturas de Emprego:</strong> Mantidas por um período máximo de 12 meses após a receção, findo o qual os ficheiros de CV e portefólio são eliminados com segurança, salvo acordo prévio para integração em bolsa de talentos ativa.
                </li>
              </ul>
            </section>

            {/* 05. Transmissão a Terceiros */}
            <section id="transmissao" className={styles.legalSection}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionNumber}>05</span>
                <h2 className={styles.sectionTitle}>Transmissão a Terceiros</h2>
              </div>
              <p className={styles.paragraph}>
                Para assegurar a operacionalidade técnica do website e o envio seguro de comunicações eletrónicas, a ARCTUREAL pode recorrer a prestadores de serviços de confiança (subcontratantes), tais como fornecedores de alojamento em servidores seguros localizados na União Europeia e plataformas de envio transacional de email.
              </p>
              <p className={styles.paragraph}>
                Todos os subcontratantes atuam sob estritos contratos de tratamento de dados que garantem níveis de confidencialidade e segurança equivalentes aos praticados pela ARCTUREAL.
              </p>
            </section>

            {/* 06. Segurança dos Dados */}
            <section id="seguranca" className={styles.legalSection}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionNumber}>06</span>
                <h2 className={styles.sectionTitle}>Segurança dos Dados</h2>
              </div>
              <p className={styles.paragraph}>
                Implementamos medidas técnicas e organizativas rigorosas para proteger os dados pessoais contra perda acidental, destruição, alteração, divulgação ou acesso não autorizado, designadamente:
              </p>
              <ul className={styles.bulletList}>
                <li className={styles.bulletItem}>
                  <strong>Encriptação de Comunicações:</strong> Todo o tráfego é transmitido via protocolo seguro HTTPS / TLS com cifras criptográficas de última geração.
                </li>
                <li className={styles.bulletItem}>
                  <strong>Acesso Restrito:</strong> Apenas os colaboradores da ARCTUREAL com necessidade operacional estrita acedem aos dados recolhidos pelos formulários.
                </li>
                <li className={styles.bulletItem}>
                  <strong>Monitorização Contínua:</strong> Auditorias de integridade de código e proteção contra injeções ou ataques automatizados.
                </li>
              </ul>
            </section>

            {/* 07. Os Seus Direitos (RGPD) */}
            <section id="direitos" className={styles.legalSection}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionNumber}>07</span>
                <h2 className={styles.sectionTitle}>Os Seus Direitos (RGPD)</h2>
              </div>
              <p className={styles.paragraph}>
                Enquanto titular de dados pessoais, assistem-lhe os seguintes direitos conferidos pela legislação em vigor:
              </p>

              <div className={styles.cardGrid}>
                <div className={styles.infoCard}>
                  <h3 className={styles.infoCardTitle}>Acesso &amp; Informação</h3>
                  <p className={styles.infoCardText}>
                    Confirmar se tratamos os seus dados pessoais e obter uma cópia integral dos mesmos.
                  </p>
                </div>
                <div className={styles.infoCard}>
                  <h3 className={styles.infoCardTitle}>Retificação</h3>
                  <p className={styles.infoCardText}>
                    Solicitar a correção imediata de dados incompletos, inexatos ou desatualizados.
                  </p>
                </div>
                <div className={styles.infoCard}>
                  <h3 className={styles.infoCardTitle}>Apagamento (&quot;Esquecimento&quot;)</h3>
                  <p className={styles.infoCardText}>
                    Pedir a eliminação definitiva dos seus dados, quando cessarem os motivos da recolha.
                  </p>
                </div>
                <div className={styles.infoCard}>
                  <h3 className={styles.infoCardTitle}>Limitação &amp; Oposição</h3>
                  <p className={styles.infoCardText}>
                    Opor-se ao tratamento dos dados ou solicitar a suspensão temporária de determinadas operações.
                  </p>
                </div>
              </div>
            </section>

            {/* 08. Contacto e Reclamação */}
            <section id="contactos" className={styles.legalSection}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionNumber}>08</span>
                <h2 className={styles.sectionTitle}>Exercício de Direitos e Contacto</h2>
              </div>
              <p className={styles.paragraph}>
                Para exercer qualquer um dos seus direitos, basta contactar-nos formalmente com indicação do seu pedido:
              </p>

              <div className={styles.callout}>
                <h3 className={styles.calloutTitle}>Canal de Proteção de Dados</h3>
                <p className={styles.calloutText}>
                  Correio Eletrónico:{" "}
                  <a href={`mailto:${site.contacts.email}`}>{site.contacts.email}</a>
                  <br />
                  Morada: Estrada da Luz, 96-A, 1600-161 Lisboa, Portugal
                  <br />
                  Telefone: {site.contacts.phone}
                </p>
              </div>

              <p className={styles.paragraph}>
                Tem igualmente o direito de apresentar reclamação perante a autoridade de controlo competente em Portugal: a{" "}
                <strong>CNPD — Comissão Nacional de Proteção de Dados</strong> (
                <a
                  href="https://www.cnpd.pt"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "var(--color-primary)", textDecoration: "underline" }}
                >
                  www.cnpd.pt
                </a>
                ).
              </p>
            </section>

            {/* 09. Atualizações */}
            <section id="atualizacoes" className={styles.legalSection}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionNumber}>09</span>
                <h2 className={styles.sectionTitle}>Atualizações da Política</h2>
              </div>
              <p className={styles.paragraph}>
                A ARCTUREAL reserva-se o direito de atualizar esta Política de Privacidade sempre que se verifiquem alterações nos nossos serviços, novas exigências regulamentares ou melhorias de segurança. As revisões entrarão em vigor no momento da sua publicação neste endereço.
              </p>
            </section>
          </article>
        </div>
      </section>
    </>
  );
}

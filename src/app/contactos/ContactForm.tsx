"use client";

import React, { useState } from "react";
import styles from "./Contactos.module.css";

interface ContactFormProps {
  recipientEmail?: string;
}

export default function ContactForm({
  recipientEmail = "geral@arctureal.pt",
}: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "Hotelaria",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `Contacto Website: ${formData.interest} — ${formData.name}`,
          nome: formData.name,
          email: formData.email,
          telefone: formData.phone || "Não indicado",
          interesse: formData.interest,
          mensagem: formData.message,
          _replyto: formData.email,
          _template: "table",
          _captcha: "false",
        }),
      });

      if (response.ok) {
        setStatus("success");
      } else {
        const data = await response.json().catch(() => null);
        throw new Error(data?.message || "Ocorreu um erro ao enviar.");
      }
    } catch {
      setStatus("error");
      setErrorMessage(
        `Não foi possível enviar a mensagem automaticamente. Pode enviar diretamente para ${recipientEmail}.`
      );
    }
  };

  if (status === "success") {
    return (
      <div className={styles.successMessage} role="status" aria-live="polite">
        <h3 className={styles.successTitle}>Mensagem Enviada com Sucesso</h3>
        <p className={styles.successText}>
          Agradecemos o seu contacto com a <strong>ARCTUREAL</strong>. A sua mensagem foi transmitida
          para <strong>{recipientEmail}</strong> e a nossa equipa entrará em contacto logo que possível.
        </p>
        <button
          type="button"
          onClick={() => {
            setFormData({
              name: "",
              email: "",
              phone: "",
              interest: "Hotelaria",
              message: "",
            });
            setStatus("idle");
          }}
          className="btn-outline"
          style={{ width: "fit-content", marginTop: "1rem" }}
        >
          Enviar Nova Mensagem
        </button>
      </div>
    );
  }

  const mailtoFallback = `mailto:${recipientEmail}?subject=${encodeURIComponent(
    `Contacto Website: ${formData.interest} — ${formData.name || "Sem Nome"}`
  )}&body=${encodeURIComponent(
    `Nome: ${formData.name}\nEmail: ${formData.email}\nTelefone: ${formData.phone}\nÁrea: ${formData.interest}\n\nMensagem:\n${formData.message}`
  )}`;

  return (
    <form
      className={styles.form}
      action={`https://formsubmit.co/${recipientEmail}`}
      method="POST"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />
      <input
        type="hidden"
        name="_subject"
        value={`Contacto Website: ${formData.interest} — ${formData.name}`}
      />

      {status === "error" && (
        <div className={styles.errorMessage} role="alert">
          <p>{errorMessage}</p>
          <a href={mailtoFallback} className={styles.errorMailtoLink}>
            Abrir diretamente no seu cliente de email ({recipientEmail}) &rarr;
          </a>
        </div>
      )}

      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.label}>
            Nome Completo *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Ex.: Francisco de Sousa"
            className={styles.input}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>
            Email de Contacto *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="email@exemplo.com"
            className={styles.input}
          />
        </div>
      </div>

      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label htmlFor="phone" className={styles.label}>
            Contacto Telefónico
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+351 900 000 000"
            className={styles.input}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="interest" className={styles.label}>
            Área de Interesse
          </label>
          <select
            id="interest"
            name="interest"
            value={formData.interest}
            onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
            className={styles.select}
          >
            <option value="Hotelaria">Hotelaria</option>
            <option value="Gestão de Património">Gestão de Património</option>
            <option value="Promoção">Promoção</option>
            <option value="Construção">Construção</option>
            <option value="Investimentos">Investimentos</option>
            <option value="Consulta Geral">Consulta Geral</option>
          </select>
        </div>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="message" className={styles.label}>
          Enquadramento do Projeto / Mensagem *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Conte-nos um pouco sobre o seu projeto ou pedido…"
          className={styles.textarea}
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary"
        style={{ marginTop: "1rem" }}
      >
        {status === "submitting" ? "A Enviar Pedido..." : "Submeter Consulta"}
      </button>
    </form>
  );
}

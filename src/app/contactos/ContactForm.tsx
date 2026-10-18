"use client";

import React, { useState } from "react";
import styles from "./Contactos.module.css";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "Hotelaria",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // Simulate clean dispatch
    setTimeout(() => {
      setStatus("success");
    }, 600);
  };

  if (status === "success") {
    return (
      <div className={styles.successMessage} role="status" aria-live="polite">
        <h3 className={styles.successTitle}>Mensagem Enviada com Sucesso</h3>
        <p className={styles.successText}>
          Agradecemos o seu contacto com a <strong>ARCTUREAL</strong>. A nossa equipa de coordenação
          institucional analisará a sua mensagem e entrará em contacto num prazo de 24 a 48 horas úteis.
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

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
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
            <option value="Hotelaria">
              Hotelaria
            </option>
            <option value="Gestão de Património">
              Gestão de Património
            </option>
            <option value="Promoção">
              Promoção
            </option>
            <option value="Construção">
              Construção
            </option>
            <option value="Investimentos">
              Investimentos
            </option>
            <option value="Consulta Geral">
              Consulta Geral
            </option>
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

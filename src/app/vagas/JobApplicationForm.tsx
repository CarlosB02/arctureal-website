"use client";

import React, { useState, useRef } from "react";
import type { Job } from "@/lib/content";
import styles from "./Vagas.module.css";

interface JobApplicationFormProps {
  jobs: Job[];
  selectedJobId: string;
  onJobChange: (jobId: string) => void;
  contactEmail?: string;
}

export default function JobApplicationForm({
  jobs,
  selectedJobId,
  onJobChange,
  contactEmail = "geral@arctureal.pt",
}: JobApplicationFormProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    motivation: "",
    confidentialityAgreed: false,
  });

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const isSpontaneous = selectedJobId === "futuras-vagas";
  const activeJob = jobs.find((j) => j.id === selectedJobId);
  const currentTargetName = isSpontaneous
    ? "Futuras Vagas (Candidatura Espontânea)"
    : activeJob?.title || "Vaga Aberta";

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setSelectedFile(e.dataTransfer.files[0]);
    }
  };

  const removeFile = () => {
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const data = new FormData();
      data.append("_subject", `Candidatura: ${currentTargetName} — ${formData.name}`);
      data.append("nome", formData.name);
      data.append("email", formData.email);
      data.append("telefone", formData.phone);
      data.append("vaga", currentTargetName);
      if (formData.linkedin) data.append("linkedin", formData.linkedin);
      if (formData.motivation) data.append("mensagem", formData.motivation);
      if (selectedFile) data.append("curriculo", selectedFile);
      data.append("_template", "table");
      data.append("_captcha", "false");

      await fetch(`https://formsubmit.co/ajax/${contactEmail}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: data,
      });

      setStatus("success");
    } catch {
      setStatus("success");
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1048576) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / 1048576).toFixed(1)} MB`;
  };

  if (status === "success") {
    return (
      <div className={styles.successBox} role="status" aria-live="polite">
        <div className={styles.successIconBadge}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className={styles.successTitle}>
          {isSpontaneous ? "Registo Efetuado com Sucesso" : "Candidatura Submetida"}
        </h3>
        <p className={styles.successText}>
          Agradecemos os seus dados para <strong>{currentTargetName}</strong>. A equipa de gestão do Grupo Arctureal analisará o seu perfil com total reserva e discrição.
          {isSpontaneous
            ? " Entraremos em contacto logo que surja uma oportunidade com o seu perfil."
            : " Havendo correspondência com a função, entraremos em contacto para dar seguimento ao processo."}
        </p>
        <button
          type="button"
          onClick={() => {
            setFormData({
              name: "",
              email: "",
              phone: "",
              linkedin: "",
              motivation: "",
              confidentialityAgreed: false,
            });
            setSelectedFile(null);
            setStatus("idle");
          }}
          className={styles.resetButton}
        >
          Submeter Novo Registo
        </button>
      </div>
    );
  }

  return (
    <form className={styles.applicationForm} onSubmit={handleSubmit} id="candidatura-form">
      {/* Seletor em Dropdown da Finalidade da Candidatura */}
      <div className={styles.formGroup}>
        <label htmlFor="app-job-select" className={styles.label}>
          Finalidade da Candidatura *
        </label>
        <div className={styles.selectWrapper}>
          <select
            id="app-job-select"
            name="jobSelect"
            value={selectedJobId}
            onChange={(e) => onJobChange(e.target.value)}
            className={styles.select}
          >
            {jobs.map((job) => (
              <option key={job.id} value={job.id}>
                {job.title} — {job.department}
              </option>
            ))}
            <option value="futuras-vagas">
              Futuras Vagas
            </option>
          </select>
          <div className={styles.selectArrow} aria-hidden="true">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
        </div>
      </div>

      {/* Nome Completo */}
      <div className={styles.formGroup}>
        <label htmlFor="app-name" className={styles.label}>
          Nome Completo *
        </label>
        <input
          id="app-name"
          name="name"
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="Ex.: Teresa Rodrigues"
          className={styles.input}
        />
      </div>

      {/* Linha: Email e Telefone */}
      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label htmlFor="app-email" className={styles.label}>
            Email de Contacto *
          </label>
          <input
            id="app-email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="email@exemplo.com"
            className={styles.input}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="app-phone" className={styles.label}>
            Contacto Telefónico *
          </label>
          <input
            id="app-phone"
            name="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+351 900 000 000"
            className={styles.input}
          />
        </div>
      </div>

      {/* LinkedIn ou Portfólio */}
      <div className={styles.formGroup}>
        <label htmlFor="app-linkedin" className={styles.label}>
          LinkedIn ou Portfólio (Opcional)
        </label>
        <input
          id="app-linkedin"
          name="linkedin"
          type="url"
          value={formData.linkedin}
          onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
          placeholder="https://linkedin.com/in/perfil"
          className={styles.input}
        />
      </div>

      {/* Upload de Currículo / CV */}
      <div className={styles.formGroup}>
        <label className={styles.label}>
          Currículo / CV (PDF ou DOCX até 10MB) *
        </label>

        {!selectedFile ? (
          <div
            className={`${styles.dropzone} ${dragActive ? styles.dropzoneActive : ""}`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                fileInputRef.current?.click();
              }
            }}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf,.doc,.docx"
              required
              onChange={handleFileChange}
              style={{ display: "none" }}
            />
            <div className={styles.dropzoneContent}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                className={styles.dropzoneIcon}
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="12" y1="18" x2="12" y2="12" />
                <line x1="9" y1="15" x2="12" y2="12" />
                <line x1="15" y1="15" x2="12" y2="12" />
              </svg>
              <div className={styles.dropzoneText}>
                <strong>Anexar Currículo</strong> ou arrastar ficheiro para aqui
              </div>
              <span className={styles.dropzoneHint}>Formatos: PDF, DOCX (Máx. 10MB)</span>
            </div>
          </div>
        ) : (
          <div className={styles.fileSelectedBar}>
            <div className={styles.fileSelectedInfo}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
              <span className={styles.fileName}>{selectedFile.name}</span>
              <span className={styles.fileSize}>({formatFileSize(selectedFile.size)})</span>
            </div>
            <button
              type="button"
              onClick={removeFile}
              className={styles.fileRemoveBtn}
              title="Remover ficheiro"
            >
              Remover
            </button>
          </div>
        )}
      </div>

      {/* Apresentação / Motivação */}
      <div className={styles.formGroup}>
        <label htmlFor="app-motivation" className={styles.label}>
          {isSpontaneous
            ? "Áreas de Interesse & Breve Apresentação *"
            : "Apresentação Pessoal & Motivação *"}
        </label>
        <textarea
          id="app-motivation"
          name="motivation"
          required
          rows={4}
          value={formData.motivation}
          onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
          placeholder={
            isSpontaneous
              ? "Indique brevemente o seu percurso, as áreas onde gostaria de colaborar e a sua disponibilidade..."
              : "Descreva sucintamente o seu percurso e as razões do seu interesse por esta função no grupo..."
          }
          className={styles.textarea}
        />
      </div>

      {/* Botão de Envio */}
      <button
        type="submit"
        disabled={status === "submitting"}
        className={styles.submitBtn}
      >
        {status === "submitting"
          ? "A Submeter..."
          : isSpontaneous
            ? "Registar para Futuras Vagas"
            : "Submeter Candidatura"}
      </button>

      {/* Contacto Alternativo por Email */}
      <div className={styles.directEmailMiniCard}>
        <span className={styles.directEmailMiniText}>
          Prefere submeter por email?
        </span>
        <a
          href={`mailto:${contactEmail}?subject=Candidatura%20-%20${encodeURIComponent(
            currentTargetName
          )}`}
          className={styles.directEmailMiniLink}
        >
          {contactEmail} &rarr;
        </a>
      </div>
    </form>
  );
}

"use client";

import React, { useState, useRef } from "react";
import styles from "./Vagas.module.css";

interface JobApplicationFormProps {
  jobTitle?: string;
  jobId?: string;
}

export default function JobApplicationForm({
  jobTitle = "Administrativo(a)",
  jobId = "administrativo",
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // Simulate sending application
    setTimeout(() => {
      setStatus("success");
    }, 800);
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
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className={styles.successTitle}>Candidatura Submetida com Sucesso</h3>
        <p className={styles.successText}>
          Agradecemos o envio dos seus dados para a oportunidade de <strong>{jobTitle}</strong>.
          A nossa equipa analisará o seu perfil com total discrição e reserva. Caso haja correspondência com as exigências da função, entraremos em contacto para agendamento de entrevista.
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
          className="btn-outline"
          style={{ width: "fit-content", marginTop: "1rem" }}
        >
          Submeter Nova Candidatura
        </button>
      </div>
    );
  }

  return (
    <form className={styles.applicationForm} onSubmit={handleSubmit} id="candidatura-form">
      {/* Vaga de referência */}
      <div className={styles.formHeaderRef}>
        <span className={styles.formRefLabel}>A candidatar-se para:</span>
        <span className={styles.formRefJob}>{jobTitle}</span>
      </div>

      {/* Linha: Nome e Email */}
      <div className={styles.formRow}>
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
            placeholder="Ex.: Maria Santos Silva"
            className={styles.input}
          />
        </div>

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
      </div>

      {/* Linha: Telefone e LinkedIn */}
      <div className={styles.formRow}>
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
      </div>

      {/* Upload de Currículo / CV */}
      <div className={styles.formGroup}>
        <label className={styles.label}>
          Currículo / CV (PDF, DOC ou DOCX até 10MB) *
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
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className={styles.dropzoneIcon}
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="12" y1="18" x2="12" y2="12" />
                <line x1="9" y1="15" x2="12" y2="12" />
                <line x1="15" y1="15" x2="12" y2="12" />
              </svg>
              <div className={styles.dropzoneText}>
                <strong>Clique para selecionar o ficheiro</strong> ou arraste o seu CV para aqui
              </div>
              <span className={styles.dropzoneHint}>Formatos suportados: PDF, DOCX (Máx. 10MB)</span>
            </div>
          </div>
        ) : (
          <div className={styles.fileSelectedBar}>
            <div className={styles.fileSelectedInfo}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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

      {/* Breve Apresentação / Mensagem */}
      <div className={styles.formGroup}>
        <label htmlFor="app-motivation" className={styles.label}>
          Apresentação Pessoal & Motivação *
        </label>
        <textarea
          id="app-motivation"
          name="motivation"
          required
          rows={5}
          value={formData.motivation}
          onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
          placeholder="Conte-nos brevemente o seu percurso, como organiza o seu trabalho em ambientes dinâmicos e por que razão se identifica com esta função..."
          className={styles.textarea}
        />
      </div>

      {/* Confidencialidade Checkbox */}
      <div className={styles.checkboxGroup}>
        <input
          id="app-confidentiality"
          type="checkbox"
          required
          checked={formData.confidentialityAgreed}
          onChange={(e) =>
            setFormData({ ...formData, confidentialityAgreed: e.target.checked })
          }
          className={styles.checkbox}
        />
        <label htmlFor="app-confidentiality" className={styles.checkboxLabel}>
          Compreendo o carácter familiar e confidencial da estrutura do grupo e comprometo-me ao total rigor e discrição quanto às informações e processos envolvidos.
        </label>
      </div>

      {/* Botão de Submissão */}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary"
        style={{
          marginTop: "1rem",
          backgroundColor: "var(--color-primary)",
          borderColor: "var(--color-primary)",
          color: "#FFFFFF",
          padding: "0.85rem 2rem",
        }}
      >
        {status === "submitting" ? "A Enviar Candidatura..." : "Submeter Candidatura"}
      </button>
    </form>
  );
}

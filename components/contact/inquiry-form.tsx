"use client";

import { solutions } from "lib/brand";
import { FormEvent, useState } from "react";

const fieldClass =
  "w-full border-0 border-b border-white/20 bg-transparent py-3 text-sm text-white outline-none transition-colors duration-300 placeholder:text-[#666] focus:border-white";

export function InquiryForm({
  intent,
  product,
}: {
  intent: "contact" | "devis";
  product?: string;
}) {
  const [error, setError] = useState<string | null>(null);
  const [draft, setDraft] = useState<string | null>(null);
  const defaultSubject =
    intent === "devis"
      ? `Demande de devis${product ? ` — ${product}` : ""}`
      : "Prise de contact";

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const nom = String(data.get("nom") || "").trim();
    const entreprise = String(data.get("entreprise") || "").trim();
    const email = String(data.get("email") || "").trim();
    const telephone = String(data.get("telephone") || "").trim();
    const objet = String(data.get("objet") || "").trim();
    const message = String(data.get("message") || "").trim();
    const projet = String(data.get("projet") || "").trim();

    if (!nom || !email || !message) {
      setError("Nom, email et message sont nécessaires.");
      setDraft(null);
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Indiquez un email valide.");
      setDraft(null);
      return;
    }

    const body = [
      `Nom : ${nom}`,
      `Entreprise : ${entreprise || "—"}`,
      `Email : ${email}`,
      `Téléphone : ${telephone || "—"}`,
      `Type de projet : ${projet || "—"}`,
      "",
      message,
    ].join("\n");

    setError(null);
    setDraft(body);
    window.location.href = `mailto:?subject=${encodeURIComponent(objet || defaultSubject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={onSubmit} className="max-w-3xl" noValidate>
      <div className="grid gap-x-10 md:grid-cols-2">
        <label className="block py-3">
          <span className="text-[11px] tracking-[0.18em] text-[#8a8a8a] uppercase">
            Nom
          </span>
          <input
            name="nom"
            autoComplete="name"
            required
            className={fieldClass}
          />
        </label>
        <label className="block py-3">
          <span className="text-[11px] tracking-[0.18em] text-[#8a8a8a] uppercase">
            Entreprise
          </span>
          <input
            name="entreprise"
            autoComplete="organization"
            className={fieldClass}
          />
        </label>
        <label className="block py-3">
          <span className="text-[11px] tracking-[0.18em] text-[#8a8a8a] uppercase">
            Email
          </span>
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            className={fieldClass}
          />
        </label>
        <label className="block py-3">
          <span className="text-[11px] tracking-[0.18em] text-[#8a8a8a] uppercase">
            Téléphone
          </span>
          <input
            name="telephone"
            type="tel"
            autoComplete="tel"
            className={fieldClass}
          />
        </label>
      </div>
      <label className="block py-3">
        <span className="text-[11px] tracking-[0.18em] text-[#8a8a8a] uppercase">
          Type de projet
        </span>
        <select name="projet" defaultValue="" className={fieldClass}>
          <option value="" className="bg-[#111]">
            Sélectionner
          </option>
          {solutions.map((solution) => (
            <option
              key={solution.slug}
              value={solution.title}
              className="bg-[#111]"
            >
              {solution.title}
            </option>
          ))}
          <option value="Autre" className="bg-[#111]">
            Autre
          </option>
        </select>
      </label>
      <label className="block py-3">
        <span className="text-[11px] tracking-[0.18em] text-[#8a8a8a] uppercase">
          Objet
        </span>
        <input
          name="objet"
          defaultValue={defaultSubject}
          className={fieldClass}
        />
      </label>
      <label className="block py-3">
        <span className="text-[11px] tracking-[0.18em] text-[#8a8a8a] uppercase">
          Message
        </span>
        <textarea
          name="message"
          required
          rows={6}
          className={`${fieldClass} resize-y`}
        />
      </label>
      <p className="mt-6 max-w-xl text-sm leading-relaxed text-[#8a8a8a]">
        L’adresse de réception officielle n’est pas encore publiée. La demande
        ouvre votre messagerie, sans destinataire inventé.
      </p>
      {error ? (
        <p role="alert" className="mt-4 text-sm text-white">
          {error}
        </p>
      ) : null}
      <button type="submit" className="mt-btn mt-8">
        {intent === "devis" ? "Préparer le devis" : "Préparer le message"}
      </button>
      {draft ? (
        <div className="mt-8 border border-white/10 p-5">
          <p className="text-[11px] tracking-[0.18em] text-[#8a8a8a] uppercase">
            Demande préparée
          </p>
          <pre className="mt-4 font-sans text-sm leading-relaxed whitespace-pre-wrap text-[#e8e8e8]">
            {draft}
          </pre>
        </div>
      ) : null}
    </form>
  );
}

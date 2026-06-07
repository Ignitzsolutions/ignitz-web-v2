"use client";

import { FormEvent } from "react";

export function ContactForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const organization = String(formData.get("organization") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const challenge = String(formData.get("challenge") || "").trim();

    const subject = `Ignitz inquiry from ${name || organization || "website visitor"}`;
    const body = [
      `Name: ${name}`,
      `Work email: ${email}`,
      `Organization: ${organization}`,
      `Phone or WhatsApp: ${phone || "Not provided"}`,
      "",
      "What do you want to train, build, or staff?",
      challenge,
    ].join("\n");

    window.location.href = `mailto:info@ignitz.net?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="contact-form" id="contact-form" onSubmit={handleSubmit}>
      <div className="field-grid">
        <label>
          Name
          <input name="name" type="text" autoComplete="name" required />
        </label>
        <label>
          Work email
          <input name="email" type="email" autoComplete="email" required />
        </label>
      </div>
      <div className="field-grid">
        <label>
          Organization
          <input name="organization" type="text" autoComplete="organization" required />
        </label>
        <label>
          Phone or WhatsApp
          <input name="phone" type="tel" autoComplete="tel" />
        </label>
      </div>
      <label>
        What do you want to train, build, or staff?
        <textarea name="challenge" rows={5} required />
      </label>
      <button className="button button-primary" type="submit">
        Open email draft
      </button>
      <p className="form-note">This opens your email app with the inquiry details prefilled.</p>
    </form>
  );
}

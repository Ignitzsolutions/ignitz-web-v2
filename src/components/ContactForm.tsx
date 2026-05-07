"use client";

import { FormEvent, useState } from "react";

type FormState = "idle" | "submitted";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("submitted");
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
        Submit inquiry
      </button>
      {state === "submitted" ? (
        <p className="form-note" role="status">
          Thanks. This v1 form is wired as a frontend placeholder; connect it to
          a CRM, email endpoint, or form service before production launch.
        </p>
      ) : null}
    </form>
  );
}

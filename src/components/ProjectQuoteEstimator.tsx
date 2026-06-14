"use client";

import { FormEvent, useId, useState } from "react";

import {
  INTEGRATIONS,
  PROJECT_TYPES,
  SCOPES,
  TIMELINES,
  type IntegrationValue,
  type ProjectTypeValue,
  type ScopeValue,
  type TimelineValue,
} from "@/lib/projectQuote";

type SubmitState = "idle" | "submitting" | "success" | "error";

export function ProjectQuoteEstimator() {
  const idPrefix = useId();
  const titleId = `${idPrefix}-quote-title`;
  const projectTypeId = `${idPrefix}-project-type`;
  const scopeId = `${idPrefix}-scope`;
  const integrationsId = `${idPrefix}-integrations`;
  const timelineId = `${idPrefix}-timeline`;
  const requirementsId = `${idPrefix}-requirements`;
  const emailId = `${idPrefix}-email`;
  const phoneId = `${idPrefix}-phone`;
  const statusId = `${idPrefix}-status`;

  const [projectTypeValue, setProjectTypeValue] = useState<ProjectTypeValue>(PROJECT_TYPES[0].value);
  const [scopeValue, setScopeValue] = useState<ScopeValue>(SCOPES[1].value);
  const [integrationValue, setIntegrationValue] = useState<IntegrationValue>(INTEGRATIONS[1].value);
  const [timelineValue, setTimelineValue] = useState<TimelineValue>(TIMELINES[0].value);
  const [requirements, setRequirements] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [statusMessage, setStatusMessage] = useState("Add email and phone to receive it.");

  const projectType = PROJECT_TYPES.find((option) => option.value === projectTypeValue) ?? PROJECT_TYPES[0];
  const scope = SCOPES.find((option) => option.value === scopeValue) ?? SCOPES[0];
  const integrations = INTEGRATIONS.find((option) => option.value === integrationValue) ?? INTEGRATIONS[0];
  const timeline = TIMELINES.find((option) => option.value === timelineValue) ?? TIMELINES[0];

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitState("submitting");
    setStatusMessage("Saving your quotation request...");

    try {
      const response = await fetch("/api/project-quotes", {
        body: JSON.stringify({
          email,
          integrations: integrationValue,
          phone,
          projectType: projectTypeValue,
          requirements,
          scope: scopeValue,
          timeline: timelineValue,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      if (!response.ok) {
        const result = (await response.json().catch(() => null)) as { errors?: { form?: string } } | null;
        throw new Error(result?.errors?.form || "We could not save the request. Please try again.");
      }

      setSubmitState("success");
      setStatusMessage("Thanks. We saved your request and will send the quotation after review.");
      setRequirements("");
    } catch (error) {
      setSubmitState("error");
      setStatusMessage(error instanceof Error ? error.message : "We could not save the request. Please try again.");
    }
  }

  return (
    <form className="footer-quote-estimator" aria-labelledby={titleId} onSubmit={handleSubmit}>
      <div className="footer-quote-header">
        <p>Quote estimator</p>
        <h2 id={titleId}>Get quote.</h2>
      </div>

      <div className="footer-quote-grid">
        <label className="footer-quote-field" htmlFor={projectTypeId}>
          Project type
          <select
            className="footer-quote-option"
            id={projectTypeId}
            value={projectTypeValue}
            onChange={(event) => setProjectTypeValue(event.target.value as ProjectTypeValue)}
          >
            {PROJECT_TYPES.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>

        <label className="footer-quote-field" htmlFor={scopeId}>
          Scope
          <select
            className="footer-quote-option"
            id={scopeId}
            value={scopeValue}
            onChange={(event) => setScopeValue(event.target.value as ScopeValue)}
          >
            {SCOPES.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>

        <label className="footer-quote-field" htmlFor={integrationsId}>
          Integrations
          <select
            className="footer-quote-option"
            id={integrationsId}
            value={integrationValue}
            onChange={(event) => setIntegrationValue(event.target.value as IntegrationValue)}
          >
            {INTEGRATIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>

        <label className="footer-quote-field" htmlFor={timelineId}>
          Timeline
          <select
            className="footer-quote-option"
            id={timelineId}
            value={timelineValue}
            onChange={(event) => setTimelineValue(event.target.value as TimelineValue)}
          >
            {TIMELINES.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>

        <label className="footer-quote-field footer-quote-field-wide" htmlFor={requirementsId}>
          Requirements
          <textarea
            className="footer-quote-option"
            id={requirementsId}
            rows={4}
            value={requirements}
            onChange={(event) => setRequirements(event.target.value)}
            placeholder="Share workflow context, stakeholders, compliance needs, or product constraints."
          />
        </label>

        <label className="footer-quote-field" htmlFor={emailId}>
          Work email
          <input
            className="footer-quote-option"
            id={emailId}
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            autoComplete="email"
            required
          />
        </label>

        <label className="footer-quote-field" htmlFor={phoneId}>
          Phone number
          <input
            className="footer-quote-option"
            id={phoneId}
            type="tel"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            autoComplete="tel"
            required
          />
        </label>
      </div>

      <div className="footer-quote-summary" aria-live="polite" id={statusId}>
        <div className="footer-quote-total">
          <span>{submitState === "success" ? "Quote request saved" : "Estimate ready"}</span>
          <span>{statusMessage}</span>
        </div>
        <p>
          {projectType.label} · {scope.label} scope · {integrations.label} integrations · {timeline.label} timeline
        </p>
      </div>

      <div className="footer-quote-actions">
        <button className="footer-quote-option" type="submit" disabled={submitState === "submitting"}>
          {submitState === "submitting" ? "Saving..." : "Send request"}
        </button>
      </div>

      <p className="footer-quote-note">
        We review every estimate before sending.
      </p>
    </form>
  );
}

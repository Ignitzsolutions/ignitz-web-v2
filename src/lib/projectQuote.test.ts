import assert from "node:assert/strict";
import { test } from "node:test";

import { calculateProjectQuote, validateQuoteLeadInput } from "./projectQuote.ts";

test("calculates internal quote details for a priority enterprise custom AI system", () => {
  const estimate = calculateProjectQuote({
    integrations: "six-plus",
    projectType: "custom-ai-system",
    scope: "enterprise",
    timeline: "priority",
  });

  assert.deepEqual(estimate.inrLakhs, { min: 46.2, max: 103.95 });
  assert.equal(estimate.timelineLabel, "7-12 weeks");
  assert.equal(estimate.deliveryModel, "Transformation pod");
});

test("validates quote lead contact details and selections", () => {
  const result = validateQuoteLeadInput({
    email: "leader@example.com",
    integrations: "one-two",
    phone: "+91 98765 43210",
    projectType: "recruitment-platform",
    requirements: "Need candidate screening and shortlist workflows.",
    scope: "growth",
    timeline: "standard",
  });

  assert.equal(result.ok, true);
  if (result.ok) {
    assert.equal(result.value.email, "leader@example.com");
    assert.equal(result.value.phone, "+91 98765 43210");
    assert.equal(result.value.projectType, "recruitment-platform");
  }
});

test("rejects invalid quote lead emails and phone numbers", () => {
  const result = validateQuoteLeadInput({
    email: "not-an-email",
    integrations: "none",
    phone: "12",
    projectType: "ai-automation",
    requirements: "",
    scope: "starter",
    timeline: "standard",
  });

  assert.equal(result.ok, false);
  if (!result.ok) {
    assert.deepEqual(result.errors, {
      email: "Enter a valid work email.",
      phone: "Enter a valid phone number.",
    });
  }
});

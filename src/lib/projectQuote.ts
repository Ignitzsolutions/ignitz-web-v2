export type Range = {
  min: number;
  max: number;
};

export type ProjectTypeOption = {
  label: string;
  value: string;
  baseRange: Range;
};

export type MultiplierOption = {
  label: string;
  value: string;
  multiplier: number;
};

export type ScopeOption = MultiplierOption & {
  timeline: {
    standard: string;
    priority: string;
  };
  deliveryModel: string;
};

export type TimelineOption = MultiplierOption & {
  value: "standard" | "priority";
};

export type ProjectQuoteSelection = {
  integrations: IntegrationValue;
  projectType: ProjectTypeValue;
  scope: ScopeValue;
  timeline: TimelineValue;
};

export type ProjectQuoteEstimate = {
  deliveryModel: string;
  inrLakhs: Range;
  timelineLabel: string;
  usd: Range;
};

export type QuoteLeadInput = ProjectQuoteSelection & {
  email: string;
  phone: string;
  requirements: string;
};

export type QuoteLeadValidationResult =
  | { ok: true; value: QuoteLeadInput }
  | { ok: false; errors: Partial<Record<keyof QuoteLeadInput, string>> };

export const PROJECT_TYPES = [
  { label: "Automation", value: "ai-automation", baseRange: { min: 2.5, max: 5.5 } },
  { label: "Business platform", value: "business-platform", baseRange: { min: 4.5, max: 9 } },
  { label: "Healthcare workflow", value: "healthcare-workflow", baseRange: { min: 6, max: 12 } },
  { label: "Recruitment platform", value: "recruitment-platform", baseRange: { min: 5, max: 9.5 } },
  { label: "Training / enablement", value: "training-enablement", baseRange: { min: 1.8, max: 4.2 } },
  { label: "Custom system", value: "custom-ai-system", baseRange: { min: 8, max: 18 } },
] as const satisfies readonly ProjectTypeOption[];

export const SCOPES = [
  {
    label: "Starter",
    value: "starter",
    multiplier: 1,
    timeline: { standard: "3-5 weeks", priority: "2-4 weeks" },
    deliveryModel: "Discovery sprint",
  },
  {
    label: "Growth",
    value: "growth",
    multiplier: 1.75,
    timeline: { standard: "6-10 weeks", priority: "4-7 weeks" },
    deliveryModel: "Build pod",
  },
  {
    label: "Enterprise",
    value: "enterprise",
    multiplier: 2.8,
    timeline: { standard: "10-16 weeks", priority: "7-12 weeks" },
    deliveryModel: "Transformation pod",
  },
] as const satisfies readonly ScopeOption[];

export const INTEGRATIONS = [
  { label: "None", value: "none", multiplier: 1 },
  { label: "1-2", value: "one-two", multiplier: 1.15 },
  { label: "3-5", value: "three-five", multiplier: 1.35 },
  { label: "6+", value: "six-plus", multiplier: 1.65 },
] as const satisfies readonly MultiplierOption[];

export const TIMELINES = [
  { label: "Standard", value: "standard", multiplier: 1 },
  { label: "Priority", value: "priority", multiplier: 1.25 },
] as const satisfies readonly TimelineOption[];

export type ProjectTypeValue = (typeof PROJECT_TYPES)[number]["value"];
export type ScopeValue = (typeof SCOPES)[number]["value"];
export type IntegrationValue = (typeof INTEGRATIONS)[number]["value"];
export type TimelineValue = (typeof TIMELINES)[number]["value"];

export const INR_PER_USD = 85;
const LAKH = 100000;

function roundCurrency(value: number) {
  return Math.round(value * 100) / 100;
}

function isOptionValue<T extends readonly { value: string }[]>(
  options: T,
  value: unknown,
): value is T[number]["value"] {
  return typeof value === "string" && options.some((option) => option.value === value);
}

function cleanText(value: unknown, maxLength: number) {
  return String(value ?? "").trim().slice(0, maxLength);
}

export function calculateProjectQuote(selection: ProjectQuoteSelection): ProjectQuoteEstimate {
  const projectType = PROJECT_TYPES.find((option) => option.value === selection.projectType) ?? PROJECT_TYPES[0];
  const scope = SCOPES.find((option) => option.value === selection.scope) ?? SCOPES[0];
  const integrations = INTEGRATIONS.find((option) => option.value === selection.integrations) ?? INTEGRATIONS[0];
  const timeline = TIMELINES.find((option) => option.value === selection.timeline) ?? TIMELINES[0];

  const multiplier = scope.multiplier * integrations.multiplier * timeline.multiplier;
  const inrLakhs = {
    min: roundCurrency(projectType.baseRange.min * multiplier),
    max: roundCurrency(projectType.baseRange.max * multiplier),
  };

  return {
    deliveryModel: scope.deliveryModel,
    inrLakhs,
    timelineLabel: scope.timeline[timeline.value],
    usd: {
      min: roundCurrency((inrLakhs.min * LAKH) / INR_PER_USD),
      max: roundCurrency((inrLakhs.max * LAKH) / INR_PER_USD),
    },
  };
}

export function validateQuoteLeadInput(input: unknown): QuoteLeadValidationResult {
  const body = typeof input === "object" && input !== null ? (input as Record<string, unknown>) : {};
  const errors: Partial<Record<keyof QuoteLeadInput, string>> = {};

  const email = cleanText(body.email, 160).toLowerCase();
  const phone = cleanText(body.phone, 40);
  const requirements = cleanText(body.requirements, 2000);

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Enter a valid work email.";
  }

  if (!/^[+\d][\d\s().-]{6,38}$/.test(phone)) {
    errors.phone = "Enter a valid phone number.";
  }

  if (!isOptionValue(PROJECT_TYPES, body.projectType)) {
    errors.projectType = "Choose a project type.";
  }

  if (!isOptionValue(SCOPES, body.scope)) {
    errors.scope = "Choose a scope.";
  }

  if (!isOptionValue(INTEGRATIONS, body.integrations)) {
    errors.integrations = "Choose integrations.";
  }

  if (!isOptionValue(TIMELINES, body.timeline)) {
    errors.timeline = "Choose a timeline.";
  }

  if (Object.keys(errors).length > 0) {
    return { errors, ok: false };
  }

  return {
    ok: true,
    value: {
      email,
      integrations: body.integrations as IntegrationValue,
      phone,
      projectType: body.projectType as ProjectTypeValue,
      requirements,
      scope: body.scope as ScopeValue,
      timeline: body.timeline as TimelineValue,
    },
  };
}

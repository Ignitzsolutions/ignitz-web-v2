import { execFileSync } from "node:child_process";
import { randomUUID } from "node:crypto";
import { mkdirSync } from "node:fs";
import { dirname, join } from "node:path";

import { calculateProjectQuote, type QuoteLeadInput } from "./projectQuote.ts";

type SavedQuoteLead = {
  id: string;
};

const DEFAULT_DATABASE_PATH = join(process.cwd(), "data", "project-quotes.sqlite");

function getDatabasePath() {
  return process.env.QUOTE_LEADS_DB_PATH || DEFAULT_DATABASE_PATH;
}

function sqlText(value: string) {
  return `'${value.replaceAll("'", "''")}'`;
}

function sqlNumber(value: number) {
  return Number.isFinite(value) ? String(value) : "null";
}

function buildSchemaSql() {
  return `
    pragma journal_mode = wal;
    create table if not exists quote_leads (
      id text primary key,
      created_at text not null,
      email text not null,
      phone text not null,
      project_type text not null,
      scope text not null,
      integrations text not null,
      timeline text not null,
      requirements text not null,
      estimate_min_lakhs real not null,
      estimate_max_lakhs real not null,
      estimate_min_usd real not null,
      estimate_max_usd real not null,
      timeline_label text not null,
      delivery_model text not null
    );
  `;
}

export function saveQuoteLead(input: QuoteLeadInput): SavedQuoteLead {
  const databasePath = getDatabasePath();
  const id = `quote_${randomUUID().replaceAll("-", "").slice(0, 16)}`;
  const createdAt = new Date().toISOString();
  const estimate = calculateProjectQuote(input);

  mkdirSync(dirname(databasePath), { recursive: true });

  const insertSql = `
    insert into quote_leads (
      id,
      created_at,
      email,
      phone,
      project_type,
      scope,
      integrations,
      timeline,
      requirements,
      estimate_min_lakhs,
      estimate_max_lakhs,
      estimate_min_usd,
      estimate_max_usd,
      timeline_label,
      delivery_model
    ) values (
      ${sqlText(id)},
      ${sqlText(createdAt)},
      ${sqlText(input.email)},
      ${sqlText(input.phone)},
      ${sqlText(input.projectType)},
      ${sqlText(input.scope)},
      ${sqlText(input.integrations)},
      ${sqlText(input.timeline)},
      ${sqlText(input.requirements)},
      ${sqlNumber(estimate.inrLakhs.min)},
      ${sqlNumber(estimate.inrLakhs.max)},
      ${sqlNumber(estimate.usd.min)},
      ${sqlNumber(estimate.usd.max)},
      ${sqlText(estimate.timelineLabel)},
      ${sqlText(estimate.deliveryModel)}
    );
  `;

  execFileSync("sqlite3", [databasePath], {
    input: `${buildSchemaSql()}\n${insertSql}`,
    stdio: ["pipe", "ignore", "pipe"],
  });

  return { id };
}

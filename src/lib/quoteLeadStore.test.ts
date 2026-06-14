import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { test } from "node:test";

import { saveQuoteLead } from "./quoteLeadStore.ts";

test("saves quote lead contact and internal estimate details to SQLite", () => {
  const directory = mkdtempSync(join(tmpdir(), "ignitz-quotes-"));
  const databasePath = join(directory, "quote-leads.sqlite");
  process.env.QUOTE_LEADS_DB_PATH = databasePath;

  try {
    const saved = saveQuoteLead({
      email: "buyer@example.com",
      integrations: "three-five",
      phone: "+1 555 0100",
      projectType: "business-platform",
      requirements: "A private platform with workflow approvals.",
      scope: "growth",
      timeline: "priority",
    });

    assert.match(saved.id, /^quote_/);

    const rows = JSON.parse(
      execFileSync("sqlite3", [
        "-json",
        databasePath,
        "select email, phone, project_type, estimate_min_lakhs, estimate_max_lakhs, timeline_label, delivery_model from quote_leads;",
      ]).toString(),
    );

    assert.deepEqual(rows, [
      {
        delivery_model: "Build pod",
        email: "buyer@example.com",
        estimate_max_lakhs: 26.58,
        estimate_min_lakhs: 13.29,
        phone: "+1 555 0100",
        project_type: "business-platform",
        timeline_label: "4-7 weeks",
      },
    ]);
  } finally {
    delete process.env.QUOTE_LEADS_DB_PATH;
    rmSync(directory, { force: true, recursive: true });
  }
});

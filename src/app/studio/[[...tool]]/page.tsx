"use client";

import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";
import { isSanityConfigured } from "@/sanity/env";

export const dynamic = "force-static";

export default function StudioPage() {
  if (!isSanityConfigured) {
    return (
      <main className="studio-setup">
        <section>
          <p className="eyebrow">Admin portal</p>
          <h1>Connect Sanity to edit Ignitz content.</h1>
          <p>
            Set <code>NEXT_PUBLIC_SANITY_PROJECT_ID</code> and{" "}
            <code>NEXT_PUBLIC_SANITY_DATASET</code> to enable the full Studio
            for AI products, incubator projects, hackathons, blogs, teams, and
            interns.
          </p>
        </section>
      </main>
    );
  }

  return <NextStudio config={config} />;
}

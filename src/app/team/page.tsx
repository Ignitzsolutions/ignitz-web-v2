import Link from "next/link";
import { PlatformPanelConsole } from "@/components/PlatformRoutePage";
import type { TeamMember } from "@/content/dynamic/types";
import { pageMetadata } from "@/lib/seo";
import { getTeamMembers } from "@/sanity/lib/content";

export const metadata = pageMetadata(
  "Company | Ignitz",
  "Meet the Ignitz people and operating model behind AI products, systems, training, incubation, and delivery.",
  "/team",
);

export default async function TeamPage() {
  const team = await getTeamMembers();

  return (
    <main>
      <CompanyPlatformHero team={team} />
      <CompanyOperatingCulture />
      <CompanyPeopleSystem team={team} />
    </main>
  );
}

function CompanyPlatformHero({ team }: { team: TeamMember[] }) {
  const lead = team[0];

  return (
    <section className="company-platform-hero">
      <div className="company-hero-copy">
        <p className="eyebrow">Company</p>
        <h1>The people graph behind the Ignitz platform.</h1>
        <p>
          Ignitz brings product leads, learning designers, engineers, mentors,
          and delivery operators into one AI systems company.
        </p>
      </div>
      <Link className="company-lead-panel" href={lead ? `/team/${lead.slug}` : "/contact"}>
        <span>{lead?.role ?? "Ignitz operating team"}</span>
        <PlatformPanelConsole
          active="Team"
          items={["Product", "Team", "Delivery", "Memory"]}
          label="People console"
          primary={lead?.name ?? "AI product and delivery leaders"}
          secondary={lead?.expertise?.slice(0, 2).join(" / ") ?? "Product / Systems"}
          status={lead?.role ?? "Operating team"}
        />
        <h2>{lead?.name ?? "AI product and delivery leaders"}</h2>
        <p>{lead?.bio ?? "A team built around product discovery, capability transfer, and practical AI systems."}</p>
        <strong>{lead?.expertise?.slice(0, 2).join(" / ") ?? "Product / Systems"}</strong>
      </Link>
    </section>
  );
}

function CompanyOperatingCulture() {
  const principles = [
    {
      label: "Product",
      title: "Build reusable systems, not isolated deliverables.",
      body: "Every project should create operating memory, reusable capability, or clearer product direction.",
    },
    {
      label: "Delivery",
      title: "Stay close to the workflow and the owner.",
      body: "Ignitz starts with users, constraints, data, and ownership before choosing the build surface.",
    },
    {
      label: "Learning",
      title: "Transfer capability as the system ships.",
      body: "Teams should leave with stronger operating habits, not only a launched tool.",
    },
  ];

  return (
    <section className="company-culture-system" aria-label="Ignitz operating culture">
      <div className="route-platform-copy">
        <p className="eyebrow">Operating culture</p>
        <h2>Built for teams that learn while shipping.</h2>
        <p>
          Company proof is not just logos. It is the way Ignitz turns repeated work
          into products, systems, and capability transfer.
        </p>
      </div>
      <div className="company-culture-grid">
        {principles.map((principle) => (
          <article key={principle.label}>
            <span>{principle.label}</span>
            <h3>{principle.title}</h3>
            <p>{principle.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function CompanyPeopleSystem({ team }: { team: TeamMember[] }) {
  return (
    <section className="company-people-system" aria-label="Ignitz people system">
      <div className="route-platform-copy compact">
        <p className="eyebrow">People system</p>
        <h2>Roles connected to the platform, not just biographies.</h2>
        <p>
          People are organized around the work they help compound: product discovery,
          training, incubation, mentorship, and delivery operations.
        </p>
      </div>
      <div className="company-people-grid">
        {team.map((member) => (
          <Link href={`/team/${member.slug}`} key={member.slug}>
            <span>{member.role}</span>
            <strong>{member.name}</strong>
            <p>{member.bio}</p>
            <small>{member.expertise.slice(0, 3).join(" / ")}</small>
          </Link>
        ))}
      </div>
    </section>
  );
}

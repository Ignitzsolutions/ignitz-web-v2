import Link from "next/link";
import { PlatformPanelConsole } from "@/components/PlatformRoutePage";
import type { Hackathon } from "@/content/dynamic/types";
import { pageMetadata } from "@/lib/seo";
import { getHackathons } from "@/sanity/lib/content";

export const metadata = pageMetadata(
  "Hackathons | Ignitz",
  "Explore Ignitz AI hackathons, prototype days, project outputs, and innovation programs.",
  "/hackathons",
);

export default async function HackathonsPage() {
  const hackathons = await getHackathons();

  return (
    <main>
      <HackathonsPlatformHero hackathons={hackathons} />
      <HackathonPipeline hackathons={hackathons} />
      <HackathonOutputSystem hackathons={hackathons} />
    </main>
  );
}

function HackathonsPlatformHero({ hackathons }: { hackathons: Hackathon[] }) {
  const featured = hackathons[0];
  const signals = [
    featured?.status ?? "Builder programs",
    featured?.date ?? "Scheduling in progress",
    featured?.participants ?? "Builders and Ignitz mentors",
  ];

  return (
    <section className="hackathons-platform-hero" aria-labelledby="hackathons-hero-title">
      <div className="hackathons-hero-copy">
        <p className="eyebrow">Hackathons</p>
        <h1 id="hackathons-hero-title">AI builder events that feed the Ignitz product pipeline.</h1>
        <p>
          Ignitz uses focused build sprints to test practical AI workflows, identify
          promising builders, and move useful prototypes toward incubation.
        </p>
        <div className="hero-actions">
          <Link className="button button-primary" href={featured ? `/hackathons/${featured.slug}` : "/contact"}>
            {featured?.registrationCta ?? "Register interest"}
          </Link>
          <Link className="button button-secondary" href="/labs">
            Explore Labs
          </Link>
        </div>
        <ul className="hackathons-signal-row" aria-label="Hackathon operating signals">
          {signals.map((signal) => (
            <li key={signal}>{signal}</li>
          ))}
        </ul>
      </div>

      <Link className="hackathons-mission-panel" href={featured ? `/hackathons/${featured.slug}` : "/contact"}>
        <span>{featured?.status ?? "Builder mission"}</span>
        <PlatformPanelConsole
          active="Build"
          items={["Brief", "Build", "Review", "Incubate"]}
          label="Builder console"
          primary={featured?.title ?? "AI build sprint"}
          secondary={featured?.date ?? "Scheduling in progress"}
          status="Pipeline signal"
        />
        <h2>{featured?.title ?? "AI build sprint"}</h2>
        <p>
          {featured?.theme ??
            "A guided event format for practical AI tools, delivery workflows, and early product signals."}
        </p>
        <dl>
          <div>
            <dt>Participants</dt>
            <dd>{featured?.participants ?? "Student teams, interns, engineers, and mentors"}</dd>
          </div>
          <div>
            <dt>Output</dt>
            <dd>{featured?.projectsProduced?.[0] ?? "Prototype briefs and next-step ownership"}</dd>
          </div>
        </dl>
      </Link>
    </section>
  );
}

function HackathonPipeline({ hackathons }: { hackathons: Hackathon[] }) {
  return (
    <section className="hackathons-pipeline-section" aria-labelledby="hackathons-pipeline-title">
      <div className="route-platform-copy compact">
        <p className="eyebrow">Event pipeline</p>
        <h2 id="hackathons-pipeline-title">From event brief to product candidate.</h2>
        <p>
          Each hackathon is framed as a small operating system: a theme, a builder
          cohort, visible outputs, and a practical follow-up path.
        </p>
      </div>

      {hackathons.length > 0 ? (
        <div className="hackathons-pipeline-grid">
          {hackathons.map((hackathon, index) => (
            <HackathonPipelineCard hackathon={hackathon} index={index} key={hackathon.slug} />
          ))}
        </div>
      ) : (
        <article className="hackathons-empty-panel">
          <span>Upcoming</span>
          <h3>No hackathons are published yet.</h3>
          <p>
            Upcoming builder programs can appear here once dates, themes, and
            registration details are ready to share.
          </p>
        </article>
      )}
    </section>
  );
}

function HackathonPipelineCard({
  hackathon,
  index,
}: {
  hackathon: Hackathon;
  index: number;
}) {
  return (
    <Link className="hackathons-pipeline-card" href={`/hackathons/${hackathon.slug}`}>
      <span>{String(index + 1).padStart(2, "0")}</span>
      <div>
        <p>{hackathon.status}</p>
        <h3>{hackathon.title}</h3>
        <p>{hackathon.excerpt ?? hackathon.theme}</p>
      </div>
      <dl>
        <div>
          <dt>Date</dt>
          <dd>{hackathon.date}</dd>
        </div>
        <div>
          <dt>Builders</dt>
          <dd>{hackathon.participants}</dd>
        </div>
      </dl>
      {hackathon.tags?.length ? (
        <ul aria-label={`${hackathon.title} tags`}>
          {hackathon.tags.slice(0, 3).map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      ) : null}
    </Link>
  );
}

function HackathonOutputSystem({ hackathons }: { hackathons: Hackathon[] }) {
  const outputs = Array.from(new Set(hackathons.flatMap((hackathon) => hackathon.projectsProduced))).slice(0, 6);
  const winners = Array.from(new Set(hackathons.flatMap((hackathon) => hackathon.winners))).filter(
    (winner) => winner.toLowerCase() !== "to be announced",
  );
  const outputItems = outputs.length
    ? outputs
    : [
        "Prototype briefs",
        "Mentor feedback",
        "Incubator candidates",
        "Builder shortlists",
      ];

  return (
    <section className="hackathons-output-system" aria-labelledby="hackathons-output-title">
      <div className="route-platform-copy">
        <p className="eyebrow">Output system</p>
        <h2 id="hackathons-output-title">The event is only useful if the output keeps moving.</h2>
        <p>
          Hackathon results are tracked as draft product inputs: project concepts,
          review notes, builder signals, and candidates for deeper incubation.
        </p>
      </div>
      <div className="hackathons-output-board">
        {outputItems.map((output, index) => (
          <article key={output}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{output}</strong>
            <p>{index < 2 ? "Prototype artifact" : "Follow-up signal"}</p>
          </article>
        ))}
      </div>
      <aside className="hackathons-review-panel" aria-label="Hackathon review status">
        <span>Review loop</span>
        <h3>{winners.length ? "Selected teams can move into follow-up." : "Winners and outcomes remain draft."}</h3>
        <p>
          {winners.length
            ? winners.join(", ")
            : "Published events can add approved winners, showcased outputs, and next-step ownership once confirmed."}
        </p>
      </aside>
    </section>
  );
}

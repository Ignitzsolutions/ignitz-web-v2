import Link from "next/link";
import { PlatformPanelConsole } from "@/components/PlatformRoutePage";
import { pageMetadata } from "@/lib/seo";
import { getInterns } from "@/sanity/lib/content";

export const metadata = pageMetadata(
  "Interns | Ignitz",
  "Explore Ignitz intern cohorts, tracks, mentors, and project links.",
  "/interns",
);

export default async function InternsPage() {
  const interns = await getInterns();
  const featuredIntern = interns[0];
  const tracks = Array.from(new Set(interns.map((intern) => intern.track).filter(Boolean)));
  const cohorts = Array.from(new Set(interns.map((intern) => intern.cohort).filter(Boolean)));
  const projectCount = interns.reduce(
    (total, intern) => total + (intern.projectLinks ?? []).length,
    0,
  );

  const signals = [
    {
      label: "Cohorts",
      value: cohorts.length ? `${cohorts.length}` : "Open",
      detail: cohorts.length ? "active or seeded cohorts" : "CMS-ready collection",
    },
    {
      label: "Tracks",
      value: tracks.length ? `${tracks.length}` : "Open",
      detail: tracks.length ? "capability paths represented" : "tracks publish when available",
    },
    {
      label: "Project links",
      value: projectCount ? `${projectCount}` : "Pending",
      detail: projectCount ? "prototype references captured" : "evidence can be added later",
    },
  ];

  const pipeline = [
    {
      step: "01",
      title: "Scope the capability",
      body: "Interns start with a focused business or AI systems problem, framed with a mentor and a clear outcome.",
    },
    {
      step: "02",
      title: "Build with product discipline",
      body: "Cohorts work through prototypes, reusable assets, documentation, and review loops that mirror Ignitz delivery practice.",
    },
    {
      step: "03",
      title: "Turn learning into proof",
      body: "Promising work can become demo material, hackathon evidence, product inputs, or a stronger path into embedded teams.",
    },
  ];

  return (
    <main className="interns-page">
      <section className="interns-hero" aria-labelledby="interns-hero-title">
        <div className="interns-hero__content">
          <p className="interns-hero__eyebrow">Ignitz Intern Platform</p>
          <h1 id="interns-hero-title">From emerging talent to AI systems capability.</h1>
          <p className="interns-hero__lead">
            Ignitz interns work inside a guided builder pipeline where training,
            mentorship, and prototype work connect to practical AI product
            development.
          </p>
          <div className="interns-hero__actions" aria-label="Intern platform actions">
            <Link className="interns-hero__cta interns-hero__cta--primary" href="/contact">
              Discuss a cohort
            </Link>
            <Link className="interns-hero__cta interns-hero__cta--secondary" href="/hackathons">
              View hackathons
            </Link>
          </div>
        </div>

        <aside className="interns-feature" aria-label="Featured intern signal">
          <p className="interns-feature__label">Featured builder signal</p>
          <PlatformPanelConsole
            active="Build"
            items={["Learn", "Build", "Review", "Proof"]}
            label="Builder console"
            primary={featuredIntern?.name ?? "Cohort profiles"}
            secondary={featuredIntern?.track ?? "Capability track"}
            status={featuredIntern?.cohort ?? "CMS-ready"}
          />
          {featuredIntern ? (
            <>
              <h2>{featuredIntern.name}</h2>
              <p className="interns-feature__track">
                {featuredIntern.track} / {featuredIntern.cohort}
              </p>
              <p>{featuredIntern.bio}</p>
              {featuredIntern.mentor ? (
                <p className="interns-feature__mentor">Mentor: {featuredIntern.mentor}</p>
              ) : null}
              {(featuredIntern.projectLinks ?? []).length ? (
                <Link
                  className="interns-feature__link"
                  href={featuredIntern.projectLinks[0]?.href ?? "/interns"}
                >
                  {featuredIntern.projectLinks[0]?.label ?? "View project evidence"}
                </Link>
              ) : null}
            </>
          ) : (
            <>
              <h2>Cohort profiles are being prepared.</h2>
              <p>
                Intern records can publish here once names, tracks, mentor notes,
                and project links are approved.
              </p>
            </>
          )}
        </aside>

        <dl className="interns-signal-row" aria-label="Intern program signals">
          {signals.map((signal) => (
            <div className="interns-signal-row__item" key={signal.label}>
              <dt>{signal.label}</dt>
              <dd>
                <strong>{signal.value}</strong>
                <span>{signal.detail}</span>
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="interns-cohorts" aria-labelledby="interns-cohorts-title">
        <div className="interns-section-heading">
          <p className="interns-section-heading__eyebrow">Capability cohorts</p>
          <h2 id="interns-cohorts-title">Intern profiles mapped to tracks, mentors, and proof.</h2>
          <p>
            Each card is intentionally compact so stakeholder-approved details can
            grow from a clean CMS-backed profile into a fuller capability record.
          </p>
        </div>

        {interns.length ? (
          <div className="interns-card-grid">
            {interns.map((intern) => (
              <article className="intern-card" key={intern._id}>
                <div className="intern-card__meta">
                  <span>{intern.cohort}</span>
                  <span>{intern.track}</span>
                </div>
                <h3>{intern.name}</h3>
                <p>{intern.bio}</p>
                {intern.mentor ? <p className="intern-card__mentor">Mentor: {intern.mentor}</p> : null}
                {(intern.projectLinks ?? []).length ? (
                  <ul className="intern-card__links" aria-label={`${intern.name} project links`}>
                    {(intern.projectLinks ?? []).map((project) => (
                      <li key={`${intern._id}-${project.href}`}>
                        <Link href={project.href}>{project.label}</Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="intern-card__placeholder">Project evidence pending approval.</p>
                )}
              </article>
            ))}
          </div>
        ) : (
          <p className="interns-empty-state">
            No interns are published yet. Seed or CMS-approved profiles can appear
            here without changing the page structure.
          </p>
        )}
      </section>

      <section className="interns-pipeline" aria-labelledby="interns-pipeline-title">
        <div className="interns-section-heading">
          <p className="interns-section-heading__eyebrow">Builder pipeline</p>
          <h2 id="interns-pipeline-title">A modest path from training to usable AI product evidence.</h2>
        </div>
        <ol className="interns-pipeline__steps">
          {pipeline.map((item) => (
            <li className="interns-pipeline__step" key={item.step}>
              <span className="interns-pipeline__index" aria-hidden="true">
                {item.step}
              </span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </li>
          ))}
        </ol>
        <div className="interns-pipeline__cta">
          <p>
            Builder programs can be shaped around a product idea, training need,
            internal workflow, or partner challenge.
          </p>
          <Link href="/contact">Plan a builder program</Link>
        </div>
      </section>
    </main>
  );
}

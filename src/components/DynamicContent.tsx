import Link from "next/link";
import { PlatformPanelConsole } from "./PlatformRoutePage";
import type {
  AIProduct,
  BlogPost,
  Hackathon,
  IncubatedProject,
  Intern,
  TeamMember,
} from "@/content/dynamic/types";

type CardItem = {
  title: string;
  slug: string;
  href: string;
  eyebrow: string;
  excerpt?: string;
  meta?: string;
  tags?: string[];
};

export function CollectionHero({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead: string;
}) {
  return (
    <section className="platform-collection-hero">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p>{lead}</p>
    </section>
  );
}

export function ContentGrid({ items, emptyLabel }: { items: CardItem[]; emptyLabel: string }) {
  if (!items.length) {
    return (
      <section className="platform-content-room">
        <div className="empty-state">{emptyLabel}</div>
      </section>
    );
  }

  return (
    <section className="platform-content-room">
      <div className="platform-content-grid">
        {items.map((item) => (
          <Link className="platform-content-card" href={item.href} key={item.href}>
            <span>{item.eyebrow}</span>
            <h2>{item.title}</h2>
            {item.meta ? <small>{item.meta}</small> : null}
            {item.excerpt ? <p>{item.excerpt}</p> : null}
            {item.tags?.length ? (
              <div className="tag-row">
                {item.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            ) : null}
          </Link>
        ))}
      </div>
    </section>
  );
}

export function AIProductsShowcase({ products }: { products: AIProduct[] }) {
  return (
    <section className="platform-product-room">
      <div className="platform-section-intro">
        <p className="eyebrow">AI products</p>
        <h2>AI product nodes from the Ignitz lab.</h2>
        <p>
          Concepts, prototypes, pilots, and live tools managed from the admin portal.
        </p>
      </div>
      <div className="platform-content-grid featured-grid">
        {products.slice(0, 3).map((product) => (
          <Link className="platform-content-card featured" href={`/ai-products/${product.slug}`} key={product.slug}>
            <span>{product.status}</span>
            <h2>{product.title}</h2>
            <small>{product.stage}</small>
            <p>{product.excerpt}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export function IncubatorPreview({ projects }: { projects: IncubatedProject[] }) {
  const items = projects.slice(0, 2).map((project) => ({
    title: project.title,
    slug: project.slug,
    href: `/incubator/${project.slug}`,
    eyebrow: project.stage,
    excerpt: project.excerpt,
    meta: project.owner,
    tags: project.tags,
  }));

  return (
    <section className="platform-incubator-room">
      <div className="platform-section-intro">
        <p className="eyebrow">In-house incubation</p>
        <h2>Incubation paths that feed the product graph.</h2>
        <p>
          Internal prototypes and hackathon outputs move toward product proof.
        </p>
      </div>
      <div className="platform-content-grid two-up">
        {items.length ? (
          items.map((item) => <PlatformContentCard item={item} key={item.href} />)
        ) : (
          <div className="empty-state">No incubated projects are published yet.</div>
        )}
      </div>
    </section>
  );
}

export function HackathonPreview({ hackathons }: { hackathons: Hackathon[] }) {
  const latest = hackathons[0];

  if (!latest) return null;

  return (
    <section className="platform-hackathon-room">
      <div>
        <p className="eyebrow">Hackathon pipeline</p>
        <h2>{latest.title}</h2>
        <p>{latest.excerpt}</p>
      </div>
      <Link className="hackathon-panel" href={`/hackathons/${latest.slug}`}>
        <span>{latest.status}</span>
        <strong>{latest.theme}</strong>
        <small>{latest.date}</small>
      </Link>
    </section>
  );
}

export function BlogPreview({ posts }: { posts: BlogPost[] }) {
  const items = posts.slice(0, 3).map((post) => ({
    title: post.title,
    slug: post.slug,
    href: `/blogs/${post.slug}`,
    eyebrow: post.author ?? "Ignitz",
    excerpt: post.excerpt,
    meta: post.date,
    tags: post.tags,
  }));

  return (
    <section className="platform-blog-room">
      <div className="platform-section-intro compact">
        <p className="eyebrow">Blogs</p>
        <h2>Notes from product, incubation, and delivery.</h2>
        <p>Short field notes that turn delivery learning into public memory.</p>
      </div>
      <div className="platform-content-grid">
        {items.length ? (
          items.map((item) => <PlatformContentCard item={item} key={item.href} />)
        ) : (
          <div className="empty-state">No blog posts are published yet.</div>
        )}
      </div>
    </section>
  );
}

function PlatformContentCard({ item }: { item: CardItem }) {
  return (
    <Link className="platform-content-card" href={item.href}>
      <span>{item.eyebrow}</span>
      <h2>{item.title}</h2>
      {item.meta ? <small>{item.meta}</small> : null}
      {item.excerpt ? <p>{item.excerpt}</p> : null}
      {item.tags?.length ? (
        <div className="tag-row">
          {item.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      ) : null}
    </Link>
  );
}

export function PeoplePreview({
  team,
  interns,
}: {
  team: TeamMember[];
  interns: Intern[];
}) {
  return (
    <section className="platform-people-room">
      <div className="platform-section-intro">
        <p className="eyebrow">Teams and interns</p>
        <h2>The people graph behind the product graph.</h2>
        <p>
          Mentors, team leads, interns, cohorts, and project links stay editable.
        </p>
      </div>
      <div className="people-columns">
        <PeopleList title="Team" href="/team" items={team.map((member) => `${member.name} · ${member.role}`)} />
        <PeopleList title="Interns" href="/interns" items={interns.map((intern) => `${intern.name} · ${intern.track}`)} />
      </div>
    </section>
  );
}

function PeopleList({ title, href, items }: { title: string; href: string; items: string[] }) {
  return (
    <Link className="platform-people-list" href={href}>
      <span>{title}</span>
      {items.slice(0, 4).map((item) => (
        <strong key={item}>{item}</strong>
      ))}
    </Link>
  );
}

export function DetailPage({
  eyebrow,
  title,
  lead,
  meta,
  sections,
  tags,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  meta?: string;
  sections: { title: string; body: string | string[] }[];
  tags?: string[];
}) {
  const detailSignals = sections.slice(0, 3);

  return (
    <main>
      <section className="platform-route-hero dynamic-detail-hero" aria-labelledby="detail-title">
        <div className="platform-route-copy">
          <p className="eyebrow">{eyebrow}</p>
          <h1 id="detail-title">{title}</h1>
          {lead ? <p>{lead}</p> : null}
          {tags?.length ? (
            <div className="tag-row">
              {tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          ) : null}
        </div>

        <aside className="platform-route-panel">
          <span>{meta ?? "Ignitz record"}</span>
          <PlatformPanelConsole
            active="Record"
            items={["Context", "Record", "Proof", "Next"]}
            label={meta ?? "Ignitz record"}
            primary={title}
            secondary={tags?.slice(0, 2).join(" / ") || "Editable platform record"}
            status={`${sections.length} sections`}
          />
          <h2>Structured detail for the system graph.</h2>
          <p>
            This page keeps the proof, context, capabilities, and notes close to
            the record so deeper links still feel like part of the platform.
          </p>
          <div className="platform-route-panel-footer">
            <strong>{sections.length} sections</strong>
            <small>{tags?.length ? `${tags.length} tags` : "Editable record"}</small>
          </div>
        </aside>

        <dl className="platform-route-signals" aria-label={`${title} detail signals`}>
          {detailSignals.map((section, index) => (
            <div key={section.title}>
              <dt>{String(index + 1).padStart(2, "0")}</dt>
              <dd>{section.title}</dd>
              <p>
                {Array.isArray(section.body)
                  ? `${section.body.length} recorded items`
                  : section.body}
              </p>
            </div>
          ))}
        </dl>
      </section>
      <section className="platform-detail-body">
        {sections.map((section) => (
          <article key={section.title}>
            <h2>{section.title}</h2>
            {Array.isArray(section.body) ? (
              <ul>
                {section.body.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : (
              <p>{section.body}</p>
            )}
          </article>
        ))}
      </section>
    </main>
  );
}

export function teamToCards(team: TeamMember[]): CardItem[] {
  return team.map((member) => ({
    title: member.name,
    slug: member.slug,
    href: "/team",
    eyebrow: member.role,
    excerpt: member.bio,
    tags: member.expertise,
  }));
}

export function internsToCards(interns: Intern[]): CardItem[] {
  return interns.map((intern) => ({
    title: intern.name,
    slug: intern.slug,
    href: "/interns",
    eyebrow: intern.cohort,
    excerpt: intern.bio,
    meta: intern.track,
  }));
}

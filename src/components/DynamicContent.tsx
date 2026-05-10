import Link from "next/link";
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
    <main>
      <section className="collection-hero">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{lead}</p>
      </section>
    </main>
  );
}

export function ContentGrid({ items, emptyLabel }: { items: CardItem[]; emptyLabel: string }) {
  if (!items.length) {
    return (
      <section className="section">
        <div className="empty-state">{emptyLabel}</div>
      </section>
    );
  }

  return (
    <section className="section content-grid-section">
      <div className="content-grid">
        {items.map((item) => (
          <Link className="content-card" href={item.href} key={item.href}>
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
    <section className="section product-showcase">
      <div className="section-heading">
        <p className="eyebrow">AI products</p>
        <h2>AI product nodes from the Ignitz lab.</h2>
        <p>
          Concepts, prototypes, pilots, and live tools managed from the admin portal.
        </p>
      </div>
      <div className="content-grid">
        {products.slice(0, 3).map((product) => (
          <Link className="content-card featured" href={`/ai-products/${product.slug}`} key={product.slug}>
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
  return (
    <section className="section incubator-preview">
      <div className="section-heading">
        <p className="eyebrow">In-house incubation</p>
        <h2>Incubation paths that feed the product graph.</h2>
        <p>
          Internal prototypes and hackathon outputs move toward product proof.
        </p>
      </div>
      <ContentGrid
        emptyLabel="No incubated projects are published yet."
        items={projects.slice(0, 2).map((project) => ({
          title: project.title,
          slug: project.slug,
          href: `/incubator/${project.slug}`,
          eyebrow: project.stage,
          excerpt: project.excerpt,
          meta: project.owner,
          tags: project.tags,
        }))}
      />
    </section>
  );
}

export function HackathonPreview({ hackathons }: { hackathons: Hackathon[] }) {
  const latest = hackathons[0];

  if (!latest) return null;

  return (
    <section className="section hackathon-preview">
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
  return (
    <section className="section blog-preview">
      <div className="section-heading">
        <p className="eyebrow">Blogs</p>
        <h2>Notes from product, incubation, and delivery.</h2>
      </div>
      <ContentGrid
        emptyLabel="No blog posts are published yet."
        items={posts.slice(0, 3).map((post) => ({
          title: post.title,
          slug: post.slug,
          href: `/blogs/${post.slug}`,
          eyebrow: post.author ?? "Ignitz",
          excerpt: post.excerpt,
          meta: post.date,
          tags: post.tags,
        }))}
      />
    </section>
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
    <section className="section people-preview">
      <div className="section-heading">
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
    <Link className="people-list" href={href}>
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
  return (
    <main>
      <section className="collection-hero detail-hero">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        {meta ? <small>{meta}</small> : null}
        {lead ? <p>{lead}</p> : null}
        {tags?.length ? (
          <div className="tag-row">
            {tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        ) : null}
      </section>
      <section className="section detail-body">
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

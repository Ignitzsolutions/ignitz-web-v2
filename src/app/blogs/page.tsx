import Link from "next/link";
import { PlatformPanelConsole } from "@/components/PlatformRoutePage";
import type { BlogPost } from "@/content/dynamic/types";
import { pageMetadata } from "@/lib/seo";
import { getBlogPosts } from "@/sanity/lib/content";

export const metadata = pageMetadata(
  "Resources | Ignitz",
  "Read Ignitz field notes on AI products, incubation, hackathons, interns, and delivery capability.",
  "/blogs",
);

export default async function BlogsPage() {
  const posts = await getBlogPosts();

  return (
    <main>
      <ResourcesPlatformHero posts={posts} />
      <ResourcesFieldNotes posts={posts} />
      <ResourcesOperatingThemes />
    </main>
  );
}

function ResourcesPlatformHero({ posts }: { posts: BlogPost[] }) {
  const featured = posts[0];

  return (
    <section className="resources-platform-hero">
      <div className="resources-hero-copy">
        <p className="eyebrow">Resources</p>
        <h1>Field notes from AI products, incubation, and delivery.</h1>
        <p>
          The Ignitz resource room turns product lessons, hackathon experiments,
          and delivery patterns into reusable operating memory.
        </p>
      </div>
      <Link className="resources-feature-panel" href={featured ? `/blogs/${featured.slug}` : "/contact"}>
        <span>{featured?.author ?? "Ignitz field note"}</span>
        <PlatformPanelConsole
          active="Memory"
          items={["Signal", "Note", "Memory", "Next"]}
          label="Resource console"
          primary={featured?.title ?? "AI delivery field notes"}
          secondary={featured?.date ?? "Updated regularly"}
          status="Field note"
        />
        <h2>{featured?.title ?? "AI delivery field notes"}</h2>
        <p>{featured?.excerpt ?? "Practical notes from product, incubation, and delivery work."}</p>
        <strong>{featured?.date ?? "Updated regularly"}</strong>
      </Link>
    </section>
  );
}

function ResourcesFieldNotes({ posts }: { posts: BlogPost[] }) {
  return (
    <section className="resources-field-notes" aria-label="Ignitz field notes">
      <div className="route-platform-copy compact">
        <p className="eyebrow">Field notes</p>
        <h2>Resources organized around what Ignitz is learning while building.</h2>
        <p>
          Articles are treated as working memory for product decisions, incubator
          experiments, delivery habits, and capability programs.
        </p>
      </div>
      <div className="resources-note-grid">
        {posts.map((post) => (
          <Link href={`/blogs/${post.slug}`} key={post.slug}>
            <span>{post.author ?? "Ignitz"}</span>
            <strong>{post.title}</strong>
            <p>{post.excerpt}</p>
            <small>{post.date}</small>
          </Link>
        ))}
      </div>
    </section>
  );
}

function ResourcesOperatingThemes() {
  const themes = [
    "AI products from delivery work",
    "Hackathons as product pipeline",
    "Capability transfer and team memory",
    "Business systems that operators control",
    "Healthcare workflow clarity",
    "Founder and builder learning loops",
  ];

  return (
    <section className="resources-theme-system" aria-label="Ignitz resource themes">
      <div className="route-platform-copy">
        <p className="eyebrow">Themes</p>
        <h2>The resource system follows the platform system.</h2>
        <p>
          The content roadmap should make Ignitz easier to trust: what we build,
          why it matters, how teams use it, and what we are learning from the work.
        </p>
      </div>
      <div className="resources-theme-grid">
        {themes.map((theme, index) => (
          <article key={theme}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{theme}</strong>
          </article>
        ))}
      </div>
    </section>
  );
}

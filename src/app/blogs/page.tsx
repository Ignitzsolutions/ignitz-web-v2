import { CollectionHero, ContentGrid } from "@/components/DynamicContent";
import { pageMetadata } from "@/lib/seo";
import { getBlogPosts } from "@/sanity/lib/content";

export const metadata = pageMetadata(
  "Blogs | Ignitz",
  "Read Ignitz articles on AI products, incubated projects, hackathons, interns, and delivery capability.",
  "/blogs",
);

export default async function BlogsPage() {
  const posts = await getBlogPosts();

  return (
    <>
      <CollectionHero
        eyebrow="Blogs"
        title="Field notes from AI products, incubation, and delivery."
        lead="Publish product thinking, hackathon recaps, intern stories, and practical AI delivery lessons from the Ignitz team."
      />
      <ContentGrid
        emptyLabel="No blog posts are published yet."
        items={posts.map((post) => ({
          title: post.title,
          slug: post.slug,
          href: `/blogs/${post.slug}`,
          eyebrow: post.author ?? "Ignitz",
          excerpt: post.excerpt,
          meta: post.date,
          tags: post.tags,
        }))}
      />
    </>
  );
}

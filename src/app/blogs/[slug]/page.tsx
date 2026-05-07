import { notFound } from "next/navigation";
import { DetailPage } from "@/components/DynamicContent";
import { seedBlogPosts } from "@/content/dynamic/seed";
import { pageMetadata } from "@/lib/seo";
import { getBlogPost } from "@/sanity/lib/content";

type PageProps = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return seedBlogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  return post
    ? pageMetadata(`${post.title} | Ignitz Blogs`, post.excerpt ?? post.body, `/blogs/${slug}`)
    : pageMetadata("Blog | Ignitz", "Ignitz blog detail.", `/blogs/${slug}`);
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) notFound();

  return (
    <DetailPage
      eyebrow={`Blog / ${post.author ?? "Ignitz"}`}
      title={post.title}
      lead={post.excerpt}
      meta={post.date}
      tags={post.tags}
      sections={[{ title: "Article", body: post.body }]}
    />
  );
}

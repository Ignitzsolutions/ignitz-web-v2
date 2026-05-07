import { CollectionHero, ContentGrid } from "@/components/DynamicContent";
import { pageMetadata } from "@/lib/seo";
import { getAIProducts } from "@/sanity/lib/content";

export const metadata = pageMetadata(
  "AI Products | Ignitz",
  "Explore Ignitz AI products, internal prototypes, pilots, and productized delivery capability.",
  "/ai-products",
);

export default async function AIProductsPage() {
  const products = await getAIProducts();

  return (
    <>
      <CollectionHero
        eyebrow="AI products"
        title="AI products built from real delivery work."
        lead="Browse product concepts, prototypes, pilots, and internal tools that turn Ignitz delivery insight into reusable capability."
      />
      <ContentGrid
        emptyLabel="No AI products are published yet."
        items={products.map((product) => ({
          title: product.title,
          slug: product.slug,
          href: `/ai-products/${product.slug}`,
          eyebrow: product.status,
          excerpt: product.excerpt,
          meta: product.stage,
          tags: product.tags,
        }))}
      />
    </>
  );
}

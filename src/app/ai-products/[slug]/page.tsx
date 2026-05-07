import { notFound } from "next/navigation";
import { DetailPage } from "@/components/DynamicContent";
import { seedAIProducts } from "@/content/dynamic/seed";
import { pageMetadata } from "@/lib/seo";
import { getAIProduct } from "@/sanity/lib/content";

type PageProps = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return seedAIProducts.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const product = await getAIProduct(slug);
  return product
    ? pageMetadata(`${product.title} | Ignitz AI Products`, product.excerpt ?? product.solution, `/ai-products/${slug}`)
    : pageMetadata("AI Product | Ignitz", "Ignitz AI product detail.", `/ai-products/${slug}`);
}

export default async function AIProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = await getAIProduct(slug);

  if (!product) notFound();

  return (
    <DetailPage
      eyebrow={`AI Product / ${product.status}`}
      title={product.title}
      lead={product.excerpt}
      meta={product.stage}
      tags={product.tags}
      sections={[
        { title: "Problem", body: product.problem },
        { title: "Solution", body: product.solution },
        { title: "Capabilities", body: product.capabilities },
        { title: "Target users", body: product.targetUsers },
      ]}
    />
  );
}

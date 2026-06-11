import Link from "next/link";
import { PlatformPanelConsole } from "@/components/PlatformRoutePage";
import type { AIProduct } from "@/content/dynamic/types";
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
    <main>
      <AIProductsPlatformHero products={products} />
      <AIProductsPortfolio products={products} />
      <AIProductsCapabilityMatrix products={products} />
    </main>
  );
}

function AIProductsPlatformHero({ products }: { products: AIProduct[] }) {
  const primaryProduct = products[0];

  return (
    <section className="ai-products-platform-hero">
      <div className="ai-products-hero-copy">
        <p className="eyebrow">Products</p>
        <h1>AI products built from real delivery work.</h1>
        <p>
          Ignitz turns repeated workflow pain into product concepts, pilots, and
          internal tools that can become reusable operating capability.
        </p>
        <div className="hero-actions">
          <Link className="button button-primary" href={primaryProduct ? `/ai-products/${primaryProduct.slug}` : "/contact"}>
            View flagship product
          </Link>
          <Link className="button button-secondary" href="/labs">
            Explore Labs
          </Link>
        </div>
      </div>
      <Link className="ai-products-hero-panel" href={primaryProduct ? `/ai-products/${primaryProduct.slug}` : "/contact"}>
        <span>{primaryProduct?.status ?? "Flagship"}</span>
        <PlatformPanelConsole
          active="Product"
          items={["Workflow", "Product", "Pilot", "Memory"]}
          label="Product console"
          primary={primaryProduct?.title ?? "Evaluate Yourself"}
          secondary={primaryProduct?.stage ?? "Product direction"}
          status="Portfolio-ready"
        />
        <h2>{primaryProduct?.title ?? "Evaluate Yourself"}</h2>
        <p>{primaryProduct?.excerpt ?? "Structured product capability from the Ignitz AI lab."}</p>
        <strong>{primaryProduct?.stage ?? "Product direction"}</strong>
      </Link>
    </section>
  );
}

function AIProductsPortfolio({ products }: { products: AIProduct[] }) {
  return (
    <section className="ai-products-portfolio" aria-label="Ignitz AI product portfolio">
      <div className="route-platform-copy compact">
        <p className="eyebrow">Portfolio</p>
        <h2>Each product is a node in the Ignitz operating graph.</h2>
        <p>
          The portfolio is intentionally practical: proposal intelligence, learning
          copilots, delivery operations, and workflow automation that emerge from real work.
        </p>
      </div>
      <div className="ai-product-node-grid">
        {products.map((product) => (
          <Link href={`/ai-products/${product.slug}`} key={product.slug}>
            <span>{product.status}</span>
            <strong>{product.title}</strong>
            <p>{product.excerpt}</p>
            <small>{product.stage}</small>
          </Link>
        ))}
      </div>
    </section>
  );
}

function AIProductsCapabilityMatrix({ products }: { products: AIProduct[] }) {
  const capabilities = Array.from(new Set(products.flatMap((product) => product.capabilities))).slice(0, 9);

  return (
    <section className="ai-products-capability-matrix" aria-label="AI product capability matrix">
      <div className="route-platform-copy">
        <p className="eyebrow">Capability matrix</p>
        <h2>Reusable AI product capabilities, not one-off demos.</h2>
        <p>
          Product concepts are evaluated by the capabilities they create: document
          intelligence, feedback loops, risk visibility, cohort analytics, and operating memory.
        </p>
      </div>
      <div className="ai-product-capability-grid">
        {capabilities.map((capability, index) => (
          <article key={capability}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{capability}</strong>
          </article>
        ))}
      </div>
    </section>
  );
}

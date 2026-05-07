import { notFound } from "next/navigation";
import { DetailPage } from "@/components/DynamicContent";
import { seedHackathons } from "@/content/dynamic/seed";
import { pageMetadata } from "@/lib/seo";
import { getHackathon } from "@/sanity/lib/content";

type PageProps = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return seedHackathons.map((hackathon) => ({ slug: hackathon.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const hackathon = await getHackathon(slug);
  return hackathon
    ? pageMetadata(`${hackathon.title} | Ignitz Hackathons`, hackathon.excerpt ?? hackathon.theme, `/hackathons/${slug}`)
    : pageMetadata("Hackathon | Ignitz", "Ignitz hackathon detail.", `/hackathons/${slug}`);
}

export default async function HackathonDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const hackathon = await getHackathon(slug);

  if (!hackathon) notFound();

  return (
    <DetailPage
      eyebrow={`Hackathon / ${hackathon.status}`}
      title={hackathon.title}
      lead={hackathon.excerpt}
      meta={`${hackathon.date} · ${hackathon.participants}`}
      tags={hackathon.tags}
      sections={[
        { title: "Theme", body: hackathon.theme },
        { title: "Projects produced", body: hackathon.projectsProduced },
        { title: "Winners", body: hackathon.winners },
        { title: "Registration", body: hackathon.registrationCta ?? "Contact Ignitz to participate or sponsor." },
      ]}
    />
  );
}

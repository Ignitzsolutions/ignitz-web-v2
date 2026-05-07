import { notFound } from "next/navigation";
import { DetailPage } from "@/components/DynamicContent";
import { seedIncubatedProjects } from "@/content/dynamic/seed";
import { pageMetadata } from "@/lib/seo";
import { getIncubatedProject } from "@/sanity/lib/content";

type PageProps = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return seedIncubatedProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const project = await getIncubatedProject(slug);
  return project
    ? pageMetadata(`${project.title} | Ignitz Incubator`, project.excerpt ?? project.problem, `/incubator/${slug}`)
    : pageMetadata("Incubated Project | Ignitz", "Ignitz incubated project detail.", `/incubator/${slug}`);
}

export default async function IncubatorDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = await getIncubatedProject(slug);

  if (!project) notFound();

  return (
    <DetailPage
      eyebrow={`Incubator / ${project.stage}`}
      title={project.title}
      lead={project.excerpt}
      meta={project.owner}
      tags={project.tags}
      sections={[
        { title: "Problem", body: project.problem },
        { title: "Prototype notes", body: project.prototypeNotes },
        { title: "Technologies", body: project.technologies },
        { title: "Outcomes", body: project.outcomes },
      ]}
    />
  );
}

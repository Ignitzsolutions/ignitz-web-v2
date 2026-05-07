export const imageProjection = `{
  "url": asset->url,
  alt
}`;

export const aiProductProjection = `{
  _id,
  title,
  "slug": slug.current,
  status,
  stage,
  excerpt,
  "image": heroImage ${imageProjection},
  problem,
  solution,
  capabilities,
  targetUsers,
  demoCta,
  "tags": tags[]->title
}`;

export const incubatedProjectProjection = `{
  _id,
  title,
  "slug": slug.current,
  stage,
  owner,
  excerpt,
  problem,
  prototypeNotes,
  technologies,
  outcomes,
  "linkedProductSlug": linkedProduct->slug.current,
  "tags": tags[]->title
}`;

export const hackathonProjection = `{
  _id,
  title,
  "slug": slug.current,
  date,
  status,
  theme,
  participants,
  excerpt,
  projectsProduced,
  winners,
  registrationCta,
  "tags": tags[]->title
}`;

export const blogPostProjection = `{
  _id,
  title,
  "slug": slug.current,
  "author": author->name,
  date,
  excerpt,
  "image": coverImage ${imageProjection},
  "body": pt::text(body),
  "tags": tags[]->title,
  "relatedSlugs": coalesce(relatedProducts[]->slug.current, []) + coalesce(relatedProjects[]->slug.current, [])
}`;

export const teamMemberProjection = `{
  _id,
  name,
  "slug": slug.current,
  role,
  bio,
  expertise,
  "image": photo ${imageProjection},
  socialLinks,
  sortOrder
}`;

export const internProjection = `{
  _id,
  name,
  "slug": slug.current,
  cohort,
  track,
  bio,
  "image": photo ${imageProjection},
  projectLinks,
  "mentor": mentor->name
}`;

export const aiProductsQuery = `*[_type == "aiProduct" && defined(slug.current)] | order(_createdAt desc) ${aiProductProjection}`;
export const aiProductBySlugQuery = `*[_type == "aiProduct" && slug.current == $slug][0] ${aiProductProjection}`;

export const incubatedProjectsQuery = `*[_type == "incubatedProject" && defined(slug.current)] | order(_createdAt desc) ${incubatedProjectProjection}`;
export const incubatedProjectBySlugQuery = `*[_type == "incubatedProject" && slug.current == $slug][0] ${incubatedProjectProjection}`;

export const hackathonsQuery = `*[_type == "hackathon" && defined(slug.current)] | order(date desc) ${hackathonProjection}`;
export const hackathonBySlugQuery = `*[_type == "hackathon" && slug.current == $slug][0] ${hackathonProjection}`;

export const blogPostsQuery = `*[_type == "blogPost" && defined(slug.current)] | order(date desc) ${blogPostProjection}`;
export const blogPostBySlugQuery = `*[_type == "blogPost" && slug.current == $slug][0] ${blogPostProjection}`;

export const teamMembersQuery = `*[_type == "teamMember" && visible != false && defined(slug.current)] | order(sortOrder asc, name asc) ${teamMemberProjection}`;
export const internsQuery = `*[_type == "intern" && visible != false && defined(slug.current)] | order(cohort desc, name asc) ${internProjection}`;

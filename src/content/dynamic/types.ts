export type ContentImage = {
  url?: string;
  alt?: string;
};

export type DynamicBase = {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  image?: ContentImage;
  tags?: string[];
};

export type AIProduct = DynamicBase & {
  status: string;
  stage: string;
  problem: string;
  solution: string;
  capabilities: string[];
  targetUsers: string[];
  demoCta?: string;
};

export type IncubatedProject = DynamicBase & {
  stage: string;
  owner: string;
  problem: string;
  prototypeNotes: string;
  technologies: string[];
  outcomes: string[];
  linkedProductSlug?: string;
};

export type Hackathon = DynamicBase & {
  date: string;
  status: string;
  theme: string;
  participants: string;
  projectsProduced: string[];
  winners: string[];
  registrationCta?: string;
};

export type BlogPost = DynamicBase & {
  author?: string;
  date: string;
  body: string;
  relatedSlugs?: string[];
};

export type TeamMember = {
  _id: string;
  name: string;
  role: string;
  slug: string;
  bio: string;
  expertise: string[];
  image?: ContentImage;
  socialLinks?: { label: string; href: string }[];
  sortOrder?: number;
};

export type Intern = {
  _id: string;
  name: string;
  cohort: string;
  track: string;
  slug: string;
  bio: string;
  projectLinks: { label: string; href: string }[];
  mentor?: string;
  image?: ContentImage;
};

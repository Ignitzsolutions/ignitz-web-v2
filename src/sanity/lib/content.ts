import {
  seedAIProducts,
  seedBlogPosts,
  seedHackathons,
  seedIncubatedProjects,
  seedInterns,
  seedTeamMembers,
} from "@/content/dynamic/seed";
import type {
  AIProduct,
  BlogPost,
  Hackathon,
  IncubatedProject,
  Intern,
  TeamMember,
} from "@/content/dynamic/types";
import { sanityFetch } from "./client";
import {
  aiProductBySlugQuery,
  aiProductsQuery,
  blogPostBySlugQuery,
  blogPostsQuery,
  hackathonBySlugQuery,
  hackathonsQuery,
  incubatedProjectBySlugQuery,
  incubatedProjectsQuery,
  internsQuery,
  teamMembersQuery,
} from "./queries";

function listOrSeed<T>(items: T[] | null, seed: T[]) {
  return items?.length ? items : seed;
}

function itemOrSeed<T extends { slug: string }>(item: T | null, seed: T[], slug: string) {
  return item ?? seed.find((entry) => entry.slug === slug) ?? null;
}

export async function getAIProducts() {
  const items = await sanityFetch<AIProduct[]>(aiProductsQuery);
  return listOrSeed(items, seedAIProducts);
}

export async function getAIProduct(slug: string) {
  const item = await sanityFetch<AIProduct>(aiProductBySlugQuery, { slug });
  return itemOrSeed(item, seedAIProducts, slug);
}

export async function getIncubatedProjects() {
  const items = await sanityFetch<IncubatedProject[]>(incubatedProjectsQuery);
  return listOrSeed(items, seedIncubatedProjects);
}

export async function getIncubatedProject(slug: string) {
  const item = await sanityFetch<IncubatedProject>(incubatedProjectBySlugQuery, { slug });
  return itemOrSeed(item, seedIncubatedProjects, slug);
}

export async function getHackathons() {
  const items = await sanityFetch<Hackathon[]>(hackathonsQuery);
  return listOrSeed(items, seedHackathons);
}

export async function getHackathon(slug: string) {
  const item = await sanityFetch<Hackathon>(hackathonBySlugQuery, { slug });
  return itemOrSeed(item, seedHackathons, slug);
}

export async function getBlogPosts() {
  const items = await sanityFetch<BlogPost[]>(blogPostsQuery);
  return listOrSeed(items, seedBlogPosts);
}

export async function getBlogPost(slug: string) {
  const item = await sanityFetch<BlogPost>(blogPostBySlugQuery, { slug });
  return itemOrSeed(item, seedBlogPosts, slug);
}

export async function getTeamMembers() {
  const items = await sanityFetch<TeamMember[]>(teamMembersQuery);
  return listOrSeed(items, seedTeamMembers);
}

export async function getInterns() {
  const items = await sanityFetch<Intern[]>(internsQuery);
  return listOrSeed(items, seedInterns);
}

import type { MetadataRoute } from "next";
import {
  seedAIProducts,
  seedBlogPosts,
  seedHackathons,
  seedIncubatedProjects,
} from "@/content/dynamic/seed";
import { site } from "@/content/site";

const routes = [
  "/",
  "/business-systems",
  "/health",
  "/ai-products",
  "/incubator",
  "/hackathons",
  "/blogs",
  "/team",
  "/interns",
  "/training",
  "/training/consulting-bootcamps",
  "/training/ai-leadership-and-readiness",
  "/ai-product-development",
  "/expert-teams",
  "/industries",
  "/case-studies",
  "/about",
  "/careers",
  "/contact",
  "/privacy",
  "/terms",
  "/accessibility",
  ...seedAIProducts.map(({ slug }) => `/ai-products/${slug}`),
  ...seedIncubatedProjects.map(({ slug }) => `/incubator/${slug}`),
  ...seedHackathons.map(({ slug }) => `/hackathons/${slug}`),
  ...seedBlogPosts.map(({ slug }) => `/blogs/${slug}`),
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: new URL(route, site.url).toString(),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));
}

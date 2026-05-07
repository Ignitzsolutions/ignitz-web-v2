import type { MetadataRoute } from "next";
import { site } from "@/content/site";

const routes = [
  "/",
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
  "/insights",
  "/about",
  "/careers",
  "/contact",
  "/privacy",
  "/terms",
  "/accessibility",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: new URL(route, site.url).toString(),
    lastModified: new Date(),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));
}

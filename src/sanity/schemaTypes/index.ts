import { aiProduct } from "./aiProduct";
import { blogPost } from "./blogPost";
import { categoryTag } from "./categoryTag";
import { hackathon } from "./hackathon";
import { incubatedProject } from "./incubatedProject";
import { author, intern, teamMember } from "./people";
import { contentImage, projectLink, socialLink } from "./objects";

export const schemaTypes = [
  aiProduct,
  incubatedProject,
  hackathon,
  blogPost,
  teamMember,
  intern,
  author,
  categoryTag,
  contentImage,
  socialLink,
  projectLink,
];

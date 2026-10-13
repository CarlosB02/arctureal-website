import siteData from "../../content/site.json";
import projectsData from "../../content/projects.json";
import groupData from "../../content/group.json";
import aboutData from "../../content/about.json";
import jobsData from "../../content/jobs.json";

export interface ProjectSpec {
  label: string;
  value: string;
}

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  category: "Habitação" | "Comercial" | "Regeneração Urbana" | "Hotelaria" | string;
  year: string;
  location: string;
  company: string;
  area: string;
  status: string;
  featured: boolean;
  summary: string;
  description: string;
  specs: ProjectSpec[];
  image: string;
  gallery: string[];
  todo: string;
}

export interface GroupKpi {
  label: string;
  value: string;
}

export interface GroupCompany {
  id: string;
  index?: string;
  name: string;
  badge?: string;
  tagline: string;
  focus?: string;
  description: string;
  image: string;
  kpis: GroupKpi[];
  services?: string[];
  metrics?: {
    projects: string;
    awards: string;
  };
  link?: string;
  linkText?: string;
  todo?: string;
}

export interface GroupPillar {
  number: string;
  title: string;
  text: string;
}

export interface GroupArea {
  id: string;
  index: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  highlights?: string[];
}

export interface GroupData {
  heading: string;
  subheading: string;
  philosophy: string;
  hero?: {
    eyebrow: string;
    title: string;
    subtitle?: string;
    image: string;
  };
  intro?: {
    eyebrow: string;
    title: string;
    text: string;
    highlights?: { label: string; value: string }[];
  };
  areasSection?: {
    eyebrow?: string;
    title: string;
    subtitle?: string;
  };
  areas?: GroupArea[];
  companiesSection?: {
    eyebrow?: string;
    title: string;
    subtitle?: string;
  };
  companies?: GroupCompany[];
  pillars?: GroupPillar[];
  cta?: {
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
  };
}

export interface Leader {
  name: string;
  role: string;
  bio: string;
  todo: string;
}

export function getSiteConfig() {
  return siteData;
}

export function getAllProjects(): Project[] {
  return projectsData as Project[];
}

export function getFeaturedProjects(): Project[] {
  return (projectsData as Project[]).filter((p) => p.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return (projectsData as Project[]).find((p) => p.slug === slug);
}

export function getGroupData(): GroupData {
  return groupData as unknown as GroupData;
}

export function getAboutData() {
  return aboutData;
}

export interface Job {
  id: string;
  title: string;
  department: string;
  type: string;
  location: string;
  badge?: string;
  confidential?: boolean;
  tagline?: string;
  overview: string;
  mission: string;
  responsibilities: string[];
  requirements: string[];
  keyTraits: string;
}

export interface JobsData {
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    image: string;
  };
  intro: {
    eyebrow: string;
    title: string;
    text: string;
  };
  jobs: Job[];
}

export function getJobsData(): JobsData {
  return jobsData as unknown as JobsData;
}

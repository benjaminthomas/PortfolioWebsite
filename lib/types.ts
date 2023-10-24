import { links } from "@/lib/data";

export type SectionName = (typeof links)[number]["name"];

export type ProjectSanityProps = {
  _id: string;
  _type: "project";
  title: string;
  description: string;
  tags: string[];
  link: string;
  image: string;
  imageAlt: string;
};

import { links } from "@/lib/data";

export type SectionName = (typeof links)[number]["name"];
export type ProjectPropsImports = {
  _id: string;
  _type: "project";
  title: string;
  description: string;
  tag: string[];
  link: string;
  image: string;
  imageAlt: string;
};

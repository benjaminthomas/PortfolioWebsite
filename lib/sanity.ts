import { createClient } from "next-sanity";

const projectId = "dpkbonr3";
const dataset = "production";
const apiVersion = "2023-01-01";

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});

const projectId = `${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}`;
const dataset = `${process.env.NEXT_PUBLIC_SANITY_DATASET}`;
const apiVersion = "2023-01-01";

export const clientConfig = {
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
};

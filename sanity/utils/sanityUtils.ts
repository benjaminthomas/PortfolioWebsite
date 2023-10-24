import { createClient, groq } from "next-sanity";
import { clientConfig } from "../config/clientConfig";

export async function getProjects() {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project"]{
        _id,
        _type,
        title,
        description,
        tag,
        link,
        'image': image.asset->url,
        'imageAlt': image.alt,
    }`
  );
}

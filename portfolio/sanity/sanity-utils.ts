import {createClient, groq} from 'next-sanity'

const projectId = 'dpkbonr3'
const dataset = 'production'
const apiVersion = '2023-01-01'

export async function getProjects() {
  const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true,
  })

  return client.fetch(
    groq`*[_type == "project"]{
        _id,
        _type,
        title,
        description,
        tag,
        link,
        'image': image.asset->url,
        'imageAlt': image.alt,
    }`,
  )
}

import { createClient, groq } from 'next-sanity'

export async function getProject() {
    const client = createClient({
        projectId: "6m6bm4nq",
        dataset: "production",
        apiVersion: "2023-06-21",
    })

    return client.fetch(
        groq`*[_type == "project"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content
          }`
    )

}


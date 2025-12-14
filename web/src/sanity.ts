import { createClient } from "@sanity/client"
import { createImageUrlBuilder } from "@sanity/image-url"

export const client = createClient({
    projectId: "310fjljl",
    dataset: "production",
    useCdn: true,
    apiVersion: "2023-05-03",
})

const builder = createImageUrlBuilder(client)

export function urlFor(source: any) {
    return builder.image(source)
}
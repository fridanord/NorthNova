export const getAllProjects = `*[_type == "project"]{
  _id,
  title,
  description,
  "slug": slug.current,
  type,
  "imageUrl": mainImage.asset->url
}`;


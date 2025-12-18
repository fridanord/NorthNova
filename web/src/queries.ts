export const getAllProjects = `*[_type == "project"]{
  _id,
  title,
  description,
  "slug": slug.current,
  type,
  "imageUrl": image.asset->url
}`;

export const getSingleProject = `*[slug.current == $slug][0]{
   _id,
   title,
   description,
   type,
   "imageUrl": image.asset->url,
   "slug": slug.current
}`;
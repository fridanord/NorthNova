//Project
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
   "slug": slug.current,
   "date": _createdAt
}`;

//Articles

export const getAllArticles = `*[_type == "article"] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  "publishedAt": publishedAt,
  "imageUrl": image.asset->url,
  "description" : content
}`;

export const getSingleArticle = `*[slug.current == $slug] [0]{
   _id,
   title,
   "slug": slug.current,
   "publishedAt": publishedAt,
   "imageUrl": image.asset->url,
   "description": content
}`;
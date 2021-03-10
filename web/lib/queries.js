const cardFields = `
_id,
'slug': slug.current,
title,
image {
  asset ->
}
`;

export const indexQuery = `
*[_type == 'card'] {
  ${cardFields}
}`;

export const cardQuery = `
{
  "card": *[_type == "card" && slug.current == $slug] | order(_updatedAt desc) | [0] {
    text,
    ${cardFields}
  }
}`;

export const cardSlugsQuery = `
*[_type == "card" && defined(slug.current)][].slug.current
`;

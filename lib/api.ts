const API_URL = process.env.WORDPRESS_API_URL;

const numberOfPosts = 100

async function fetchAPI(query = "", { variables }: Record<string, any> = {}) {
  const headers = { "Content-Type": "application/json" };

  if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
    headers[
      "Authorization"
    ] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`;
  }

  // WPGraphQL Plugin must be enabled
  const res = await fetch(API_URL, {
    headers,
    method: "POST",
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }
  return json.data;
}

export async function getPreviewPost(id, idType = "DATABASE_ID") {
  const data = await fetchAPI(
    `
    query PreviewPost($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        databaseId
        slug
        status
      }
    }`,
    {
      variables: { id, idType },
    },
  );
  return data.post;
}

export async function getAllPostsWithSlug() { 
  // i think i may have made the request unnecessarily fat. 
  // do i still need id, tags and categories returned alongside slugs ??? 
  const data = await fetchAPI(`
    {
      posts(first: 10000) {
        edges {
          node {
            slug
            id
            tags {
              edges {
                node {
                  name
                }
              }              
            }
            categories {
              edges {
                node {
                  name
                }
              }              
            }
          }
        }
      }
    }
  `);
  return data?.posts;
}

export async function getAllCategories() {
  const data = await fetchAPI(`
    {
      categories {
        edges {
          node {
            slug
            name
            link
          }
        }
      }
    }
  `);
  return data;
}

export async function getAlltags() {
  const data = await fetchAPI(`
    {
      tags {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);
  return data;
}

export async function getAllPostsForHome(preview) {
  const data = await fetchAPI(
    `
    query AllPosts {
      posts(first: ${numberOfPosts}, where: { orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            title
            excerpt
            slug
            date
            categories(first: 1) {
              edges {
                node {
                  name
                  slug
                }
              }
            }
            extras {
              isCoverStory
              isFeatured
            }
            featuredImage {
              node {
                sourceUrl
              }
            }
            author {
              node {
                name
                firstName
                lastName
                avatar {
                  url
                }
              }
            }
          }
        }
      }
    }
  `,
    {
      variables: {
        onlyEnabled: !preview,
        preview,
      },
    },
  );

  return data?.posts;
}

export async function getAllPostsByCategory(category) {
  const data = await fetchAPI(
    `
    query getAllPostsByCategory($category: String!) {
      posts(where: {categoryName: $category, status: PUBLISH}) {
        edges {
          node {
            author {
              node {
                name
                slug
              }
            }
            categories {
              edges {
                node {
                  name
                  slug
                  id
                }
              }
            }
            slug
            title
            featuredImage {
              node {
                sourceUrl
              }
            }
          }
        }
      }
    }
  `,
    {
      variables: {
        category
      },
    },
  );

  return data?.posts;
}

export async function getAllPostsByTag(tag) {
  const data = await fetchAPI(
    `
    query getAllPostsByTags($tag: String!) {
      posts(where: {tag: $tag, status: PUBLISH}) {
        edges {
          node {
            author {
              node {
                name
                slug
              }
            }
            categories {
              edges {
                node {
                  name
                  slug
                  id
                }
              }
            }
            slug
            title
            featuredImage {
              node {
                sourceUrl
              }
            }
          }
        }
      }
    }
  `,
    {
      variables: {
        tag
      },
    },
  );

  return data?.posts;
}

export async function getAllPostsByCategoryAndTags(slug, category, tags) {
  // query AllPosts($categories: [ID] = [4, 5, 6], $tags: [String] = ["health", "data", "news"])

  // console.log({category});
  const data = await fetchAPI(
    `
    query AllPosts($categories: [ID]!, $tags: [String]!) {
      posts(first: 4, where: {categoryIn: $categories, tagSlugIn: $tags}) {
        edges {
          node {
            title
            excerpt
            slug
            date
            categories(first: 1) {
              edges {
                node {
                  name
                  slug
                }
              }
            }
            featuredImage {
              node {
                sourceUrl
              }
            }
            author {
              node {
                name
                firstName
                lastName
                avatar {
                  url
                }
              }
            }
          }
        }
      }
    }
  `,
    {
      variables: {
        categories: [category],
        tags
      },
    },
  );


  // Filter out the main post // just so the subject post is not returned
  data.posts.edges = data.posts.edges.filter(({ node }) => node.slug !== slug);

  return data?.posts;
}

export async function getPostAndMorePosts(slug, preview, previewData) {
  const postPreview = preview && previewData?.post;
  // The slug may be the id of an unpublished post
  const isId = Number.isInteger(Number(slug));
  const isSamePost = isId
    ? Number(slug) === postPreview.id
    : slug === postPreview.slug;
  const isDraft = isSamePost && postPreview?.status === "draft";
  const isRevision = isSamePost && postPreview?.status === "publish";
  const tagLimit = 3 // number of tags to return for slug article. same tags are passed to fetch related articles
  const data = await fetchAPI(
    `
    fragment AuthorFields on User {
      name
      firstName
      lastName
      avatar {
        url
      }
    }
    fragment PostFields on Post {
      title
      excerpt
      slug
      date
      featuredImage {
        node {
          sourceUrl
        }
      }
      author {
        node {
          ...AuthorFields
        }
      }
      categories {
        edges {
          node {
            name
            slug
            categoryId
          }
        }
      }
      tags(first: ${tagLimit}) {
        edges {
          node {
            name
          }
        }
      }
    }
    query PostBySlug($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        ...PostFields
        content
        ${
          // Only some of the fields of a revision are considered as there are some inconsistencies
          isRevision
            ? `
        revisions(first: 1, where: { orderby: { field: MODIFIED, order: DESC } }) {
          edges {
            node {
              title
              excerpt
              content
              author {
                node {
                  ...AuthorFields
                }
              }
            }
          }
        }
        `
            : ""
        }
      }
      
      posts(first: 5, where: {orderby: {field: DATE, order: DESC}}) {
        edges {
          node {
            ...PostFields
          }
        }
      }
      categories {
        edges {
          node {
            name
            slug
          }
        }
      }
    }
  `,
    {
      variables: {
        id: isDraft ? postPreview.id : slug,
        idType: isDraft ? "DATABASE_ID" : "SLUG",
      },
    },
  );

  // Draft posts may not have an slug
  if (isDraft) data.post.slug = postPreview.id;

  // Apply a revision (changes in a published post)
  if (isRevision && data.post.revisions) {
    const revision = data.post.revisions.edges[0]?.node;

    if (revision) Object.assign(data.post, revision);
    delete data.post.revisions;
  }

  // Filter out the main post // just so the subject post is not returned
  // data.posts.edges = data.posts.edges.filter(({ node }) => node.slug !== slug);

  // If there are still 3 posts, remove the last one // dunno why this - zeelz
  // if (data.posts.edges.length > 2) data.posts.edges.pop();

  return data;
}

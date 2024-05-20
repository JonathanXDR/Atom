export function getPostsByYear(posts) {
  const postsByYear = {};
  posts.forEach((post) => {
    const year = new Date(post.date).getFullYear();
    if (!postsByYear[year]) postsByYear[year] = [];
    postsByYear[year].push(post);
  });
  return postsByYear;
}
